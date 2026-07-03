# Sprint Tracker v1.0
# AerialMapper Development Roadmap

---

## Document Information

| Property | Value |
|----------|-------|
| Document | Sprint Tracker v1.0 |
| Full Name | AerialMapper Development Roadmap |
| Status | Active |
| Version | 1.0 |
| Project | AerialMapper |
| Last Updated | July 2026 |

---

# 1. Purpose

This document serves as the official development roadmap for AerialMapper.

It records completed work, current development progress, future milestones, testing status, and release planning.

Every sprint shall have clear objectives, measurable deliverables, and completion status.

---

# 2. Development Philosophy

AerialMapper is developed incrementally.

Every sprint must:

- Deliver working functionality
- Improve software quality
- Be fully tested
- Be committed to Git
- Move the application closer to production readiness

---

# 3. Sprint Status Legend

| Status | Meaning |
|----------|---------|
| ✅ Completed | Finished and tested |
| 🚧 In Progress | Currently under development |
| 📅 Planned | Scheduled for future development |
| ⏸ On Hold | Temporarily postponed |

---

# Phase 0 — System Design

## Sprint 0

### Goal

Define the complete engineering foundation.

### Completed

- APS Standard
- ADS Standard
- AMS Standard
- System Architecture
- Task Architecture
- Project Architecture
- Database Architecture
- Processing Pipeline
- GUI Specification
- Internal API
- Photogrammetry Specification
- AI Engine Specification
- Development Environment

### Deliverables

- Professional documentation
- Complete software architecture
- Development standards

### Status

✅ Completed

---

# Phase 1 — Desktop Foundation

## Sprint 1

### Goal

Create the desktop application framework.

### Features

- Electron Setup
- React Setup
- Main Layout
- Menu Bar
- Ribbon
- Workspace
- Project Explorer
- Properties Panel
- Bottom Dock
- Status Bar

### Testing

- Application launches successfully
- Layout renders correctly
- Responsive resizing

### Status

🚧 In Progress

---

## Sprint 2

### Goal

Project Management System

### Features

- ProjectManager
- ProjectStore
- ProjectFileManager
- New Project Dialog
- Open Project
- Save Project
- Recent Projects
- Project Explorer Integration

### Testing

- Create Project
- Open Existing Project
- Save Changes
- Close Project

### Status

📅 Planned

---

## Sprint 3

### Goal

Image Management

### Features

- Import Images
- Thumbnail Generation
- Metadata Extraction
- EXIF Reader
- GPS Reader
- Image Browser

### Testing

- Import Large Image Sets
- Validate Metadata
- Thumbnail Performance

### Status

📅 Planned

---

## Sprint 4

### Goal

Chunk Management

### Features

- Create Chunk
- Rename Chunk
- Delete Chunk
- Merge Chunks
- Split Chunks

### Testing

- Multi-chunk Projects
- Chunk Switching

### Status

📅 Planned

---

# Phase 2 — Mapping Engine

## Sprint 5

### Goal

Feature Extraction

### Features

- SIFT
- ORB
- AKAZE
- GPU Support

### Status

📅 Planned

---

## Sprint 6

### Goal

Feature Matching

### Features

- FLANN
- BF Matcher
- Match Filtering
- RANSAC

### Status

📅 Planned

---

## Sprint 7

### Goal

Bundle Adjustment

### Features

- Camera Pose Estimation
- Sparse Reconstruction
- Optimization

### Status

📅 Planned

---

## Sprint 8

### Goal

Dense Reconstruction

### Features

- Multi View Stereo
- Dense Cloud
- Point Cloud Viewer

### Status

📅 Planned

---

## Sprint 9

### Goal

Mesh Generation

### Features

- Surface Reconstruction
- Texture Generation

### Status

📅 Planned

---

## Sprint 10

### Goal

Terrain Products

### Features

- DEM
- DSM
- DTM
- Contours

### Status

📅 Planned

---

## Sprint 11

### Goal

Orthomosaic Generation

### Features

- Orthorectification
- Seamline Generation
- Color Balancing
- GeoTIFF Export

### Status

📅 Planned

---

# Phase 3 — AI Engine

## Sprint 12

### Goal

AI Infrastructure

### Features

- AI Manager
- Model Loader
- ONNX Runtime
- Inference Pipeline

### Status

📅 Planned

---

## Sprint 13

### Goal

Object Detection

### Features

- Detection Models
- Bounding Boxes
- Confidence Scores

### Status

📅 Planned

---

## Sprint 14

### Goal

Segmentation

### Features

- Semantic Segmentation
- Land Classification

### Status

📅 Planned

---

## Sprint 15

### Goal

Change Detection

### Features

- Multi-date Comparison
- Difference Maps

### Status

📅 Planned

---

# Phase 4 — Live Mapping

## Sprint 16

### Goal

Live Image Streaming

### Features

- Camera Connection
- Video Stream
- Live Preview

### Status

📅 Planned

---

## Sprint 17

### Goal

Live Orthomosaic

### Features

- Incremental Stitching
- Live Updates
- Quality Monitoring

### Status

📅 Planned

---

## Sprint 18

### Goal

Swarm Drone Support

### Features

- Multi-UAV Connection
- Fleet Monitoring
- Mission Coordination

### Status

📅 Planned

---

# Phase 5 — Professional Features

## Sprint 19

### Goal

Reports

### Features

- PDF
- HTML
- CSV
- Statistics

### Status

📅 Planned

---

## Sprint 20

### Goal

Plugin SDK

### Features

- Plugin Loader
- Plugin API
- Marketplace Preparation

### Status

📅 Planned

---

## Sprint 21

### Goal

Performance Optimization

### Features

- GPU Optimization
- Memory Optimization
- Large Dataset Support

### Status

📅 Planned

---

## Sprint 22

### Goal

Release Candidate

### Features

- Bug Fixes
- UI Polish
- Stability Improvements
- Documentation Review

### Status

📅 Planned

---

# Phase 6 — AerialMapper v1.0

## Sprint 23

### Goal

Official Public Release

### Deliverables

- AerialMapper.exe
- Linux Package
- User Manual
- Installation Guide
- Release Notes
- Sample Dataset

### Status

📅 Planned

---

# Long-Term Roadmap

Future Releases

## Version 1.5

- LiDAR Processing
- Thermal Mapping
- Cloud Backup

---

## Version 2.0

- Cloud Collaboration
- Multi-user Projects
- Distributed Processing
- AI Mission Planning

---

## Version 3.0

- Digital Twin
- BIM Integration
- VR Visualization
- Web Dashboard

---

# Sprint Review Template

At the end of every sprint, record:

Sprint Number

Objective

Completed Features

Issues Encountered

Lessons Learned

Git Commit

Completion Date

Next Sprint

---

# Success Metrics

The project will be considered successful when:

- Stable desktop application
- Professional GUI
- Complete photogrammetry pipeline
- AI-assisted processing
- Live mapping support
- Cross-platform compatibility
- Public release of AerialMapper v1.0

---

# Conclusion

The Sprint Tracker provides a structured roadmap for the development of AerialMapper.

By organizing development into clear phases and measurable sprints, the project remains focused, maintainable, and continuously progressing toward a professional photogrammetry platform.

This document serves as the official project execution roadmap.