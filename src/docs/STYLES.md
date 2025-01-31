# Styles Documentation

## Design System

### Base Variables
Located in `src/styles/utils/_variables.scss`:
```scss
// Colors
$primary-color: #E6B5AC;
$secondary-color: #E6C3A5;
$text-color: #2D3748;
$bg-light: #FAF5F2;
$bg-dark: #4A4A4A;

// Typography
$font-primary: 'Oxygen', sans-serif;
$font-secondary: 'Playfair Display', serif;

// Spacing
$section-padding: 4rem;
$container-padding: 2rem;

// Breakpoints
$breakpoint-sm: 640px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1280px;
```

### Layout System

#### Grid and Containers
```scss
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 $container-padding;
}

.grid {
    display: grid;
    gap: 2rem;
}
```

#### Responsive Mixins
In `src/styles/utils/_mixins.scss`:
```scss
@mixin responsive($breakpoint) {
    @if $breakpoint == sm {
        @media (min-width: $breakpoint-sm) { @content; }
    } @else if $breakpoint == md {
        @media (min-width: $breakpoint-md) { @content; }
    } @else if $breakpoint == lg {
        @media (min-width: $breakpoint-lg) { @content; }
    } @else if $breakpoint == xl {
        @media (min-width: $breakpoint-xl) { @content; }
    }
}
```

### Components

#### Buttons
In `src/styles/components/_buttons.scss`:
```scss
.btn {
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    transition: transform 0.3s ease;
    
    &--primary {
        background-color: $primary-color;
        color: white;
    }
    
    &--secondary {
        background-color: $secondary-color;
        color: white;
    }
}
```

#### Accordion
In `src/styles/components/_accordion.scss`:
```scss
.accordion {
    &__item {
        border-bottom: 1px solid rgba($text-color, 0.1);
    }
    
    &__header {
        padding: 1rem;
        cursor: pointer;
    }
    
    &__content {
        padding: 1rem;
        display: none;
        
        &--active {
            display: block;
        }
    }
}
```

### Layouts

#### Header
In `src/styles/layouts/_header.scss`:
```scss
.header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
    background: white;
    
    &__nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
    }
}
```

#### Hero
In `src/styles/layouts/_hero.scss`:
```scss
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: $bg-light;
    
    &__content {
        max-width: 600px;
    }
}
```

### Utilities
In `src/styles/utils/_utilities.scss`:
```scss
// Spacing
.mt-1 { margin-top: 0.25rem; }
.mt-2 { margin-top: 0.5rem; }
.mt-3 { margin-top: 1rem; }
.mt-4 { margin-top: 1.5rem; }
.mt-5 { margin-top: 2rem; }

// Typography
.text-primary { color: $primary-color; }
.text-secondary { color: $secondary-color; }
.font-primary { font-family: $font-primary; }
.font-secondary { font-family: $font-secondary; }
```

## Best Practices

### CSS Organization
- Use BEM naming methodology
- Keep selectors flat
- Avoid using !important
- Use SCSS variables for theming

### Performance
- Minify CSS in production
- Optimize selectors
- Use CSS Grid and Flexbox for layouts
- Implement critical CSS when necessary

### Maintainability
- Document complex CSS
- Use consistent naming
- Keep components modular
- Follow single responsibility principle

### Accessibility
- Maintain proper color contrast
- Support reduced motion mode
- Implement proper focus states
- Use relative units

## Build Process
The project uses `sass` to compile SCSS to CSS:
```bash
npm run build:scss
```

## References
- [COMPONENTS.md](COMPONENTS.md) for implementation details
- [ARCHITECTURE.md](ARCHITECTURE.md) for project structure 