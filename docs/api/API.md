# API v1.0
# AerialMapper Internal API Specification

---

## Document Information

| Property | Value |
|----------|-------|
| Document | API v1.0 |
| Full Name | AerialMapper Internal API Specification |
| Status | Approved |
| Version | 1.0 |
| Project | AerialMapper |
| Language | TypeScript |
| Framework | React + Electron |
| Last Updated | July 2026 |

---

# 1. Purpose

This document defines the official internal APIs used throughout AerialMapper.

The API specification provides a consistent interface between modules while maintaining loose coupling through the Event Bus.

Every subsystem shall use these APIs instead of directly accessing other modules.

---

# 2. Design Goals

The API shall provide:

- Consistent interfaces
- Modular development
- Strong typing
- Event-driven communication
- Easy testing
- Future plugin support
- Cross-platform compatibility

---

# 3. API Architecture

```
User Interface

↓

Managers

↓

Services

↓

Stores

↓

Database

↓

Project Files
```

---

# 4. Core Managers

## ProjectManager

Purpose

Controls the complete project lifecycle.

Responsibilities

- Create Project
- Open Project
- Save Project
- Close Project
- Delete Project
- Recover Project

Public API

```
createProject()

openProject()

saveProject()

closeProject()

deleteProject()

recoverProject()

getCurrentProject()
```

Publishes

- ProjectCreated
- ProjectOpened
- ProjectSaved
- ProjectClosed

---

## TaskManager

Purpose

Controls background tasks.

Responsibilities

- Create Task
- Start Task
- Pause Task
- Resume Task
- Cancel Task
- Retry Task

Public API

```
createTask()

startTask()

pauseTask()

resumeTask()

cancelTask()

retryTask()

updateProgress()
```

Publishes

TaskCreated

TaskStarted

TaskCompleted

TaskProgressUpdated

---

## DatabaseManager

Purpose

Provides database access.

Responsibilities

- Open Database
- Execute Queries
- Transactions
- Backup
- Migration

Public API

```
open()

close()

query()

execute()

beginTransaction()

commit()

rollback()

backup()
```

---

## EventBus

Purpose

Central communication system.

Responsibilities

- Publish
- Subscribe
- Unsubscribe

Public API

```
publish()

subscribe()

unsubscribe()

clear()
```

Example

```
EventBus.publish(
    Events.ImagesImported,
    payload
);
```

---

## NotificationManager

Purpose

Display notifications.

Public API

```
success()

warning()

error()

info()

clear()
```

---

## PluginManager

Purpose

Manage plugins.

Public API

```
loadPlugin()

unloadPlugin()

enablePlugin()

disablePlugin()

reloadPlugin()
```

---

# 5. Stores

Stores maintain application state.

---

## ProjectStore

Stores

- Current Project
- Active Chunk
- Recent Projects

Public API

```
getProject()

setProject()

clear()

subscribe()
```

---

## TaskStore

Stores

- Active Tasks
- Queue
- Completed Tasks

Public API

```
addTask()

removeTask()

updateTask()

getTasks()
```

---

## SettingsStore

Stores

- User Preferences
- Theme
- Language
- Performance Settings

Public API

```
get()

set()

save()

load()
```

---

# 6. Services

Services contain business logic.

---

## ImageImportService

Responsibilities

- Import Images
- Validate Images
- Read EXIF
- Generate Thumbnails

Public API

```
importImages()

validate()

extractMetadata()

generateThumbnails()
```

---

## MetadataService

Responsibilities

- Read EXIF
- GPS
- Camera Parameters
- IMU

Public API

```
readEXIF()

readGPS()

readCamera()

readIMU()
```

---

## ThumbnailService

Responsibilities

- Create Thumbnails
- Cache Images

Public API

```
generate()

generateBatch()

delete()

clearCache()
```

---

## ChunkManager

Responsibilities

- Create Chunk
- Delete Chunk
- Merge Chunk
- Split Chunk

Public API

```
createChunk()

deleteChunk()

merge()

split()

rename()
```

---

## MappingEngine

Responsibilities

- Feature Extraction
- Matching
- Bundle Adjustment
- Dense Cloud
- Mesh
- DEM
- Orthomosaic

Public API

```
extractFeatures()

matchFeatures()

bundleAdjustment()

buildDenseCloud()

buildMesh()

buildDEM()

buildOrthomosaic()
```

---

## AIManager

Responsibilities

- Load Models
- Execute AI
- Detect Objects
- Segment Images

Public API

```
loadModel()

detect()

segment()

classify()

generateReport()
```

---

## ReportManager

Responsibilities

- PDF
- HTML
- CSV

Public API

```
generatePDF()

generateHTML()

generateCSV()

export()
```

---

## ExportManager

Responsibilities

Export Results

Supported

GeoTIFF

OBJ

PLY

LAS

LAZ

FBX

GLTF

DXF

Public API

```
exportGeoTIFF()

exportOBJ()

exportLAS()

exportMesh()
```

---

## FileManager

Responsibilities

Read

Write

Copy

Delete

Move

Public API

```
copy()

move()

delete()

exists()

createDirectory()
```

---

# 7. UI Components

Major UI Components

MenuBar

Ribbon

Workspace

BottomDock

StatusBar

ProjectExplorer

PropertiesPanel

Dialogs

---

# 8. Event Integration

Managers communicate through AMS.

Example

```
ProjectManager

↓

EventBus.publish()

↓

ProjectCreated

↓

ProjectExplorer

Workspace

Notifications
```

Direct manager-to-manager communication is prohibited.

---

# 9. Error Handling

Every API shall:

- Validate input
- Throw typed errors
- Publish failure events
- Log failures

Examples

ProjectCreationFailed

ImportFailed

DatabaseError

---

# 10. Thread Safety

Long-running APIs shall execute in background workers.

UI APIs shall remain non-blocking.

Examples

Background

Image Import

Feature Extraction

Mesh Generation

UI

Ribbon

Workspace

Dialogs

---

# 11. Future APIs

Reserved

CloudManager

LicenseManager

SyncManager

TelemetryManager

MissionPlanner

LiDARManager

ThermalManager

DigitalTwinManager

PluginMarketplace

---

# 12. Versioning

API Version

1.0

Future versions shall remain backward compatible whenever possible.

Deprecated APIs shall remain available for at least one major release.

---

# 13. Best Practices

✔ Keep APIs focused.

✔ Use strong typing.

✔ Publish events through EventBus.

✔ Never expose internal database implementation.

✔ Prefer services over direct file access.

✔ Use stores as the single source of truth.

---

# 14. Compliance

Every module within AerialMapper shall:

- Follow APS
- Follow ADS
- Follow AMS
- Use the APIs defined in this document

Direct subsystem dependencies are prohibited.

---

# 15. Conclusion

The AerialMapper Internal API Specification establishes the official interfaces used by every subsystem.

By standardizing managers, services, stores, and event-driven communication, the API ensures a modular, maintainable, scalable, and future-ready software architecture.

This document serves as the primary reference for developers implementing or extending AerialMapper.