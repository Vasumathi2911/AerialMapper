# AerialMapper Master Architecture Specification (AMAS)

Version: 1.0

Status: Draft

---

# 1. Vision

AerialMapper is a next-generation professional photogrammetry platform designed for drone mapping, surveying, GIS, construction, mining, agriculture, inspection, and research.

Unlike traditional photogrammetry software, AerialMapper is designed around modern software engineering principles including modular architecture, adaptive processing, GPU acceleration, AI-assisted workflows, and cross-platform compatibility.

The objective is to create an application capable of processing datasets ranging from a few hundred images to tens of thousands of images efficiently on both low-end and high-end hardware.

---

# Primary Goals

• Professional Quality

• Cross Platform

• High Performance

• AI Assisted

• Modular

• Scalable

• Plugin Based

• Offline Processing

• GIS Ready

• Future Cloud Ready

# 2. Software Philosophy

AerialMapper follows these engineering principles.

## 2.1 Modularity

Every subsystem shall operate independently.

No module may directly modify another module.

Communication occurs only through defined interfaces.

---

## 2.2 Scalability

The application must support

- 100 Images

- 1,000 Images

- 10,000 Images

- Future Distributed Computing

without changing architecture.

---

## 2.3 Cross Platform

One codebase

Windows

Linux

Future macOS

---

## 2.4 Performance

CPU Multi-threading

GPU Computing

Memory Streaming

Adaptive Scheduling

---

## 2.5 Maintainability

Every subsystem shall be independently testable.

Every algorithm shall be documented.

Every feature shall have automated tests.

Every major decision shall have an ADR.

# 3. Software Modules

AerialMapper consists of independent software modules.

Each module has a single responsibility and communicates through defined interfaces.

## 3.1 Desktop Application

Responsible for:

- Main Window
- Menus
- Toolbars
- Dock Panels
- Project Explorer
- User Interaction

---

## 3.2 Project Manager

Responsible for:

- Create Project
- Open Project
- Save Project
- Autosave
- Project Settings
- Recent Projects

---

## 3.3 Image Manager

Responsible for:

- Import Images
- Folder Monitoring
- Image Validation
- Image Indexing
- Thumbnail Generation
- EXIF Reading

---

## 3.4 Metadata Engine

Responsible for:

- GPS
- Camera Model
- Lens Information
- Timestamp
- Altitude
- Orientation
- Coordinate Conversion

---

## 3.5 Processing Engine

Responsible for:

- Feature Detection
- Feature Matching
- Sparse Reconstruction
- Dense Reconstruction
- Mesh
- Texture
- DEM
- DSM
- Orthomosaic

---

## 3.6 Visualization Engine

Responsible for:

- 2D Map
- 3D Viewer
- Point Cloud Viewer
- Image Viewer
- Live Progress

---

## 3.7 GIS Engine

Responsible for:

- CRS
- EPSG
- GeoTIFF
- Shape Files
- Measurements
- Coordinate Transformations

---

## 3.8 Export Engine

Responsible for exporting:

- GeoTIFF
- JPG
- PNG
- LAS
- LAZ
- OBJ
- FBX
- PDF Reports

---

## 3.9 AI Engine

Responsible for:

- Blur Detection
- Duplicate Images
- Missing Images
- Low Overlap Detection
- Flight Quality
- Camera Calibration Assistance
- Adaptive Scheduling

---

## 3.10 Resource Engine

Responsible for:

- CPU Monitoring
- RAM Monitoring
- GPU Monitoring
- SSD Streaming
- Task Scheduling
- Memory Optimization