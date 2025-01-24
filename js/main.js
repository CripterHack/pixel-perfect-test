// Intersection Observer para animaciones al hacer scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '50px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Acordeón mejorado
function initAccordion() {
    const accordionItems = document.querySelectorAll(".accordion-item");
    
    // Función para cerrar todos los items excepto el activo
    function closeOtherItems(currentItem) {
        accordionItems.forEach(item => {
            if (item !== currentItem) {
                const content = item.querySelector('.accordion-content');
                const icon = item.querySelector('.accordion-icon');
                content.classList.remove('active');
                content.style.maxHeight = null;
                icon.textContent = '+';
            }
        });
    }

    // Función para abrir/cerrar un item
    function toggleItem(item) {
        const content = item.querySelector('.accordion-content');
        const icon = item.querySelector('.accordion-icon');
        const isActive = content.classList.contains('active');

        if (!isActive) {
            closeOtherItems(item);
            content.classList.add('active');
            content.style.maxHeight = content.scrollHeight + "px";
            icon.textContent = '-';
        } else {
            content.classList.remove('active');
            content.style.maxHeight = null;
            icon.textContent = '+';
        }
    }

    // Inicializar el primer item como activo
    if (accordionItems.length > 0) {
        const firstItem = accordionItems[0];
        const firstContent = firstItem.querySelector('.accordion-content');
        const firstIcon = firstItem.querySelector('.accordion-icon');
        
        firstContent.classList.add('active');
        firstContent.style.maxHeight = firstContent.scrollHeight + "px";
        firstIcon.textContent = '-';
    }

    // Agregar event listeners
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => toggleItem(item));
    });

    // Recalcular alturas cuando se carguen las imágenes
    window.addEventListener('load', () => {
        document.querySelectorAll('.accordion-content.active').forEach(content => {
            content.style.maxHeight = content.scrollHeight + "px";
        });
    });
}

// Tabs mejorados
function initTabs() {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");
    
    function activateTab(tabId) {
        // Desactivar todos los tabs
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => {
            content.classList.remove('active');
            content.style.opacity = '0';
        });
        
        // Activar el tab seleccionado
        const activeButton = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
        const activeContent = document.querySelector(`.tab-content[data-tab="${tabId}"]`);
        
        activeButton.classList.add('active');
        activeContent.classList.add('active');
        
        // Animar la aparición del contenido
        setTimeout(() => {
            activeContent.style.opacity = '1';
        }, 50);
    }

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            activateTab(button.dataset.tab);
        });
    });
}

// Inicialización cuando el DOM está listo
document.addEventListener("DOMContentLoaded", function() {
    // Observar elementos para animaciones
    const elementsToAnimate = document.querySelectorAll('section, .achievement-card, .testimonial-card');
    elementsToAnimate.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Inicializar componentes
    initAccordion();
    initTabs();
}); 