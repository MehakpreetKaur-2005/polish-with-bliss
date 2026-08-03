# Wireframe Documentation: Polish with Bliss

## 1. Introduction
### 1.1 Purpose
The purpose of this Wireframe documentation is to outline the structural layout and information architecture of the Polish with Bliss salon website. It focuses on content hierarchy, spatial relationships, and functional placements without the distraction of final visual styling, ensuring the user journey aligns with the SRS requirements.

### 1.2 Scope
This document covers the structural blueprint of the single-page responsive website, detailing the skeleton of each major module: Navigation, Hero, Bliss Experience, Services Slideshow, Pricing Accordion, Founder Section, Appointment Form, and Contact/Footer.

---

## 2. Layout Structure (Global)
### 2.1 Grid & Containers
- **Desktop**: 12-column grid with a maximum container width of 1280px.
- **Mobile**: Single-column vertical stack with consistent side gutters (16px).
- **Section Spacing**: Generous vertical white space between modules to maintain a "Tranquil Clarity" feel.

---

## 3. Module Wireframes

### 3.1 Global Navigation (Sticky)
- **Left**: Brand Wordmark (Wordmark + Logo Icon).
- **Center/Right (Desktop)**: Horizontal list of text anchors (Services, Pricing, Contact).
- **Far Right**: Primary CTA button ("Book Appointment").
- **Mobile**: Logo (Left), Hamburger Icon (Right).

### 3.2 Hero Section (100vh)
- **Background**: Full-bleed container for cinematic imagery.
- **Center Overlay**: 
    - [H1] Large centered display text (all caps).
    - [Buttons] Two side-by-side buttons: Primary (Solid) and Secondary (Outlined).

### 3.3 The Bliss Experience (Features)
- **Top**: Centered Section Heading + Sub-tagline.
- **Grid**: 
    - **Desktop**: 4-column row of cards.
    - **Tablet**: 2x2 grid.
    - **Mobile**: 4x1 stack.
- **Card Content**: Top-aligned Icon → Title → Short Paragraph.

### 3.4 Services Slideshow
- **Outer Shell**: Full-width container.
- **Inner Content**:
    - **Center**: Active Service Title + Descriptive Tagline.
    - **Navigation**: Arrow triggers (Left/Right) and bottom Pagination Dots.
    - **Visual**: Background image with a legibility overlay.

### 3.5 Pricing Accordion
- **Top**: Centered Section Heading + Sub-tagline.
- **Body**: Vertical stack of expandable headers.
- **Item Row**: Flexible layout with [Service Name] on the left and [Price] aligned to the right, connected by a subtle divider or whitespace.

### 3.6 Founder Section (The Heart Behind the Bliss)
- **Desktop**: 50/50 split. 
    - **Left**: Narrative text block (Heading, Greeting, Body Copy, Signature).
    - **Right**: Portrait Image with rounded corners.
- **Mobile**: Portrait Image (Top) → Narrative Text (Bottom).

### 3.7 Appointment Request Form
- **Shell**: Centered card with subtle shadow.
- **Input Layout**:
    - Row 1: Full Name (Full Width).
    - Row 2: Phone Number (Full Width/Split).
    - Row 3: Email Address (Optional).
    - Row 4: Multi-select Service Checkboxes (Grid layout).
    - Row 5: Date Picker & Time Dropdown.
    - Row 6: Text Area for special requests.
- **Bottom**: Centered Submit Button.

---

## 4. Interaction Points
- **Sticky Nav**: Transitions from transparent to semi-opaque on scroll.
- **Accordions**: Interactive headers that toggle content visibility.
- **Slideshow**: Automatic timed transition with manual override.
- **Anchor Links**: Smooth scroll behavior targeting section IDs.

---

## 5. Responsive Transitions
- **Desktop to Tablet**: 4-column grids collapse to 2-column grids; font sizes scale down ~15%.
- **Tablet to Mobile**: Navigation collapses to drawer; all horizontal splits (Founder, Cards) become vertical stacks.

---

## 6. Accessibility & Wayfinding
- **Focus Indicators**: All interactive elements (inputs, buttons, links) have a high-contrast focus state.
- **Heading Hierarchy**: Logical H1 -> H2 -> H3 flow to assist screen readers and SEO.
- **Labels**: All form inputs utilize explicit `<label>` tags for clarity.
