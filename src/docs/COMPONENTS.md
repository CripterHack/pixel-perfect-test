# Components Documentation

## UI Components

### Accordion
**Location**: `src/js/components/accordion.js`
```javascript
// Usage example:
<div class="accordion-item">
    <div class="accordion-header">Title</div>
    <div class="accordion-content">Content</div>
</div>
```
**Features**:
- Smooth animations
- Keyboard accessibility
- ARIA support
- Mobile-friendly touch targets

### Tabs
**Location**: `src/js/components/tabs.js`
```javascript
// Usage example:
<div class="tabs-container">
    <button class="tab-button" data-tab="1">Tab 1</button>
    <div class="tab-content" data-tab="1">Content 1</div>
</div>
```
**Features**:
- Smooth transitions
- URL hash support
- Keyboard navigation
- Responsive design

### Testimonials
**Location**: `src/styles/components/_testimonials.scss`
```css
.testimonial-card {
    /* Component styles */
}
```
**Features**:
- Card-based layout
- Author information
- Quote styling
- Responsive grid

## Layout Components

### Hero Section
**Location**: `src/styles/layouts/_hero.scss`
```css
.hero-section {
    /* Layout styles */
}
```
**Features**:
- Full-width design
- Responsive grid
- Background shapes
- CTA button

### Achievement Grid
**Location**: `src/styles/layouts/_achievements.scss`
```css
.achievements-grid {
    /* Grid styles */
}
```
**Features**:
- CSS Grid layout
- Responsive breakpoints
- Card animations
- Image optimization

## Utility Classes

### Animation Utilities
**Location**: `src/styles/utils/_animations.scss`
```css
.animate-on-scroll {
    /* Animation styles */
}
```
**Features**:
- Scroll-based animations
- Fade effects
- Transform animations
- Performance optimizations

### Typography Utilities
**Location**: `src/styles/utils/_typography.scss`
```css
.font-playfair {
    /* Typography styles */
}
```
**Features**:
- Font families
- Text sizes
- Line heights
- Font weights

## Best Practices

### Accessibility
- Use proper ARIA labels
- Implement keyboard navigation
- Maintain sufficient color contrast
- Provide text alternatives for images

### Performance
- Lazy load components
- Use CSS containment
- Implement proper event delegation
- Optimize animations

### Maintenance
- Follow BEM naming
- Document component usage
- Keep components modular
- Implement proper error handling 