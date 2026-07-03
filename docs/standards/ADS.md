# ADS v1.0
# AerialMapper Database Standard

---

## Document Information

| Property | Value |
|----------|-------|
| Document | ADS v1.0 |
| Full Name | AerialMapper Database Standard |
| Status | Approved |
| Version | 1.0 |
| Project | AerialMapper |
| Database | SQLite 3 |
| Database File | project.db |
| Last Updated | July 2026 |

---

# 1. Purpose

The AerialMapper Database Standard (ADS) defines the official SQLite database schema used by every AerialMapper project.

The database is responsible for storing all project metadata, imagery information, photogrammetry data, processing jobs, AI outputs, live mapping sessions, drone information, reports, settings, and plugin data.

Every subsystem shall use ADS as the single source of truth for structured project information.

---

# 2. Objectives

ADS is designed to provide:

- High-performance local database
- ACID compliant transactions
- Cross-platform compatibility
- Fast image indexing
- Large project scalability
- Offline operation
- Recovery support
- Future cloud synchronization
- Plugin extensibility

---

# 3. Database Engine

Database Engine

SQLite 3

Encoding

UTF-8

Journal Mode

WAL (Write Ahead Logging)

Page Size

4096 Bytes

Transaction Mode

Atomic

---

# 4. Database Architecture

project.db

├── Core
├── Capture
├── Mapping
├── AI
├── Outputs
├── Live System
├── User
└── Future

---

# 5. Core Module

The Core module contains the minimum tables required for every AerialMapper project.

## Projects

Purpose

Stores project information.

Fields

- ProjectID (Primary Key)
- Name
- Description
- CoordinateSystem
- Version
- CreatedDate
- ModifiedDate
- DefaultChunk
- Status

---

## Images

Purpose

Stores imported images.

Fields

- ImageID
- ProjectID
- CameraID
- FileName
- RelativePath
- Width
- Height
- CaptureTime
- GPSLatitude
- GPSLongitude
- GPSAltitude
- Roll
- Pitch
- Yaw
- Status

---

## Cameras

Purpose

Stores camera specifications.

Fields

- CameraID
- Manufacturer
- Model
- SensorWidth
- SensorHeight
- ResolutionWidth
- ResolutionHeight
- FocalLength
- PixelSize

---

## CameraPoses

Purpose

Stores camera exterior orientation.

Fields

- PoseID
- ImageID
- X
- Y
- Z
- Roll
- Pitch
- Yaw

---

## Chunks

Purpose

Stores processing chunks.

Fields

- ChunkID
- ProjectID
- Name
- Description
- CreatedDate
- ModifiedDate
- Status

---

## UserSettings

Stores project specific settings.

Fields

- SettingID
- Name
- Value

---

## History

Stores Undo / Redo history.

Fields

- HistoryID
- Action
- Timestamp
- User

---

# 6. Capture Module

Responsible for drone operations and image acquisition.

## DroneProfiles

Stores UAV information.

Fields

- DroneID
- Name
- Manufacturer
- Model
- Firmware
- SerialNumber

---

## Flights

Stores flight information.

Fields

- FlightID
- DroneID
- MissionID
- Pilot
- StartTime
- EndTime
- Distance
- Duration
- ImageCount

---

## MissionPlans

Stores mission plans.

Fields

- MissionID
- Name
- Altitude
- OverlapFront
- OverlapSide
- FlightSpeed
- CameraAngle

---

## Waypoints

Stores mission waypoints.

Fields

- WaypointID
- MissionID
- Latitude
- Longitude
- Altitude

---

## FlightTelemetry

Stores telemetry.

Fields

- TelemetryID
- FlightID
- Timestamp
- Latitude
- Longitude
- Altitude
- Roll
- Pitch
- Yaw
- Battery
- Speed

---

## CameraTriggers

Stores trigger events.

Fields

- TriggerID
- FlightID
- Timestamp
- ImageID

---

## RTKCorrections

Stores RTK corrections.

Fields

- CorrectionID
- FlightID
- BaseStation
- Accuracy

---

## Sensors

Stores payload sensors.

Examples

RGB

Thermal

LiDAR

Multispectral

---

# 7. Mapping Module

Responsible for photogrammetry.

## TiePoints

Sparse cloud.

---

## FeatureDescriptors

Feature extraction results.

---

## FeatureMatches

Image matching.

---

## BundleAdjustment

Optimization results.

---

## DenseClouds

Dense point clouds.

---

## Meshes

Mesh models.

---

## Textures

Texture atlases.

---

## DEMs

Digital Elevation Models.

---

## DSMs

Digital Surface Models.

---

## DTMs

Digital Terrain Models.

---

## Orthomosaics

Orthomosaic outputs.

---

## Contours

Contour generation.

---

# 8. AI Module

Stores AI processing.

## AIModels

Installed AI models.

---

## AIJobs

AI processing tasks.

---

## AIResults

Inference outputs.

---

## ObjectDetections

Detected objects.

Fields

- DetectionID
- ImageID
- ObjectType
- Confidence
- BoundingBox

---

## Segmentation

Segmentation masks.

---

## Classification

Classification results.

---

## ChangeDetection

Stores comparison results.

---

# 9. Outputs Module

Stores generated deliverables.

## Reports

PDF

HTML

CSV

---

## Exports

GeoTIFF

OBJ

PLY

LAS

LAZ

DXF

FBX

GLTF

---

## Measurements

Distance

Area

Volume

---

## Annotations

User notes.

---

## Screenshots

Workspace captures.

---

# 10. Live System Module

Supports live mapping.

## LiveSessions

Stores active sessions.

---

## VideoStreams

Video sources.

---

## LiveFrames

Incoming frames.

---

## FrameProcessing

Frame status.

---

## StreamHealth

Stream quality.

---

## ProcessingQueue

Queued live jobs.

---

## MeshNetwork

Drone mesh status.

---

# 11. Swarm Module

Supports multiple UAVs.

## SwarmGroups

Swarm definition.

---

## SwarmMembers

Drone membership.

---

## Formation

Formation geometry.

---

## CollisionAvoidance

Safety information.

---

## Heartbeats

Drone health.

---

# 12. Plugin Module

Supports plugins.

## Plugins

Installed plugins.

---

## PluginSettings

Plugin configuration.

---

## PluginData

Plugin storage.

---

# 13. Relationships

Projects

↓

Chunks

↓

Images

↓

CameraPoses

↓

TiePoints

↓

DenseClouds

↓

Meshes

↓

Orthomosaics

↓

Reports

---

Flights

↓

Telemetry

↓

Images

↓

Mapping

↓

Outputs

---

Live Session

↓

Video Streams

↓

Frames

↓

Processing Queue

↓

Orthomosaic

---

# 14. Performance Guidelines

All foreign keys shall be indexed.

Large binary files shall never be stored in SQLite.

Images remain on disk.

Database stores metadata only.

Transactions shall be atomic.

Use WAL mode.

---

# 15. Reserved Tables

Reserved for future versions.

- LiDAR
- Thermal
- SAR
- CloudSync
- MultiUser
- BIM
- CADIntegration
- DigitalTwin
- TerrainAnalysis
- EnvironmentalMonitoring

---

# 16. Migration Strategy

Database upgrades shall never modify original project imagery.

Migration scripts shall update schema versions safely.

Older projects should remain readable whenever possible.

---

# 17. Compliance

Every AerialMapper subsystem shall use ADS.

No subsystem shall create undocumented tables.

Plugins shall register their own tables using the Plugin module.

---

# 18. Conclusion

ADS establishes the official database architecture for AerialMapper.

It provides a scalable, modular, and future-ready foundation supporting photogrammetry, live mapping, swarm drone operations, AI-assisted analysis, reporting, and plugin extensibility.

Every structured dataset within AerialMapper shall conform to this specification.