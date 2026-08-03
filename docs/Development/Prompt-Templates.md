# Prompt Templates

**Project:** Polish with Bliss  
**Version:** 1.0  
**Document Type:** AI Development Prompt Library  
**Last Updated:** August 2026

---

# 1. Purpose

This document contains reusable prompt templates for AI-assisted development throughout the Polish with Bliss project.

The objective is to ensure every AI-generated implementation follows the project's architecture, coding standards, design system, and development workflow.

Before generating code, Claude should always reference:

- CLAUDE.md
- Frontend-Guidelines.md
- Software Requirements Specification (SRS)
- Design System Documentation
- Component Architecture
- Information Architecture
- User Stories
- Approved Stitch Design

---

# 2. Prompt Library

| Template | Purpose | Status |
|----------|----------|--------|
| Feature Development | Generate a new feature | ✅ Available |
| Code Review | Review generated code | Planned |
| Bug Fix | Fix implementation issues | Planned |
| Refactoring | Improve existing code | Planned |
| Testing | Generate test cases and tests | Planned |
| Accessibility Review | Audit accessibility | Planned |
| Performance Optimization | Improve performance | Planned |
| Documentation Update | Update project documentation | Planned |

---

# 3. Feature Development Template

Use this template whenever implementing a new feature.

---

## Prompt

You are a Senior Frontend Developer working on the Polish with Bliss project.

Before writing any code, carefully review all attached project documentation.

The attached documentation is the source of truth and must be followed throughout the implementation.

---

## Documents to Review

- CLAUDE.md
- Frontend-Guidelines.md
- Software Requirements Specification (SRS)
- Design System Documentation
- Component Architecture
- Information Architecture
- User Stories

Also use the attached Stitch design as the visual reference.

---

## Feature Information

Feature Name:
Navigation

Functional Requirement:
FR-001 Navigation Module

Git Branch:
feature/navigation

---

## Task

Implement **only** the Navigation Module (FR-001).

The implementation must match the approved Stitch design while following the Design System.

Do not implement any other website sections.

---

## Requirements

The Navigation module must include:

- Business logo
- Navigation links
- Primary CTA button
- Sticky navigation
- Responsive desktop layout
- Responsive mobile layout
- Hamburger menu
- Smooth scrolling navigation
- Accessible keyboard navigation
- Semantic HTML

---

## Deliverables

Provide:

1. Folder structure
2. Files created
3. Files modified
4. Complete production-ready code
5. Testing instructions
6. Suggested Conventional Commit message

---

## Constraints

- Do not modify unrelated files.
- Do not add new libraries without approval.
- Do not change the project architecture.
- Do not generate placeholder implementations.

If any requirement is unclear, ask for clarification before writing code.
---

# 5. Future Prompt Templates

The following prompt templates will be added as the project progresses:

- Code Review
- Bug Fix
- Refactoring
- Testing
- Accessibility Review
- Performance Optimization
- Documentation Update

---

# 6. Notes

The **Feature Development Template** will be used throughout the implementation of Version 1.0.

For each feature, only the following fields should be updated:

- Feature Name
- Functional Requirement (FR)
- Git Branch

All remaining instructions remain unchanged to ensure consistency across the project.
