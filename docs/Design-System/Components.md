# Component Library

## 1. Introduction
### 1.1 Purpose
The Component Library serves as a definitive guide for the modular building blocks of the Polish with Bliss website. It ensures consistency in look, feel, and functionality across all pages, allowing for a scalable and maintainable user interface.

### 1.2 Component Design Principles
- **Luxury Minimalism**: Clean lines, generous whitespace, and focused content.
- **Consistent Roundness**: A standard `8px` (rounded-lg) corner radius applied to all cards, buttons, and inputs.
- **Atmospheric Motion**: Subtle, cinematic transitions that enhance the "Blissful Elegance" theme.
- **Accessibility First**: Clearly defined interactive states and high-contrast typography.

---

# 2. Navigation
### Purpose
Provides a persistent and intuitive way for users to navigate the primary sections of the website.

### Structure
- **Logo**: Positioned on the far left (wordmark "Polish with Bliss").
- **Nav Links**: "Services", "Pricing", "Contact" centered or right-aligned.
- **Primary CTA**: "Book Appointment" button positioned on the far right.

### Behaviour
- **Sticky Header**: Fixed at the top of the viewport with a `backdrop-blur-md` and `bg-surface/80` background upon scroll.
- **Active State**: The current section is highlighted with a Terracotta (`#d4a373`) underline.

### Responsive Behaviour
- **Desktop**: Full horizontal layout.
- **Mobile**: Collapses into a hamburger menu (right) with a full-screen or slide-out drawer containing all links.

---

# 3. Buttons
## 3.1 Primary Button
- **Style**: Solid Terracotta (`#d4a373`) background with White text.
- **Usage**: High-priority actions like "Book Appointment" or "Submit Request".
- **Hover**: 90% opacity and a subtle `2px` lift.

## 3.2 Secondary Button
- **Style**: Transparent background with a Rose Gold or Terracotta border and matching text.
- **Usage**: Supporting actions like "Explore Services".

## 3.3 Icon Button
- **Style**: Minimalist circular or square housing for social media or menu triggers.
- **Usage**: Instagram icon in the contact section or the mobile hamburger toggle.

---

# 4. Cards
## 4.1 Feature Card
- **Structure**: Icon (Terracotta) → Title (Playfair Display) → Description (Inter).
- **Style**: White surface with a very subtle Rose Gold border or soft shadow.

## 4.2 Contact Card
- **Structure**: Centralized icon → Label (e.g., "Address") → Value (e.g., "Kitchener, Ontario").
- **Style**: Light Blush (`#fdf8f5`) background to distinguish from main surface content.

## 4.3 Founder Card
- **Structure**: High-quality portrait with an optional name overlay or supporting caption.
- **Style**: Rounded corners (`8px`) with a soft scale-up effect on hover.

---

# 5. Forms
## 5.1 Text Input
- **Style**: Outlined with `1px` border (`#dfd9d6`), White background, and consistent internal padding.

## 5.2 Email Input
- **Style**: Same as text input, with built-in browser validation for email formats.

## 5.3 Phone Input
- **Style**: Optimized for numeric entry with clear placeholder formatting (e.g., (555) 000-0000).

## 5.4 Date Picker
- **Style**: Calendar interface using brand colors for the selected date and current day highlight.

## 5.5 Dropdown
- **Style**: Custom-styled select menu with a Terracotta chevron icon.

## 5.6 Checkbox Group
- **Style**: Custom checkboxes with Terracotta fills when active; used for selecting multiple services.

## 5.7 Text Area
- **Style**: Multi-line input field with a fixed or resizable height for "Additional Information".

---

# 6. Service Carousel
### Layout
Full-width container with high-quality background imagery and centered typography.

### Behaviour
Smooth cross-fade or slide transition between service highlights (Hair Spa, Facials, etc.).

### Controls
Arrow buttons (left/right) with a semi-transparent circular background.

### Auto Slide
Automatic transition every 5 seconds, featuring a Ken Burns zoom effect on the background image.

---

# 7. Pricing Accordion
### Structure
Category Header (e.g., "Facials") with a toggle chevron → Expandable list of services and prices.

### Expand Behaviour
Clicking a header expands the section to reveal a table or list of prices.

### Collapse Behaviour
Only one category can be open at a time; opening a new one automatically closes the previous one.

### Animation
Smooth CSS `max-height` transition for a fluid opening and closing feel.

---

# 8. Founder Section
### Layout
Two-column split: Narrative text on the left, professional portrait on the right.

### Image
Portrait utilizes an `8px` corner radius and a subtle fade-in animation.

### Typography
Uses "Playfair Display" for the signature-style greeting and "Inter" for the body message.

---

# 9. Contact Cards
### Layout
Three-column grid on desktop, stacking to a single column on mobile.

### Icons
Minimalist vector icons for Location, Email, and Instagram in brand Terracotta.

### Hover Effects
Subtle background color shift or scale-up to indicate the card is a clickable link.

---

# 10. Footer
### Structure
Three-column layout: Brand wordmark/tagline (left), Quick Links (center), and Copyright/Credits (bottom).

### Links
Vertical list of navigation anchors (Services, Pricing, Contact).

### Copyright
Small-scale caption text at the very bottom: "© 2026 Polish with Bliss. All Rights Reserved."

---

# 11. Component States
### Default
The base visual state of the component (e.g., outlined input, solid button).

### Hover
Immediate visual feedback: Opacity shifts for buttons, background shifts for cards.

### Active
State during a click or tap: Slight scale-down (`scale-95`) for buttons.

### Focus
Clearly visible Terracotta outline for keyboard accessibility.

### Disabled
Lower opacity (40%) and `not-allowed` cursor for unavailable actions.

### Loading
Indicated by a spinning icon or "Processing..." text replacement on buttons.

---

# 12. Motion & Animation
### Scroll Reveal
Sections fade and slide up 20px as they enter the viewport.

### Hover Lift
Cards and buttons move `2px` upward with a shadow transition.

### Fade In
Images use a `0.8s` ease-in transition to prevent jarring loads.

### Accordion
Smooth height transition for pricing lists.

### Carousel
Ken Burns effect (slow pan/zoom) for cinematic background imagery.

---

# 13. Responsive Behaviour
### Desktop
12-column grid, horizontal navigation, multi-column sections.

### Tablet
8-column grid, 2-column layouts for cards and founder sections.

### Mobile
Single-column stack, hamburger menu, reduced font sizes for headings.

---

# 14. Reusability Guidelines
- **DRY (Don't Repeat Yourself)**: Reuse the same button and input classes across all modules.
- **Token Usage**: Never hardcode hex values; always refer to the Color and Typography systems.
- **Spacing**: Maintain consistent `px-gutter` and `py-section` values for all new components.
