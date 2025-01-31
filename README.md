# Frontend Technical Interview - Landing Page

## 📋 Overview
This project is a responsive landing page developed as part of a frontend technical interview. It showcases skills in responsive design, pixel-perfect implementation, and modern web development practices. The implementation is based on designs provided through the Zeplin platform.

## 🎯 Key Features
- Fully responsive design
- Pixel-perfect implementation from Zeplin specs
- Smooth animations and transitions
- Interactive elements (accordion, tabs, testimonials)
- Custom typography and color schemes
- Modern CSS practices including Grid and Flexbox
- Hot reload development environment

## 🛠 Technologies Used
- HTML5
- CSS3/SCSS (Custom Properties, Grid, Flexbox)
- JavaScript (ES6+)
- TailwindCSS
- jQuery
- Slick Carousel
- Google Fonts (Playfair Display, Oxygen)
- Node.js & Express (Development server)
- WebSocket (Live reload)
- Sass (CSS preprocessing)

## 📚 Project Structure
```
pixel-perfect-test/
├── dist/                # Build output directory
├── src/
│   ├── img/            # Source images
│   ├── js/             # JavaScript files
│   ├── styles/         # SCSS files
│   │   ├── components/ # Component styles
│   │   ├── layouts/    # Layout styles
│   │   └── utils/      # Utilities and variables
│   └── docs/           # Documentation
├── server.js           # Development server
└── package.json        # Project configuration
```

For detailed documentation, see:
- [Project Architecture](src/docs/ARCHITECTURE.md)
- [Components Documentation](src/docs/COMPONENTS.md)
- [Styles Guide](src/docs/STYLES.md)

## 🚀 Quick Start

### Prerequisites
- Node.js (Latest 18.20 LTS version recommended)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
```bash
git clone [repository-url]
cd pixel-perfect-test
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```
This will start the development server with hot reloading at [http://localhost:3000](http://localhost:3000).

4. Create a production version:
```bash
npm run build
```

5. Go to dist folder and run production server:
```bash
cd dist
```

# Using Python
python -m http.server 8000

# Or using Node.js
npx serve

### Available Scripts
- `npm start` - Alias for npm run dev
- `npm run dev` - Starts development server with hot reload
- `npm run build` - Builds the project for production
- `npm run clean` - Cleans the dist directory
- `npm run build:scss` - Compiles SCSS to CSS
- `npm run build:js` - Minifies JavaScript files
- `npm run copy` - Copies static assets to dist

## 🎨 Design
- Implementation based on Zeplin specifications
- Consistent design system
- CSS variables for theming
- Responsive breakpoints
- Asset optimization

### Code Organization
- SCSS follows BEM methodology
- Components are modular and reusable
- Layouts are responsive and mobile-first
- JavaScript follows ES6+ standards

### Build Process
The build process includes:
- SCSS compilation and minification
- JavaScript minification
- Image optimization
- Static asset copying
- Source maps generation

## 🔒 Best Practices
- Accessibility (WCAG 2.1)
- SEO optimization
- Performance optimization
- Maintainable code
- Clear documentation

### Performance Optimization
- CSS and JavaScript minification
- Image optimization
- Lazy loading implementation
- Critical CSS inlining

## 🌐 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing
1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 License
This project is part of a technical interview process.

## 🙏 Acknowledgments
- Design team for Zeplin specifications
- Development community for resources and tools
