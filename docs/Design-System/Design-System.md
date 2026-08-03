
# Design System: Design-Master

## 1. Introduction
### 1.1 Purpose
The purpose of this Design-Master document is to provide a central source of truth for the visual and functional design of the Polish with Bliss salon website. It serves as a comprehensive guide for designers and developers to maintain brand integrity and visual excellence.

### 1.2 Scope
This document covers the entirety of the Polish with Bliss digital presence, including the visual identity, layout systems, interaction patterns, and accessibility standards. It bridges the gap between high-level brand strategy and technical implementation.

### 1.3 Design Goals
- Establish a "Blissful Elegance" aesthetic that feels premium yet approachable.
- Ensure seamless responsiveness across all device types.
- Create an intuitive user journey from service exploration to appointment request.
- Deliver high performance through optimized assets and clean code structures.

---

## 2. Design Philosophy
### 2.1 Brand Identity
Polish with Bliss is defined by a commitment to personalized care, luxury, and tranquility. The brand identity is sophisticated, warm, and inviting, designed to resonate with clients seeking a high-end salon experience.

### 2.2 Design Principles
1. **Luxury & Sophistication**: Every element must reflect quality and attention to detail.
2. **Tranquil Clarity**: Information is presented in a calm, organized manner to reduce cognitive load.
3. **Intentionality**: Every component, animation, and color choice serves a specific purpose in the user journey.

### 2.3 User Experience Goals
- **Ease of Discovery**: Clients should find services and pricing within seconds.
- **Atmospheric Engagement**: Visuals and motion should evoke the physical salon experience.
- **Frictionless Action**: The appointment request process must be clear, simple, and encouraging.

---

## 3. Visual Language
### 3.1 Overall Theme
The theme is **Blissful Elegance**—a refined, light-themed aesthetic dominated by warm terracotta accents, soft blush surfaces, and deep espresso typography.

### 3.2 Luxury Minimalism
We follow a "less is more" approach. By removing unnecessary UI clutter, we allow high-quality photography and elegant typography to communicate the brand's premium nature.

### 3.3 Visual Hierarchy
- **Level 1**: Hero imagery and primary CTAs ("Book Appointment").
- **Level 2**: Section headings and service names.
- **Level 3**: Detailed service descriptions and pricing information.
Hierarchy is established through font weight, scale, and strategic use of the terracotta accent color.

### 3.4 White Space Strategy
Generous white space (margins and gutters) is used to create "breathing room," ensuring the content feels premium rather than crowded. This contributes to the tranquil atmosphere requested in the SRS.

### 3.5 Consistency Guidelines
All buttons, inputs, and cards must use the defined `8px` corner radius. Typography must adhere strictly to the Playfair Display (headings) and Inter (body) pairing.

---

## 4. Layout System
### 4.1 Grid System
A 12-column fluid grid is used for desktop layouts, transitioning to a 2-column or 1-column layout for tablet and mobile devices.

### 4.2 Container Widths
- **Max Container**: 1280px
- **Gutter**: 24px (Desktop) / 16px (Mobile)

### 4.3 Section Spacing
Standard vertical padding:
- **Desktop**: 120px (Section to Section)
- **Mobile**: 64px (Section to Section)

### 4.4 Content Alignment
Most headings and text blocks are centered to maintain a formal, boutique feel. Information-heavy sections (Founder's message) utilize a balanced two-column split.

### 4.5 Responsive Layout Strategy
A "Mobile-First" approach ensures that functional elements like the pricing accordion and booking form are optimized for touch interactions before scaling up to desktop-optimized layouts.

---

## 5. Interaction Design
### 5.1 Motion Philosophy
Motion should be **cinematic and subtle**. It is used to enhance the atmosphere (e.g., Ken Burns hero effect) rather than provide flashy distractions.

### 5.2 Hover Behaviour
- **Buttons**: Subtle opacity shift (90%) and a slight lift (2px transform).
- **Cards**: Soft scale-up (1.02x) with an increased shadow depth to indicate interactivity.

### 5.3 Focus States
Visible focus rings in terracotta (`#d4a373`) with a 2px offset for all interactive elements to ensure keyboard navigability.

### 5.4 Loading States
Smooth fade-ins for images as they enter the viewport. Forms display a subtle spinner or progress bar during submission.

### 5.5 Scroll Behaviour
Native smooth scrolling is enabled for all anchor links. A sticky navigation bar provides persistent access to the primary CTA.

---

## 6. Accessibility Guidelines
### 6.1 Typography Accessibility
- Minimum body text size: 16px.
- Line height: 1.5 - 1.6 for optimal readability.
- Headlines use high-contrast Playfair Display.

### 6.2 Color Contrast
All text-on-background combinations must meet WCAG AA standards (4.5:1 ratio). Terracotta accents are used primarily for decoration or large-scale UI elements to ensure compliance.

### 6.3 Keyboard Navigation
Logical tab order following the visual flow of the page (Nav -> Hero -> Experience -> Services -> etc.).

### 6.4 Screen Reader Support
Semantic HTML tags (`<header>`, `<main>`, `<section>`, `<footer>`) and descriptive `aria-label` attributes for all image-based or icon-only buttons.

---

## 7. Design Assets
### 7.1 Colors Reference
- **Primary Accent**: `#d4a373` (Terracotta)
- **Surface**: `#fff8f5` (Blush Cream)
- **Text**: `#2d2926` (Deep Espresso)
- **Secondary**: Rose Gold borders/icons.

### 7.2 Typography Reference
- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-Serif)
- **Brand**: Custom Script (for wordmark only)

### 7.3 Components Reference
- **Accordions**: Clean, single-expand logic for pricing.
- **CTAs**: Solid terracotta for primary; outlined rose gold for secondary.
- **Slideshows**: Auto-playing service slides with manual overrides.

---

## 8. Future Enhancements
- Interactive real-time booking calendar integration.
- Full-screen video backgrounds for services.
- Multi-language support (ES/FR).
- Customer loyalty dashboard and account portal.