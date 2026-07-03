# Development Environment v1.0
# AerialMapper Development Environment Specification

---

## Document Information

| Property | Value |
|----------|-------|
| Document | Development Environment v1.0 |
| Full Name | AerialMapper Development Environment Specification |
| Status | Approved |
| Version | 1.0 |
| Project | AerialMapper |
| Last Updated | July 2026 |

---

# 1. Purpose

This document defines the official development environment used for AerialMapper.

The purpose is to ensure every developer works with the same tools, project structure, coding standards, and development workflow.

Using a standardized environment improves productivity, code quality, testing, and maintainability.

---

# 2. Development Goals

The development environment shall provide:

- Cross Platform Development
- Modern Toolchain
- Fast Builds
- Hot Reload
- Strong Typing
- Automated Formatting
- Version Control
- Scalable Architecture
- Easy Testing

---

# 3. Supported Operating Systems

Officially Supported

- Windows 11
- Windows 10
- Ubuntu 22.04+
- Ubuntu 24.04+
- Linux Mint

Future Support

- macOS

---

# 4. Programming Languages

Primary Languages

- TypeScript
- JavaScript
- Python
- C++

Supporting Languages

- SQL
- HTML
- CSS

---

# 5. Technology Stack

Desktop

Electron

Frontend

React

Language

TypeScript

Build Tool

Vite

Database

SQLite

Styling

CSS

Mapping Engine

Python

Computer Vision

OpenCV

3D Reconstruction

COLMAP

AI

PyTorch

ONNX Runtime

Future

CUDA

OpenCL

---

# 6. Recommended Software

Development

- Visual Studio Code
- Git
- GitHub Desktop (Optional)
- Node.js LTS
- Python 3.12+
- SQLite
- CMake
- Visual Studio Build Tools

Recommended Extensions

- ESLint
- Prettier
- GitLens
- Error Lens
- Python
- C/C++
- SQLite Viewer

---

# 7. Repository Structure

```
AerialMapper/

├── apps/
│
├── packages/
│
├── docs/
│
├── scripts/
│
├── assets/
│
├── tests/
│
├── examples/
│
├── tools/
│
└── README.md
```

---

# 8. Desktop Application Structure

```
apps/

desktop/

src/

components/

dialogs/

docks/

events/

layouts/

panels/

services/

stores/

toolbar/

types/

utils/

workers/

App.tsx

main.tsx
```

---

# 9. Coding Standards

The project follows:

- TypeScript Strict Mode
- ES Modules
- Functional Components
- Strong Typing
- Modular Design

Avoid

- Global Variables
- Circular Dependencies
- Hardcoded Values
- Duplicate Logic

---

# 10. Naming Conventions

Components

PascalCase

Example

ProjectExplorer.tsx

Managers

PascalCase

Example

ProjectManager.ts

Interfaces

Prefix with I

Example

IProject

Enums

PascalCase

Example

TaskStatus

Constants

UPPER_CASE

Example

DEFAULT_CHUNK_NAME

---

# 11. Folder Responsibilities

components/

Reusable UI Components

dialogs/

Modal Dialogs

docks/

Bottom Dock Components

events/

AMS Event System

layouts/

Application Layout

panels/

Dockable Panels

services/

Business Logic

stores/

Application State

toolbar/

Ribbon Components

workers/

Background Processing

utils/

Shared Utilities

---

# 12. Git Workflow

Main Branch

main

Development Branch

develop

Feature Branch

feature/<feature-name>

Bug Fix

bugfix/<issue>

Release

release/<version>

Hotfix

hotfix/<version>

---

# 13. Commit Message Standard

Format

```
type(scope): description
```

Examples

```
feat(project): add project manager

feat(ui): add ribbon

fix(database): correct sqlite initialization

refactor(task): simplify task creation

docs(api): update internal api

test(import): add image import tests
```

---

# 14. Build Commands

Install Dependencies

```
npm install
```

Development

```
npm run dev
```

Production Build

```
npm run build
```

Preview

```
npm run preview
```

---

# 15. Testing

Every new feature shall include

- Functional Testing
- UI Testing
- Event Testing
- Database Testing

Future

- Unit Tests
- Integration Tests
- Performance Tests
- End-to-End Tests

---

# 16. Debugging

Recommended Tools

- Chrome DevTools
- React DevTools
- Electron DevTools
- VS Code Debugger

Logs

Console

Application Logs

Task Logs

Processing Logs

---

# 17. Performance Guidelines

The application shall

- Lazy Load Components
- Avoid Blocking UI
- Use Background Workers
- Cache Frequently Used Data
- Optimize Database Queries

---

# 18. Security

The application shall

- Validate User Input
- Use Relative Project Paths
- Never Modify Original Images
- Protect User Data
- Validate Plugins Before Loading

---

# 19. Documentation

Every major subsystem shall maintain

- Architecture Document
- API Documentation
- Algorithm Documentation

Documentation shall be updated after significant architectural changes.

---

# 20. Future Expansion

The development environment shall support

- CI/CD
- Docker
- Cloud Builds
- Automated Testing
- Static Analysis
- Multi Platform Packaging

without changing the project architecture.

---

# 21. Compliance

Every contributor shall

- Follow APS
- Follow ADS
- Follow AMS
- Follow Coding Standards
- Follow Git Workflow

All source code shall comply with the official AerialMapper architecture.

---

# 22. Conclusion

The AerialMapper Development Environment Specification establishes a consistent and professional development workflow for the project.

By standardizing tools, technologies, coding conventions, repository organization, and development practices, the project remains maintainable, scalable, and ready for long-term growth.

This document serves as the official reference for all development activities within AerialMapper.