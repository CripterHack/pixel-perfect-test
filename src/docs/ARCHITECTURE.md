# Project Architecture

## Directory Structure

```
pixel-perfect-test/
├── dist/                # Build output directory
│   ├── css/            # Compiled CSS files
│   ├── js/             # Minified JavaScript files
│   └── img/            # Optimized images
├── src/
│   ├── img/            # Source images
│   ├── js/
│   │   └── main.js     # Main JavaScript file
│   ├── styles/
│   │   ├── main.scss   # Main stylesheet
│   │   ├── components/ # Component styles
│   │   │   ├── _accordion.scss
│   │   │   ├── _buttons.scss
│   │   │   ├── _tabs.scss
│   │   │   └── _testimonials.scss
│   │   ├── layouts/    # Layout styles
│   │   │   ├── _achievements.scss
│   │   │   ├── _base.scss
│   │   │   ├── _faq.scss
│   │   │   ├── _footer.scss
│   │   │   ├── _founder.scss
│   │   │   ├── _header.scss
│   │   │   └── _hero.scss
│   │   └── utils/     # CSS utilities
│   │       ├── _mixins.scss
│   │       ├── _utilities.scss
│   │       └── _variables.scss
│   └── docs/          # Documentation
│       ├── ARCHITECTURE.md
│       ├── COMPONENTS.md
│       └── STYLES.md
├── server.js          # Development server
├── package.json       # Project dependencies and scripts
└── README.md         # Project overview
```

## Build System

The project uses npm scripts for its build process:

### Main Commands
```bash
npm start          # Alias for npm run dev
npm run dev        # Start development server with hot reload
npm run build      # Build project for production
```

### Build Process Steps
1. **Clean** (`npm run clean`)
   - Removes the dist directory
   - Ensures clean build

2. **Create Directories** (`npm run create:dirs`)
   - Creates necessary directory structure in dist
   - Sets up css, js, and img directories

3. **SCSS Processing** (`npm run build:scss`)
   - Compiles SCSS to CSS
   - Applies minification
   - Generates source maps
   - Output to dist/css/main.css

4. **JavaScript Processing** (`npm run build:js`)
   - Minifies JavaScript files
   - Handles error cases
   - Output to dist/js/main.min.js

5. **Asset Copying** (`npm run copy`)
   - Copies HTML files
   - Transfers images
   - Maintains directory structure

### Development Server
The project includes an Express development server that provides:
- Static file serving
- Hot reload functionality via WebSocket
- Automatic rebuild on file changes
- Development convenience features

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
- Use Sass for CSS preprocessing
- Utilize build tools for:
  - SCSS to CSS compilation
  - Code minification
  - Image optimization
  - Source maps generation
``` 