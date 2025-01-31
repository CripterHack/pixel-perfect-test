# Styles Documentation

## Design System

### Base Styles
Located in `src/styles/utils/_variables.scss`:
```css
:root {
    /* Colors */
    --color-primary: #E6B5AC;
    --color-secondary: #E6C3A5;
    --color-text: #2D3748;
    --color-bg-light: #FAF5F2;
    --color-bg-dark: #4A4A4A;

    /* Typography */
    --font-primary: 'Oxygen', sans-serif;
    --font-secondary: 'Playfair Display', serif;
    
    /* Spacing */
    --section-padding: clamp(4rem, 8vw, 8rem);
    --container-padding: clamp(1rem, 5vw, 2rem);
    
    /* Typography Sizes */
    --heading-large: clamp(2.5rem, 5vw, 4rem);
    --heading-medium: clamp(2rem, 4vw, 3rem);
}
```

### Layout System

#### Grid System
```css
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--container-padding);
}

.grid {
    display: grid;
    gap: var(--grid-gap, 2rem);
}
```

#### Responsive Breakpoints
```css
/* Mobile First Approach */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

### Component Styles

#### Buttons
```css
.btn-primary {
    background-color: var(--color-primary);
    color: white;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    transition: transform 0.3s ease;
}

.btn-primary:hover {
    transform: translateY(-2px);
}
```

#### Cards
```css
.card {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
```

### Animation System

#### Transitions
```css
/* Default Transitions */
.transition-base {
    transition-duration: 300ms;
    transition-timing-function: ease;
}

/* Hover Effects */
.hover-lift {
    transition: transform 0.3s ease;
}

.hover-lift:hover {
    transform: translateY(-5px);
}
```

#### Keyframe Animations
```css
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### Utility Classes

#### Spacing
```css
.m-1 { margin: 0.25rem; }
.m-2 { margin: 0.5rem; }
.m-3 { margin: 1rem; }
.m-4 { margin: 1.5rem; }
.m-5 { margin: 2rem; }

.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 1rem; }
.p-4 { padding: 1.5rem; }
.p-5 { padding: 2rem; }
```

#### Typography
```css
.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }
.text-heading { font-family: var(--font-secondary); }
.text-body { font-family: var(--font-primary); }
```

### Best Practices

1. **CSS Organization**
   - Use BEM naming convention
   - Keep selectors flat
   - Avoid !important
   - Use CSS custom properties for theming

2. **Performance**
   - Minimize render-blocking CSS
   - Use CSS containment
   - Optimize animations
   - Implement critical CSS

3. **Maintainability**
   - Document complex CSS
   - Use consistent naming
   - Keep components modular
   - Follow single responsibility principle

4. **Accessibility**
   - Maintain color contrast
   - Support reduced motion
   - Implement proper focus states
   - Use relative units

## Component Styles

## Utility Classes

## References

- [COMPONENTS.md](src/docs/COMPONENTS.md) for implementation details

## Design System

## Animation System

## CSS Architecture

## Best Practices

## Accessibility

## Browser Support

## Contributing

## License

## Acknowledgments 