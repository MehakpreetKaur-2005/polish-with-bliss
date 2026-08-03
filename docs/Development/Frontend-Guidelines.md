# Frontend Development Guidelines

**Project:** Polish with Bliss  
**Version:** 1.0  
**Document Type:** Frontend Development Standards  
**Last Updated:** August 2026

---

# 1. Purpose

This document defines the frontend development standards for the Polish with Bliss project.

All frontend implementation must follow these guidelines to ensure:

- Consistent code quality
- Maintainable architecture
- Reusable components
- Responsive design
- Accessibility
- Performance
- Clean project structure

These standards apply to both human developers and AI-assisted code generation.

---

# 2. Technology Stack

The frontend must be developed using the following technologies.

| Technology | Version |
|------------|----------|
| React | Latest Stable |
| TypeScript | Latest Stable |
| Vite | Latest Stable |
| Tailwind CSS | Latest Stable |
| React Icons / Lucide React | Latest Stable |

No additional libraries should be introduced unless explicitly approved.

---

# 3. Coding Standards

## Components

- Use Functional Components only.
- Use TypeScript for all components.
- One component per file.
- Keep components focused on a single responsibility.
- Prefer composition over duplication.
- Avoid large monolithic components.

---

## Naming Conventions

| Item | Convention | Example |
|------|------------|----------|
| Components | PascalCase | Hero.tsx |
| Hooks | camelCase | useScroll.ts |
| Variables | camelCase | activeSlide |
| Constants | UPPER_CASE | MAX_SLIDES |
| CSS Classes | Tailwind Utility Classes | bg-white |

---

## File Naming

Use PascalCase for all React components.

Example:

```
Navigation.tsx
Hero.tsx
Pricing.tsx
Appointment.tsx
```

---

# 4. Component Design Principles

Each component should:

- Have a single responsibility.
- Be reusable where appropriate.
- Receive data through props.
- Avoid unnecessary state.
- Be easy to test.
- Follow the Design System.

Avoid duplicate UI implementations.

---

# 5. State Management

For MVP:

- Use React useState.
- Use useEffect only when necessary.
- Keep state local to the owning component.
- Avoid unnecessary prop drilling.

Global state management is not required for Version 1.0.

---

# 6. Styling Guidelines

- Use Tailwind CSS only.
- Do not use inline CSS.
- Do not use CSS Modules.
- Do not use styled-components.
- Follow the Design System color palette.
- Follow the typography scale.
- Maintain consistent spacing throughout the application.

---

# 7. Responsive Design

The website must follow a mobile-first approach.

Target breakpoints:

| Device | Width |
|---------|-------|
| Mobile | < 768px |
| Tablet | 768px – 1023px |
| Desktop | ≥ 1024px |

Requirements:

- Responsive typography
- Responsive spacing
- Flexible layouts
- Touch-friendly controls
- Responsive images

---

# 8. Accessibility

Every feature must follow accessibility best practices.

Requirements:

- Semantic HTML
- Keyboard navigation
- ARIA labels where required
- Visible focus states
- Sufficient color contrast
- Descriptive button labels
- Accessible forms

---

# 9. Performance

The application should remain lightweight and responsive.

Guidelines:

- Optimize images.
- Minimize unnecessary re-renders.
- Reuse components.
- Keep bundle size small.
- Lazy load large assets when appropriate.
- Use efficient animations.

---

# 10. Animation Guidelines

Animations should enhance the user experience without becoming distracting.

Use animations for:

- Section entrance
- Hover effects
- Button interactions
- Accordion expansion
- Carousel transitions

Avoid:

- Excessive motion
- Long animation durations
- Heavy animation libraries

---

# 11. Code Quality

Generated code must:

- Compile successfully.
- Contain no TypeScript errors.
- Contain no ESLint errors.
- Avoid unused imports.
- Avoid duplicated code.
- Follow consistent formatting.

---

# 12. Git Workflow

Development must follow a feature branch workflow.

Workflow:

```

main
│
├── feature/navigation
├── feature/hero
├── feature/services
├── feature/pricing
├── feature/founder
├── feature/appointment
├── feature/contact
└── feature/footer

```

Every feature must:

1. Be developed on its own feature branch.
2. Be committed with meaningful commit messages.
3. Be pushed to GitHub.
4. Be merged through a Pull Request.
5. Be merged into `main` only after review.

---

# 13. AI Development Rules

When generating code:

- Read the SRS before implementation.
- Follow the Design System.
- Follow the Component Architecture.
- Match the approved Stitch design.
- Generate production-ready code only.
- Do not modify unrelated files.
- Do not introduce new libraries without approval.
- Keep components reusable and maintainable.
- Ask for clarification if requirements are ambiguous.

---

# 14. Definition of Done

A feature is considered complete only when:

- Requirements are fully implemented.
- UI matches the approved design.
- Responsive design works correctly.
- Accessibility requirements are satisfied.
- Code passes linting.
- Code builds successfully.
- No console errors exist.
- Feature is committed and pushed.
- Pull Request is ready for review.

---

# 15. References

- Software Requirements Specification (SRS)
- Design System Documentation
- Component Architecture
- Information Architecture
- User Stories