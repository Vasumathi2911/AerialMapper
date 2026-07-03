# APS v1.0
# AerialMapper Project Standard

---

## Document Information

| Property | Value |
|----------|-------|
| Document | APS v1.0 |
| Full Name | AerialMapper Project Standard |
| Status | Approved |
| Version | 1.0 |
| Project | AerialMapper |
| Repository | AerialMapper |
| Applies To | All AerialMapper Projects |
| Last Updated | July 2026 |

---

# 1. Purpose

The AerialMapper Project Standard (APS) defines the official project structure used by AerialMapper.

Every project created by AerialMapper shall conform to this specification.

The objective of APS is to provide:

- Consistent project organization
- Cross-platform compatibility
- Fast loading
- Reliable recovery
- Scalable architecture
- AI-ready project storage
- Future cloud synchronization
- Plugin extensibility

APS acts as the foundation for every subsystem within AerialMapper.

---

# 2. Scope

APS applies to:

- Desktop Application
- Mapping Engine
- AI Engine
- Image Import Engine
- Report Generator
- Plugin SDK
- Future Cloud Services

---

# 3. Design Principles

APS follows these principles.

## 3.1 Self-contained Projects

Every project contains everything required for processing.

No external dependencies shall be required after project creation.

---

## 3.2 Human Readable

Important project metadata shall remain human readable.

Example:

manifest.json

---

## 3.3 Binary Data Separation

Large binary assets shall not be stored in JSON.

Instead:

- Images
- Meshes
- Orthomosaics
- Point Clouds

shall be stored as files.

---

## 3.4 Database Driven

All structured project information shall be stored inside SQLite.

Database Name

project.db

---

## 3.5 Modular

Every subsystem owns its own directory.

This prevents coupling.

---

## 3.6 Extensible

Future versions shall add folders without breaking older projects.

---

# 4. Project Format

Every project shall use

.amap

Example

Bridge Survey.amap

---

# 5. Project Structure

ProjectName.amap/

├── manifest.json
├── project.db
├── README.md

├── images/
│
├── metadata/
│
├── chunks/
│
├── outputs/
│
├── ai/
│
├── reports/
│
├── cache/
│
├── logs/
│
├── autosave/
│
├── backups/
│
├── temp/
│
└── plugins/

---

# 6. Root Files

## manifest.json

Purpose

Project entry point.

Contains

- Project Name
- Version
- Coordinate System
- Database Path
- Default Chunk
- Creation Date
- Last Opened
- Project UUID

Example

{
    "format": "AerialMapper",
    "version": "1.0",
    "database": "project.db",
    "defaultChunk": "chunk001"
}

---

## project.db

SQLite database.

Stores

- Images
- Chunks
- Camera Data
- Processing Jobs
- AI Results
- Reports
- User Settings

---

## README.md

Optional project description.

Useful for collaboration.

---

# 7. images/

Stores every imported image.

Structure

images/

├── original/

├── thumbnails/

├── masks/

├── undistorted/

└── cache/

Purpose

original/

Original imported images.

Never modified.

---

thumbnails/

Low resolution previews.

Used by Project Explorer.

---

masks/

Image masks.

Examples

- Sky
- Water
- Vegetation
- AI segmentation

---

undistorted/

Generated after camera calibration.

---

cache/

Temporary image pyramids.

---

# 8. metadata/

Stores metadata extracted from sensors.

metadata/

├── camera/

├── gps/

├── imu/

├── calibration/

└── flightlogs/

Examples

- EXIF
- GPS
- RTK
- IMU
- Camera Calibration

---

# 9. chunks/

Each processing chunk has its own directory.

Example

chunks/

├── chunk001/

├── chunk002/

└── chunk003/

Every chunk contains

- Sparse Reconstruction
- Dense Reconstruction
- Mesh
- Processing Cache

Chunks are independent.

---

# 10. outputs/

Stores final outputs.

outputs/

├── orthomosaic/

├── dem/

├── dsm/

├── dtm/

├── pointcloud/

├── mesh/

├── textured_model/

├── contours/

└── exports/

Supported formats include

GeoTIFF

OBJ

PLY

LAS

LAZ

FBX

GLTF

DXF

GeoPackage

---

# 11. ai/

Stores AI related files.

ai/

├── detections/

├── segmentation/

├── classification/

├── reports/

└── models/

Purpose

Separate AI outputs from mapping outputs.

---

# 12. reports/

Stores

- PDF Reports
- CSV Reports
- HTML Reports

Generated automatically.

---

# 13. cache/

Stores temporary processing data.

May be safely regenerated.

---

# 14. logs/

Stores

Application Logs

Processing Logs

Crash Logs

GPU Logs

---

# 15. autosave/

Stores automatic project backups.

Autosave interval

Configurable.

Default

5 minutes.

---

# 16. backups/

Stores user-created backups.

Used for project recovery.

---

# 17. temp/

Temporary working directory.

Automatically cleaned.

---

# 18. plugins/

Stores project-specific plugin data.

Every plugin owns its own folder.

Example

plugins/

Thermal/

LiDAR/

Agriculture/

Mining/

---

# 19. Versioning

APS follows Semantic Versioning.

Example

APS 1.0

APS 1.1

APS 2.0

Projects created with newer versions should remain backward compatible whenever possible.

---

# 20. Migration

Future versions shall include migration scripts.

Example

APS 1.0

↓

APS 1.1

↓

APS 2.0

Migration shall never modify original imagery.

---

# 21. Security

The project shall never overwrite original images.

Sensitive user information shall not be stored without explicit user consent.

---

# 22. Recovery

If AerialMapper crashes:

1. Detect autosave
2. Validate database
3. Restore latest safe state
4. Notify user

---

# 23. Cross Platform Compatibility

APS shall support

- Windows
- Linux

Future Support

- macOS

No platform-specific paths shall be stored.

Use relative paths whenever possible.

---

# 24. Performance Goals

Project Opening

< 2 seconds

Thumbnail Loading

Incremental

Database

SQLite WAL Mode

Memory

Lazy loading

---

# 25. Future Expansion

APS reserves folders for future modules.

Examples

- Live Mapping
- Swarm Operations
- Cloud Collaboration
- LiDAR
- Thermal
- Multispectral
- Plugins
- AI Models

Adding future modules shall not require redesigning APS.

---

# 26. Compliance

Every AerialMapper module shall comply with APS.

Modules shall not create undocumented folders.

Modules shall not modify reserved directories.

All future features shall follow this specification.

---

# 27. Conclusion

APS establishes the official project format for AerialMapper.

It provides a scalable, modular, recoverable, and extensible foundation for professional photogrammetry, AI-assisted mapping, live drone operations, and future cloud-enabled workflows.

This document serves as the primary specification governing all AerialMapper project structures.