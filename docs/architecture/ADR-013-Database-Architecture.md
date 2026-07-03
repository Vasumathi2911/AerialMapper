# ADR-013
# AerialMapper Database Architecture

---

## Document Information

| Property | Value |
|----------|-------|
| Document | ADR-013 |
| Full Name | AerialMapper Database Architecture |
| Status | Approved |
| Version | 1.0 |
| Project | AerialMapper |
| Database Engine | SQLite 3 |
| Last Updated | July 2026 |

---

# 1. Purpose

This document defines the official database architecture used by AerialMapper.

The database architecture provides a reliable, scalable, high-performance storage system for all structured project information while keeping large binary assets on the file system.

This architecture follows ADS (AerialMapper Database Standard).

---

# 2. Motivation

Modern photogrammetry projects may contain:

- 100,000+ Images
- Millions of Tie Points
- Dense Point Clouds
- Multiple Chunks
- AI Results
- Flight Logs
- Reports
- User Settings

Managing this information using JSON files alone becomes inefficient.

SQLite provides:

- Fast queries
- ACID transactions
- Cross-platform compatibility
- Reliability
- Easy backup
- Zero server dependency

---

# 3. Design Goals

The Database Architecture shall provide:

- High performance
- Data integrity
- Fast indexing
- Transaction safety
- Modular storage
- Offline operation
- Future cloud synchronization
- Plugin extensibility

---

# 4. Database Architecture

```
                Project

                   │

                   ▼

              project.db

                   │

      ┌────────────┼────────────┐

      ▼            ▼            ▼

    Core       Processing      AI

      │            │            │

      └────────────┼────────────┘

                   ▼

            Reports & Plugins
```

---

# 5. Database Engine

Database

SQLite 3

Encoding

UTF-8

Journal Mode

WAL

Transaction Mode

Atomic

Page Size

4096 Bytes

---

# 6. Storage Strategy

Structured Data

↓

SQLite

Examples

- Images
- Cameras
- Chunks
- Reports
- AI Results
- Processing Jobs
- User Settings

Large Binary Data

↓

Project Folder

Examples

- Images
- Meshes
- Point Clouds
- Orthomosaics
- DEM
- DSM
- DTM
- Textures

Only metadata shall be stored inside SQLite.

---

# 7. Database Layers

```
Application

↓

DatabaseManager

↓

SQLite Driver

↓

project.db
```

The application never communicates directly with SQLite.

All operations pass through DatabaseManager.

---

# 8. DatabaseManager

Responsibilities

- Open Database
- Close Database
- Execute Queries
- Transactions
- Schema Creation
- Migration
- Backup
- Restore

DatabaseManager is the only component allowed to access SQLite directly.

---

# 9. Database Modules

The database is logically divided into modules.

## Core

Stores:

- Projects
- Images
- Cameras
- Chunks
- Settings

---

## Capture

Stores:

- Flights
- Drone Profiles
- Mission Plans
- Telemetry
- Waypoints
- Sensors

---

## Mapping

Stores:

- Feature Descriptors
- Feature Matches
- Tie Points
- Dense Clouds
- Meshes
- DEM
- DSM
- DTM
- Orthomosaics

---

## AI

Stores:

- Models
- Jobs
- Results
- Detections
- Segmentation
- Classification

---

## Reports

Stores:

- Reports
- Measurements
- Annotations
- Screenshots

---

## Live Mapping

Stores:

- Sessions
- Streams
- Frames
- Queue
- Mesh Network

---

## Plugins

Stores:

- Installed Plugins
- Plugin Settings
- Plugin Data

---

# 10. Relationships

```
Project

↓

Chunks

↓

Images

↓

Camera Poses

↓

Tie Points

↓

Dense Cloud

↓

Mesh

↓

Orthomosaic

↓

Reports
```

---

# 11. Transactions

Every write operation shall execute inside a transaction.

Examples

- Image Import
- Project Save
- Chunk Creation
- Report Generation

Transactions guarantee data integrity.

---

# 12. Indexing Strategy

Indexes shall be created for:

- ProjectID
- ImageID
- ChunkID
- CameraID
- FlightID
- Timestamp
- GPS Coordinates

Indexes improve query performance for large datasets.

---

# 13. Query Principles

Queries shall:

- Return only required fields
- Use indexes
- Avoid unnecessary joins
- Support pagination
- Support lazy loading

Large datasets shall never be loaded entirely into memory.

---

# 14. Caching

Frequently accessed information may be cached.

Examples

- Project Information
- Thumbnail Metadata
- Camera Profiles
- Active Chunk

Cache shall be synchronized with SQLite.

---

# 15. Backup Strategy

Backups include:

- SQLite Database
- Manifest
- User Settings

Backup types

Manual

Automatic

Scheduled

Backups shall never overwrite existing backups.

---

# 16. Recovery

Recovery Process

```
Detect Database

↓

Validate Schema

↓

Validate Tables

↓

Recover Last Transaction

↓

Open Project
```

Corrupted databases shall never overwrite valid backups.

---

# 17. Migration

Database schema versions shall be tracked.

Example

Version 1.0

↓

Version 1.1

↓

Version 2.0

Migration scripts shall preserve existing project data.

---

# 18. Performance Guidelines

Target Performance

Project Open

< 2 Seconds

Image Search

< 100 ms

Metadata Query

< 50 ms

Large Transaction

Atomic

Thumbnail Query

Lazy Loaded

The architecture shall support projects containing hundreds of thousands of images.

---

# 19. Security

The database shall:

- Protect data integrity
- Prevent corruption
- Validate transactions
- Support recovery
- Never modify original images

Sensitive information shall not be stored without user consent.

---

# 20. Future Expansion

The architecture is designed to support:

- Cloud Database Synchronization
- Multi-user Editing
- Distributed Processing
- Remote Databases
- Digital Twin
- LiDAR
- Thermal Imaging
- BIM Integration
- AI Model Registry

without redesigning the core database architecture.

---

# 21. Compliance

Every subsystem storing structured data shall use DatabaseManager.

Direct SQLite access outside DatabaseManager is prohibited.

Database schema shall comply with ADS.

Database events shall comply with AMS.

---

# 22. Conclusion

ADR-013 establishes the official database architecture for AerialMapper.

By separating structured information from large binary assets, AerialMapper achieves high performance, scalability, reliability, and maintainability.

This architecture provides a future-ready foundation supporting professional photogrammetry, AI-assisted mapping, live drone operations, plugin extensibility, and cloud-enabled workflows.