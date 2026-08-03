# Component Architecture

**Project:** Polish with Bliss  
**Version:** 1.0  
**Document Type:** Software Architecture Document  
**Last Updated:** August 2026

---

# 1. Purpose

This document defines the high-level frontend component architecture of the Polish with Bliss website.

It describes:

- Application component hierarchy
- Component responsibilities
- Component relationships
- Communication strategy
- Reusability guidelines

This document serves as the architectural reference for frontend development.

---

# 2. Architecture Overview

The application follows a **Component-Based Architecture** using React.

Each major section of the website is implemented as an independent component with a single responsibility.

The architecture emphasizes:

- Reusability
- Maintainability
- Scalability
- Separation of Concerns
- Responsive Design

---

# 3. Application Component Hierarchy

```

App
│
├── Navigation
├── Hero
├── BlissExperience
├── Services
├── Pricing
├── Founder
├── Appointment
├── Contact
└── Footer

```

The `App` component serves as the root component and renders each page section sequentially.

---

# 4. Component Classification

| Category | Components | Responsibility |
|-----------|------------|----------------|
| Layout Components | App, Navigation, Footer | Define the overall page structure |
| Page Sections | Hero, Bliss Experience, Services, Pricing, Founder, Appointment, Contact | Render feature-specific content |
| Shared UI Components | Button, Card, Container, SectionTitle, Accordion, InputField | Provide reusable UI building blocks |

---

# 5. Component Responsibilities

| Component | Primary Responsibility |
|-----------|------------------------|
| App | Render all top-level page sections |
| Navigation | Display navigation links and primary CTA |
| Hero | Introduce the business and primary call-to-action |
| Bliss Experience | Highlight the business values and service quality |
| Services | Showcase available beauty services |
| Pricing | Display categorized service pricing |
| Founder | Introduce the business owner |
| Appointment | Collect appointment requests |
| Contact | Display contact information |
| Footer | Display secondary navigation and copyright |

---

# 6. Shared UI Components

The following reusable components are shared across multiple sections of the application.

| Component | Used By |
|-----------|---------|
| Button | Navigation, Hero, Appointment |
| Card | Bliss Experience, Contact |
| Container | All Sections |
| SectionTitle | All Sections |
| Accordion | Pricing |
| InputField | Appointment |
| TextArea | Appointment |
| CheckboxGroup | Appointment |

---

# 7. Component Communication

The application follows React's unidirectional data flow.

```

Parent Component
│
└── Child Component
│
Props
│
User Interaction
│
Callback Function
│
State Update

```

Communication Guidelines:

- Parent components pass data using props.
- Child components notify parents through callback functions.
- Component state remains local whenever possible.
- Shared UI components remain presentation-focused.

---

# 8. State Management Strategy

The MVP does not require global state management.

| Feature | State Owner |
|---------|-------------|
| Mobile Navigation | Navigation |
| Services Carousel | Services |
| Pricing Accordion | Pricing |
| Appointment Form | Appointment |

Future versions may introduce React Context if application complexity increases.

---

# 9. Design Principles

The component architecture follows the following engineering principles:

- Single Responsibility Principle (SRP)
- Component Reusability
- Separation of Concerns
- Composition over Duplication
- Responsive-first Design
- Accessibility-first Development

---

# 10. Performance Considerations

To maintain a fast and responsive user experience:

- Keep components modular.
- Minimize unnecessary re-renders.
- Optimize images.
- Lazy load large assets where appropriate.
- Reuse shared UI components.
- Use lightweight animations.

---

# 11. Future Component Expansion

The architecture supports future enhancements without major restructuring.

Potential future components include:

- Testimonials
- Gallery
- Booking Calendar
- Client Dashboard
- Admin Dashboard
- Authentication
- Online Payments

---

# 12. Key Architectural Decisions

| Decision | Rationale |
|----------|-----------|
| Component-Based Architecture | Improves modularity and maintainability |
| Reusable UI Components | Reduces code duplication |
| Local State Management | Sufficient for MVP complexity |
| Single Page Layout | Provides a smooth user experience |
| Responsive Design | Ensures compatibility across devices |

---

# 13. References

- Software Requirements Specification (SRS)
- Design System Documentation
- User Stories
- Wireframes
