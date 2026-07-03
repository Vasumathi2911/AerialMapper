# User Manual v1.0
# AerialMapper User Manual

---

## Document Information

| Property | Value |
|----------|-------|
| Document | User Manual v1.0 |
| Full Name | AerialMapper User Manual |
| Status | Approved |
| Version | 1.0 |
| Project | AerialMapper |
| Last Updated | July 2026 |

---

# Welcome

Welcome to **AerialMapper**.

AerialMapper is a professional AI-powered photogrammetry platform designed for processing aerial imagery into high-quality geospatial products.

It combines modern photogrammetry, artificial intelligence, and modular architecture to provide a complete workflow for mapping, surveying, inspection, and analysis.

Whether you are creating an orthomosaic, generating a 3D model, or performing AI-assisted analysis, AerialMapper provides an efficient and scalable environment.

---

# Table of Contents

1. Introduction
2. Getting Started
3. User Interface
4. Projects
5. Image Management
6. Processing Pipeline
7. AI Engine
8. Outputs
9. Reports
10. Live Mapping
11. Settings
12. Keyboard Shortcuts
13. Troubleshooting
14. Best Practices
15. Frequently Asked Questions

---

# 1. Introduction

AerialMapper supports the complete photogrammetry workflow.

Major capabilities include:

- Project Management
- Image Import
- Metadata Extraction
- Camera Calibration
- Feature Matching
- Sparse Reconstruction
- Dense Reconstruction
- Mesh Generation
- DEM / DSM / DTM
- Orthomosaic Generation
- AI Analysis
- Report Generation

---

# 2. Getting Started

Launch AerialMapper.

The Welcome Screen provides:

- New Project
- Open Project
- Recent Projects
- Import Images

Create a project before importing imagery.

---

# 3. User Interface

The application interface contains:

Menu Bar

Access all application commands.

Ribbon

Quick access to common tools.

Project Explorer

Displays the project hierarchy.

Workspace

Primary visualization area.

Properties Panel

Displays information about the selected object.

Bottom Dock

Displays

- Tasks
- Console
- Notifications
- Reports
- System Monitoring

Status Bar

Displays project and application status.

---

# 4. Creating a Project

Select

```
File

↓

New Project
```

Enter

- Project Name
- Description
- Project Location
- Coordinate System

Click

```
Create
```

AerialMapper creates a new `.amap` project.

---

# 5. Opening a Project

Select

```
File

↓

Open Project
```

Choose an existing project folder.

The Project Explorer loads automatically.

---

# 6. Importing Images

Select

```
Project

↓

Import Images
```

Supported formats:

- JPG
- JPEG
- PNG
- TIFF
- GeoTIFF

Imported images appear inside the Project Explorer.

---

# 7. Processing Workflow

The recommended workflow is:

```
Import Images

↓

Extract Metadata

↓

Camera Calibration

↓

Feature Extraction

↓

Feature Matching

↓

Bundle Adjustment

↓

Dense Cloud

↓

Mesh

↓

DEM

↓

Orthomosaic

↓

AI Analysis

↓

Generate Report

↓

Export
```

---

# 8. Chunks

Chunks allow multiple reconstruction areas within a project.

Users may:

- Create
- Rename
- Merge
- Split
- Delete

Each chunk stores independent processing results.

---

# 9. Mapping Products

AerialMapper generates:

- Sparse Point Cloud
- Dense Point Cloud
- Mesh
- Textured Mesh
- DEM
- DSM
- DTM
- Orthomosaic
- Contours

Each product can be viewed within the Workspace.

---

# 10. AI Engine

The AI Engine supports:

- Object Detection
- Semantic Segmentation
- Classification
- Change Detection
- Quality Assessment
- AI Reports

Results appear within the Workspace and Project Explorer.

---

# 11. Reports

Available reports include:

- Processing Report
- Quality Report
- Survey Statistics
- AI Report

Supported formats:

- PDF
- HTML
- CSV

---

# 12. Live Mapping

Live Mapping provides:

- Live Image Streaming
- Incremental Orthomosaic
- Telemetry Display
- Camera Monitoring
- Mission Status

Future versions include Swarm Drone Support.

---

# 13. Export

Supported export formats:

Raster

- GeoTIFF
- JPEG
- PNG

3D

- OBJ
- FBX
- PLY
- GLTF

Point Cloud

- LAS
- LAZ

Reports

- PDF
- HTML
- CSV

---

# 14. Settings

Users may configure:

- Theme
- Language
- Coordinate System
- GPU Settings
- Processing Parameters
- Cache Location
- Autosave Interval

Settings are stored per user.

---

# 15. Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl + N | New Project |
| Ctrl + O | Open Project |
| Ctrl + S | Save Project |
| Ctrl + Shift + S | Save As |
| Ctrl + Z | Undo |
| Ctrl + Y | Redo |
| F11 | Full Screen |

---

# 16. Best Practices

For best performance:

- Store projects on SSDs.
- Keep original images unchanged.
- Enable GPU acceleration when available.
- Create backups before major processing.
- Close unnecessary applications during large processing jobs.

---

# 17. Troubleshooting

If the application becomes slow:

- Verify available RAM.
- Ensure sufficient disk space.
- Check GPU drivers.
- Restart the application if necessary.

If processing fails:

- Review the Console.
- Check Task Status.
- Verify image quality.
- Ensure sufficient overlap between images.

---

# 18. Frequently Asked Questions

### Does AerialMapper modify original images?

No.

Original images are never modified.

---

### Can projects be copied?

Yes.

The `.amap` project folder is fully portable.

---

### Does AerialMapper require an internet connection?

No.

The application runs completely offline.

---

### Does AerialMapper support large projects?

Yes.

The architecture is designed for projects containing hundreds of thousands of images.

---

# 19. Future Features

Future versions will introduce:

- LiDAR Processing
- Thermal Mapping
- Cloud Collaboration
- Digital Twin
- Plugin Marketplace
- Multi-user Projects
- Distributed Processing
- Web Dashboard

---

# 20. Support

Support resources include:

- Installation Guide
- Official Documentation
- GitHub Repository
- Issue Tracker

---

# 21. Conclusion

Thank you for choosing **AerialMapper**.

Our mission is to provide a professional, reliable, and extensible photogrammetry platform that combines modern mapping technology with artificial intelligence.

We hope AerialMapper becomes a trusted tool for surveyors, engineers, researchers, drone operators, and GIS professionals around the world.

Happy Mapping!

---

© 2026 AerialMapper Project

Version 1.0