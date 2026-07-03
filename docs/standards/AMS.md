# AMS v1.0
# AerialMapper Messaging Standard

---

## Document Information

| Property | Value |
|----------|-------|
| Document | AMS v1.0 |
| Full Name | AerialMapper Messaging Standard |
| Status | Approved |
| Version | 1.0 |
| Project | AerialMapper |
| Architecture | Event Driven |
| Last Updated | July 2026 |

---

# 1. Purpose

The AerialMapper Messaging Standard (AMS) defines the official communication mechanism used between all modules of AerialMapper.

Instead of modules calling each other directly, they communicate by publishing and subscribing to events through the Event Bus.

This architecture provides:

- Loose coupling
- Scalability
- Extensibility
- Parallel execution
- Better testing
- Plugin support
- Live updates
- Future distributed processing

AMS is mandatory for every subsystem within AerialMapper.

---

# 2. Design Principles

AMS follows the following principles.

## Publish–Subscribe Architecture

Modules never communicate directly.

Instead:

Module A

↓

Publish Event

↓

Event Bus

↓

Subscribers

---

## Loose Coupling

No module shall depend on implementation details of another module.

---

## Event Driven

Every major action inside AerialMapper shall generate an event.

Examples

- Project Created
- Images Imported
- Chunk Created
- Orthomosaic Finished

---

## Immutable Events

Published events shall never be modified.

---

## Strong Typing

All events shall use strongly typed payloads.

---

# 3. Event Bus

The Event Bus is the central communication mechanism.

Responsibilities

- Register subscribers
- Remove subscribers
- Publish events
- Dispatch events
- Handle asynchronous delivery

Every subsystem shall communicate through the Event Bus.

---

# 4. Event Naming Convention

Event names shall follow:

<Category><Action>

Examples

ProjectCreated

ProjectOpened

ProjectClosed

ImagesImported

ChunkCreated

TaskStarted

OrthomosaicCompleted

ReportGenerated

PluginLoaded

---

# 5. Event Categories

AMS defines the following categories.

- Project
- Workspace
- Images
- Camera
- Chunk
- Mapping
- AI
- Processing
- Reports
- Live
- Swarm
- Plugins
- UI
- System

---

# 6. Project Events

ProjectCreated

ProjectOpened

ProjectClosed

ProjectSaved

ProjectModified

ProjectDeleted

ProjectRecovered

ProjectExported

---

# 7. Workspace Events

WorkspaceInitialized

WorkspaceLoaded

WorkspaceReset

WorkspaceRefreshed

WorkspaceClosed

---

# 8. Image Events

ImagesImportStarted

ImagesImported

ImageAdded

ImageRemoved

ImageUpdated

ImageSelected

ImageDeselected

ImageMetadataExtracted

ThumbnailGenerated

ThumbnailFailed

---

# 9. Camera Events

CameraDetected

CameraCalibrationStarted

CameraCalibrationCompleted

CameraPoseEstimated

CameraUpdated

---

# 10. Chunk Events

ChunkCreated

ChunkDeleted

ChunkActivated

ChunkMerged

ChunkSplit

ChunkSaved

ChunkLoaded

---

# 11. Mapping Events

FeatureExtractionStarted

FeatureExtractionCompleted

FeatureMatchingStarted

FeatureMatchingCompleted

BundleAdjustmentStarted

BundleAdjustmentCompleted

SparseCloudGenerated

DenseCloudGenerated

MeshGenerated

TextureGenerated

DEMGenerated

DSMGenerated

DTMGenerated

OrthomosaicStarted

OrthomosaicCompleted

ContoursGenerated

---

# 12. AI Events

AIModelLoaded

AIInferenceStarted

AIInferenceCompleted

ObjectDetected

SegmentationCompleted

ClassificationCompleted

ChangeDetectionCompleted

---

# 13. Processing Events

TaskCreated

TaskQueued

TaskStarted

TaskPaused

TaskResumed

TaskCompleted

TaskFailed

TaskCancelled

TaskProgressUpdated

---

# 14. Report Events

ReportGenerationStarted

ReportGenerated

ReportExported

---

# 15. Live Mapping Events

LiveSessionStarted

LiveSessionStopped

FrameReceived

FrameProcessed

LiveOrthomosaicUpdated

VideoStreamConnected

VideoStreamDisconnected

TelemetryReceived

---

# 16. Swarm Events

SwarmCreated

SwarmDestroyed

DroneConnected

DroneDisconnected

HeartbeatReceived

FormationUpdated

CollisionWarning

MissionStarted

MissionCompleted

---

# 17. Plugin Events

PluginLoaded

PluginUnloaded

PluginEnabled

PluginDisabled

PluginUpdated

PluginError

---

# 18. UI Events

DialogOpened

DialogClosed

PanelOpened

PanelClosed

TabCreated

TabClosed

NotificationCreated

ThemeChanged

LanguageChanged

---

# 19. System Events

ApplicationStarted

ApplicationClosing

DatabaseOpened

DatabaseClosed

DatabaseBackupCompleted

SettingsLoaded

SettingsSaved

MemoryWarning

GPUWarning

CrashRecovered

---

# 20. Event Payload

Every event shall include a payload.

Example

ProjectCreated

{
    projectId,
    projectName,
    timestamp
}

ImagesImported

{
    projectId,
    imageCount,
    imageIds
}

TaskProgressUpdated

{
    taskId,
    progress,
    currentStep
}

---

# 21. Event Lifecycle

Publisher

↓

Create Payload

↓

Publish Event

↓

Event Bus

↓

Subscribers

↓

Update UI

↓

Continue Processing

---

# 22. Best Practices

✔ Publish events only after successful operations.

✔ Events should describe something that has happened.

✔ Keep payloads lightweight.

✔ Never publish duplicate events unnecessarily.

✔ Avoid circular event chains.

✔ Use asynchronous processing for long-running tasks.

---

# 23. Error Handling

Errors shall also generate events.

Examples

ImportFailed

OrthomosaicFailed

MeshGenerationFailed

PluginLoadFailed

DatabaseError

These events allow the UI to display meaningful notifications.

---

# 24. Plugin Integration

Plugins may publish and subscribe to AMS events.

Plugins shall not directly modify internal application state.

Communication shall occur exclusively through the Event Bus.

---

# 25. Future Expansion

Reserved categories

- Cloud
- MultiUser
- LiDAR
- Thermal
- Digital Twin
- BIM
- AR / VR
- Web Streaming

Future versions may introduce additional event categories while maintaining backward compatibility.

---

# 26. Compliance

Every AerialMapper subsystem shall comply with AMS.

Modules shall not bypass the Event Bus for inter-module communication.

Plugins shall follow the same messaging rules as core modules.

---

# 27. Conclusion

AMS establishes the official messaging architecture for AerialMapper.

By using an event-driven publish–subscribe model, the platform remains modular, scalable, testable, and ready for future expansion into live mapping, AI processing, swarm drone operations, cloud collaboration, and plugin development.

AMS is the communication backbone of the AerialMapper ecosystem.