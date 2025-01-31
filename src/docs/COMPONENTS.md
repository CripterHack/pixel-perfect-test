# Components Documentation

## UI Components

### Accordion
**Location**: `src/styles/components/_accordion.scss`
```scss
.accordion {
    /* Component styles */
}
```
**Usage Example**:
```html
<div class="accordion">
    <div class="accordion__item">
        <div class="accordion__header">Title</div>
        <div class="accordion__content">Content</div>
    </div>
</div>
```
**Features**:
- Smooth animations
- Keyboard accessibility
- Mobile-friendly design
- Interactive headers

### Tabs
**Location**: `src/styles/components/_tabs.scss`
```scss
.tabs {
    /* Component styles */
}
```
**Usage Example**:
```html
<div class="tabs">
    <div class="tabs__list">
        <button class="tabs__button" data-tab="1">Tab 1</button>
    </div>
    <div class="tabs__content" data-tab="1">Content 1</div>
</div>
```
**Features**:
- Smooth transitions
- Responsive design
- Interactive navigation
- Content panels

### Testimonials
**Location**: `src/styles/components/_testimonials.scss`
```scss
.testimonials {
    /* Component styles */
}
```
**Features**:
- Card-based layout
- Author information
- Quote styling
- Responsive grid

### Buttons
**Location**: `src/styles/components/_buttons.scss`
```scss
.btn {
    /* Component styles */
}
```
**Features**:
- Primary and secondary styles
- Hover effects
- Size variations
- State management

## Layout Components

### Header
**Location**: `src/styles/layouts/_header.scss`
```scss
.header {
    /* Layout styles */
}
```
**Features**:
- Navigation menu
- Logo placement
- Responsive design
- Fixed positioning

### Hero Section
**Location**: `src/styles/layouts/_hero.scss`
```scss
.hero {
    /* Layout styles */
}
```
**Features**:
- Full-width design
- Background elements
- CTA placement
- Responsive text

### FAQ Section
**Location**: `src/styles/layouts/_faq.scss`
```scss
.faq {
    /* Layout styles */
}
```
**Features**:
- Accordion integration
- Section spacing
- Question grouping
- Answer formatting

### Footer
**Location**: `src/styles/layouts/_footer.scss`
```scss
.footer {
    /* Layout styles */
}
```
**Features**:
- Navigation links
- Social media icons
- Copyright information
- Responsive columns

### Founder Section
**Location**: `src/styles/layouts/_founder.scss`
```scss
.founder {
    /* Layout styles */
}
```
**Features**:
- Profile layout
- Bio content
- Image placement
- Responsive design

### Achievements Section
**Location**: `src/styles/layouts/_achievements.scss`
```scss
.achievements {
    /* Layout styles */
}
```
**Features**:
- Stats display
- Grid layout
- Animation effects
- Responsive breakpoints

## Utility Classes

### Mixins
**Location**: `src/styles/utils/_mixins.scss`
```scss
@mixin responsive($breakpoint) {
    /* Mixin styles */
}
```
**Features**:
- Responsive breakpoints
- Common patterns
- Reusable styles
- Cross-browser support

### Variables
**Location**: `src/styles/utils/_variables.scss`
```scss
:root {
    /* CSS Variables */
}
```
**Features**:
- Color scheme
- Typography
- Spacing
- Breakpoints

### Utilities
**Location**: `src/styles/utils/_utilities.scss`
```scss
.utility-class {
    /* Utility styles */
}
```
**Features**:
- Spacing helpers
- Typography classes
- Display utilities
- Flexbox helpers

## Best Practices

### Accessibility
- Use semantic tags
- Implement ARIA attributes
- Ensure color contrast
- Support keyboard navigation

### Performance
- Optimize CSS selectors
- Minimize specificity
- Avoid excessive nesting
- Reuse common styles

### Maintenance
- Follow consistent naming
- Document complex components
- Keep components modular
- Implement theme variables 