const express = require('express');
const path = require('path');
const WebSocket = require('ws');
const chokidar = require('chokidar');

const app = express();
const PORT = process.env.PORT || 3000;

// Crear servidor WebSocket
const server = app.listen(PORT);
const wss = new WebSocket.Server({ server });

// Configurar middleware para servir archivos estáticos
app.use(express.static('dist'));
app.use('/css', express.static('dist/css'));
app.use('/js', express.static('dist/js'));
app.use('/assets', express.static('dist/assets'));

// Ruta principal para desarrollo
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Observar cambios en archivos
const watcher = chokidar.watch([
    'src/**/*.html',
    'src/**/*.scss',
    'src/**/*.js'
]);

// Notificar a los clientes cuando hay cambios
watcher.on('change', (path) => {
    console.log(`File ${path} has been changed`);
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send('reload');
        }
    });
});

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'src', '404.html'));
});

// Manejo de errores generales
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('¡Algo salió mal!');
});

console.log(`Servidor de desarrollo corriendo en http://localhost:${PORT}`); 