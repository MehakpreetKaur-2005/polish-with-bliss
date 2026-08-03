# Information Architecture

**Project:** Polish with Bliss  
**Version:** 1.0  
**Document Type:** Software Architecture Document  
**Last Updated:** August 2026

---

# 1. Purpose

This document defines how information is organized, structured, and presented throughout the Polish with Bliss website.

It establishes the logical organization of content, user navigation flow, and content hierarchy to ensure visitors can quickly find information and complete their primary goal—requesting an appointment.

---

# 2. Website Structure

The Polish with Bliss website follows a **Single-Page Application (SPA)** structure where all primary content is organized into vertically stacked sections.

## 2.1 Site Hierarchy

```

Home
│
├── Navigation
├── Hero
├── The Bliss Experience
├── Services
├── Pricing
├── Meet the Founder
├── Appointment Request
├── Contact
└── Footer

```

Each section serves a specific purpose and naturally guides users toward requesting an appointment.

---

## 2.2 Navigation Structure

| Navigation Item | Destination |
|-----------------|-------------|
| Home | Hero Section |
| Services | Services Section |
| Pricing | Pricing Section |
| About | Meet the Founder Section |
| Contact | Contact Section |
| Book Now | Appointment Request Section |

Navigation uses smooth scrolling instead of page redirection to provide a seamless browsing experience.

---

# 3. User Journey

## 3.1 Primary User Flow

```

Landing Page
│
▼
Hero
│
▼
The Bliss Experience
│
▼
Services
│
▼
Pricing
│
▼
Meet the Founder
│
▼
Appointment Request
│
▼
Contact
│
▼
Footer

```

This flow gradually builds trust before presenting the appointment request form.

---

## 3.2 Secondary Navigation Flow

Users may navigate directly to any section using:

- Navigation Menu
- Call-to-Action Buttons
- Footer Links

This allows experienced visitors to quickly access the information they need.

---

# 4. Content Hierarchy

| Priority | Section | Purpose |
|----------|---------|----------|
| High | Hero | Introduce the business and encourage engagement |
| High | Services | Showcase available beauty services |
| High | Pricing | Provide transparent pricing information |
| High | Appointment | Allow users to request an appointment |
| Medium | The Bliss Experience | Build trust and communicate service values |
| Medium | Meet the Founder | Create a personal connection with visitors |
| Medium | Contact | Provide communication channels |
| Low | Footer | Secondary navigation and copyright information |

---

# 5. Navigation Strategy

## Desktop Navigation

- Fixed navigation bar
- Smooth scrolling between sections
- Visible "Book Now" call-to-action
- Transparent glass effect with backdrop blur

---

## Mobile Navigation

- Hamburger menu
- Full-width dropdown navigation
- Smooth scrolling
- Automatically closes after selecting a menu item

---

## Scrolling Behaviour

- Smooth scrolling between sections
- Active section positioned correctly below the fixed navigation bar
- Scroll animations triggered when sections enter the viewport

---

# 6. Call-to-Action Strategy

The website uses strategically placed call-to-action elements to guide visitors toward requesting an appointment.

| Location | CTA |
|----------|-----|
| Hero | Book Appointment |
| Hero | Explore Services |
| Appointment Section | Submit Appointment Request |
| Navigation | Book Now |

Each CTA supports the website's primary conversion goal while maintaining a clean and uncluttered interface.

---

# 7. Information Flow

```

Visitor
│
▼
Discover Business
│
▼
Build Trust
│
▼
Explore Services
│
▼
View Pricing
│
▼
Meet the Founder
│
▼
Request Appointment
│
▼
Contact Business

```

The information is intentionally presented in this sequence to encourage informed decision-making before requesting an appointment.

---

# 8. Accessibility Considerations

The information architecture follows accessibility best practices to ensure all users can navigate the website effectively.

- Logical reading order
- Clear section hierarchy
- Consistent navigation structure
- Keyboard-accessible navigation
- Descriptive section headings
- Responsive layout across all screen sizes

---

# 9. Future Expansion

The current information architecture allows future sections to be integrated without disrupting the existing user flow.

Potential additions include:

| Future Section | Recommended Position |
|---------------|----------------------|
| Testimonials | After Meet the Founder |
| Gallery | After Services |
| Frequently Asked Questions | Before Appointment Request |
| Online Booking Calendar | Replace Appointment Request Form |
| Client Portal | Separate authenticated application |

---

# 10. References

- Software Requirements Specification (SRS)
- Design System Documentation
- Component Architecture Documentation
- Wireframes