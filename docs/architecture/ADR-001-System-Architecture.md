# ADR-001
# AerialMapper System Architecture

---

## Document Information

| Property | Value |
|----------|-------|
| Document | ADR-001 |
| Full Name | AerialMapper System Architecture |
| Status | Approved |
| Version | 1.0 |
| Project | AerialMapper |
| Architecture | Modular Event Driven |
| Last Updated | July 2026 |

---

# 1. Purpose

This document defines the official software architecture used throughout AerialMapper.

The objective of this architecture is to provide a scalable, maintainable, modular, and high-performance platform capable of supporting professional photogrammetry, live mapping, AI-assisted processing, swarm drone operations, and future cloud collaboration.

Every subsystem developed within AerialMapper shall comply with this architecture.

---

# 2. Design Goals

The AerialMapper architecture is designed to achieve:

- Modular development
- Low coupling
- High cohesion
- Event-driven communication
- Cross-platform compatibility
- Easy maintenance
- Future scalability
- Parallel processing
- Plugin extensibility

---

# 3. Architectural Style

AerialMapper follows a layered modular architecture combined with an Event-Driven Architecture (EDA).

Each subsystem has a clearly defined responsibility and communicates through the Event Bus.

---

# 4. High-Level Architecture

```
                User Interface
                       │
                       ▼
                Application Layer
                       │
                       ▼
                 Service Layer
                       │
                       ▼
               Event Bus (AMS)
                       │
         ┌─────────────┼─────────────┐
         ▼             ▼             ▼
   Project System  Mapping Engine  AI Engine
         │             │             │
         └─────────────┼─────────────┘
                       ▼
                Database Layer
                       │
                       ▼
                 File System (APS)
```

---

# 5. Architecture Layers

## Presentation Layer

Responsible for:

- User Interface
- Ribbon
- Workspace
- Panels
- Dialogs
- Bottom Dock
- Notifications

Technologies

- React
- TypeScript
- Electron Renderer

---

## Application Layer

Coordinates workflows.

Responsible for:

- User commands
- Navigation
- Window management
- Application state

Examples

- AppController
- WorkspaceController

---

## Service Layer

Contains business logic.

Examples

- ProjectManager
- ImageImportService
- TaskManager
- ChunkManager
- OrthomosaicEngine
- AIManager
- ReportManager

Services never communicate directly.

Communication occurs through AMS.

---

## Event Layer

Central communication mechanism.

Implemented using:

EventBus

Responsibilities

- Publish events
- Subscribe events
- Dispatch events
- Asynchronous communication

---

## Data Layer

Responsible for:

- SQLite
- Project Store
- Settings
- Cache

Implements ADS.

---

## File System Layer

Responsible for:

- Project folders
- Images
- Outputs
- Reports
- Temporary files
- Backups

Implements APS.

---

# 6. Core Subsystems

The architecture consists of the following major subsystems.

## Project System

Responsibilities

- Create Project
- Open Project
- Save Project
- Close Project
- Recovery

---

## Image Engine

Responsibilities

- Image Import
- Metadata Extraction
- Thumbnail Generation
- Camera Detection

---

## Mapping Engine

Responsibilities

- Feature Extraction
- Feature Matching
- Bundle Adjustment
- Sparse Reconstruction
- Dense Reconstruction
- Mesh Generation
- DEM
- DSM
- DTM
- Orthomosaic

---

## AI Engine

Responsibilities

- Object Detection
- Segmentation
- Classification
- Change Detection
- AI Report Generation

---

## Task System

Responsibilities

- Background Processing
- Progress Tracking
- Queue Management
- Pause
- Resume
- Cancel

---

## Report Engine

Responsibilities

- PDF Reports
- HTML Reports
- CSV Reports
- Quality Reports

---

## Plugin Manager

Responsibilities

- Plugin Loading
- Plugin Registration
- Plugin Communication

---

## Live Mapping Engine

Responsibilities

- Live Image Streaming
- Live Orthomosaic
- Live Telemetry
- Frame Processing

---

# 7. Event Driven Communication

Modules never call each other directly.

Instead:

```
Image Import

↓

Publish

ImagesImported

↓

Event Bus

↓

Subscribers

↓

Project Explorer

Workspace

Task Manager

Thumbnail Engine

Database
```

This architecture minimizes coupling between modules.

---

# 8. Data Flow

Typical processing workflow:

```
Create Project

↓

Import Images

↓

Metadata Extraction

↓

Camera Calibration

↓

Feature Extraction

↓

Feature Matching

↓

Bundle Adjustment

↓

Sparse Point Cloud

↓

Dense Point Cloud

↓

Mesh

↓

DEM

↓

Orthomosaic

↓

AI Analysis

↓

Report Generation
```

---

# 9. Threading Model

The application shall separate UI operations from computational tasks.

UI Thread

Responsibilities

- Rendering
- User Interaction
- Notifications

Background Workers

Responsibilities

- Image Import
- Feature Extraction
- Matching
- AI
- Orthomosaic
- Mesh Generation

The UI shall remain responsive during processing.

---

# 10. Data Storage

Structured Data

SQLite Database

project.db

Large Binary Data

Project File System

Examples

- Images
- Meshes
- Orthomosaics
- DEM
- Point Clouds

---

# 11. Cross Platform Support

Supported Platforms

- Windows
- Linux

Future

- macOS

All platform-specific functionality shall be isolated behind service interfaces.

---

# 12. Plugin Architecture

Plugins communicate only through AMS.

Plugins shall never directly access internal services.

Plugin responsibilities include:

- New Importers
- New AI Models
- New Export Formats
- New Visualization Tools

---

# 13. Error Handling

Errors shall be propagated through AMS.

Examples

ProjectCreationFailed

ImageImportFailed

OrthomosaicFailed

DatabaseError

The UI shall present meaningful feedback to the user.

---

# 14. Scalability

The architecture is designed to support:

- Large image datasets
- Multi-chunk projects
- Swarm drone operations
- Live mapping
- GPU acceleration
- Distributed processing
- Cloud synchronization

without architectural redesign.

---

# 15. Future Expansion

Future modules include:

- LiDAR Processing
- Thermal Mapping
- SAR Processing
- BIM Integration
- Digital Twin
- AR / VR
- Cloud Collaboration
- Mobile Companion
- Web Viewer

The modular architecture allows these features to be added without impacting existing subsystems.

---

# 16. Compliance

Every AerialMapper module shall:

- Follow APS
- Follow ADS
- Follow AMS
- Use EventBus
- Maintain loose coupling
- Avoid direct subsystem dependencies

---

# 17. Conclusion

ADR-001 establishes the official system architecture of AerialMapper.

The architecture combines layered design, event-driven communication, modular services, and standardized project and database formats to create a scalable foundation for professional photogrammetry, AI-assisted mapping, live drone operations, and future cloud-enabled workflows.

This document serves as the primary architectural reference for all AerialMapper development.