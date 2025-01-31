# Project Architecture

## Directory Structure

```
pixel-perfect-test/
├── src/
│   ├── assets/
│   │   └── images/          # Optimized images
│   ├── styles/
│   │   ├── main.scss        # Main stylesheet
│   │   ├── components/      # Component styles
│   │   │   ├── _accordion.scss
│   │   │   ├── _tabs.scss
│   │   │   └── _testimonials.scss
│   │   ├── layouts/         # Layout styles
│   │   │   ├── _hero.scss
│   │   │   └── _achievements.scss
│   │   └── utils/          # CSS utilities
│   │       ├── _variables.scss
│   │       ├── _animations.scss
│   │       └── _typography.scss
│   ├── js/
│   │   ├── main.js         # Main JavaScript file
│   │   ├── components/     # JavaScript components
│   │   │   ├── accordion.js
│   │   │   ├── tabs.js
│   │   │   └── testimonials.js
│   │   └── utils/         # JavaScript utilities
│   │       └── animations.js
│   └── docs/              # Documentation
│       ├── ARCHITECTURE.md
│       ├── COMPONENTS.md
│       └── STYLES.md
├── index.html            # Entry point
└── README.md            # Project overview
```

## Build System

## Coding Standards

### HTML
- Use semantic HTML5 elements
- Implement proper ARIA attributes for accessibility
- Maintain clean and consistent indentation
- Use descriptive class names following BEM methodology

### CSS
- Follow BEM naming convention
- Use CSS custom properties for theming
- Implement mobile-first responsive design
- Organize styles by component
- Use CSS Grid and Flexbox for layouts

### JavaScript
- Use ES6+ features
- Implement modular code structure
- Follow single responsibility principle
- Use descriptive variable and function names
- Add proper error handling

## Performance Guidelines

### Images
- Use WebP format with fallbacks
- Implement responsive images with srcset
- Lazy load non-critical images
- Optimize image compression

### CSS
- Critical CSS inlined in head
- Non-critical CSS loaded asynchronously
- Use CSS containment where appropriate
- Minimize render-blocking resources

### JavaScript
- Load scripts with defer attribute
- Split code into smaller chunks
- Implement proper event delegation
- Use IntersectionObserver for lazy loading

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Build Process
- Implementar Sass para el preprocesamiento de CSS
- Utilizar un bundler (Webpack/Vite) para:
  - Compilación de SCSS a CSS
  - Minificación de código
  - Optimización de imágenes
  - Generación de source maps
``` 