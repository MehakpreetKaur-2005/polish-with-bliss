# CLAUDE.md

# Polish with Bliss

## Project Overview

Polish with Bliss is a premium beauty salon website developed as a modern, responsive Single Page Application (SPA).

The project follows a professional software engineering workflow, emphasizing maintainability, scalability, accessibility, and clean architecture.

The objective is to build a production-ready website while following industry-standard development practices.

---

# Technology Stack

Frontend

- React
- TypeScript
- Vite
- Tailwind CSS

Development

- Git
- GitHub
- Feature Branch Workflow

Deployment

- Vercel (Planned)

---

# Project Architecture

The application follows a Component-Based Architecture.

Each website section is developed as an independent React component.

Top-Level Components

- Navigation
- Hero
- Bliss Experience
- Services
- Pricing
- Founder
- Appointment
- Contact
- Footer

Reusable UI components should be shared whenever possible.

---

# Project Documentation

Before implementing any feature, always review the following documents.

1. Software Requirements Specification (SRS)
2. Design System
3. Component Architecture
4. Information Architecture
5. User Stories
6. Frontend Development Guidelines

These documents are the source of truth.

Do not make implementation decisions that contradict them.

---

# Design Requirements

All UI implementation must:

- Match the approved Stitch design.
- Follow the Design System.
- Maintain visual consistency.
- Use the approved color palette.
- Use the approved typography.
- Follow spacing guidelines.
- Maintain responsive layouts.

---

# Coding Standards

Always follow the Frontend Development Guidelines.

Key principles include:

- Functional Components only.
- TypeScript only.
- Tailwind CSS only.
- One component per file.
- Mobile-first responsive development.
- Accessibility-first development.
- Semantic HTML.
- Reusable components.
- Clean code.

---

# Development Rules

When implementing a feature:

- Implement only the requested feature.
- Do not modify unrelated components.
- Do not introduce unnecessary dependencies.
- Avoid duplicate code.
- Prefer reusable components.
- Keep components modular.

If a requirement is unclear, request clarification instead of making assumptions.

---

# Git Workflow

Development follows a Feature Branch workflow.

Each feature is implemented on its own branch.

Example

feature/navigation

↓

feature/hero

↓

feature/services

↓

feature/pricing

↓

feature/founder

↓

feature/appointment

↓

feature/contact

↓

feature/footer

Production code should never be developed directly on the main branch.

---

# Definition of Done

A feature is complete only when:

- Functional requirements are satisfied.
- UI matches the approved design.
- Responsive behaviour works correctly.
- Accessibility requirements are met.
- TypeScript compilation succeeds.
- ESLint reports no errors.
- No console errors exist.
- Code is production-ready.

---

# AI Development Instructions

Before generating code:

- Read the project documentation.
- Understand the feature requirements.
- Follow the established architecture.
- Reuse existing components whenever possible.

When generating code:

- Generate complete, production-ready code.
- Explain any architectural decisions.
- Keep the implementation simple and maintainable.
- Avoid unnecessary abstractions.

Never:

- Rewrite existing components unless requested.
- Introduce breaking changes.
- Modify unrelated files.
- Change project architecture without approval.

---

# Expected Response Format

For every implementation, provide:

## Summary

Brief overview of the implemented feature.

---

## Files Created

List every new file.

---

## Files Modified

List every modified file.

---

## Implementation Notes

Explain important implementation decisions.

---

## Testing Instructions

Provide steps to verify the feature locally.

---

## Suggested Commit Message

Provide a Conventional Commit message.

Example

feat: implement responsive navigation

---

# Project Goal

The objective is not only to build a functional website but also to follow professional software engineering practices throughout the development lifecycle.

Every implementation should prioritize:

- Maintainability
- Readability
- Scalability
- Performance
- Accessibility
- User Experience

When multiple implementation approaches are possible, prefer the simplest solution that satisfies the project requirements while remaining easy to maintain.
# Implementation Constraints

Claude must NOT:

- Add libraries without approval.
- Change the approved UI/UX.
- Ignore the Design System.
- Skip accessibility requirements.
- Leave TODO comments in production code.
- Generate placeholder implementations.
- Modify completed features unless explicitly requested.

Claude SHOULD:

- Keep components under approximately 200 lines where practical.
- Extract reusable UI components when repetition occurs.
- Use meaningful TypeScript types.
- Write self-documenting code.
- Prefer readability over cleverness.