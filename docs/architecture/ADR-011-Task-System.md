# ADR-011
# AerialMapper Task System Architecture

---

## Document Information

| Property | Value |
|----------|-------|
| Document | ADR-011 |
| Full Name | AerialMapper Task System Architecture |
| Status | Approved |
| Version | 1.0 |
| Project | AerialMapper |
| Architecture | Event Driven Background Task System |
| Last Updated | July 2026 |

---

# 1. Purpose

This document defines the official Task System architecture used by AerialMapper.

The Task System manages all long-running operations without blocking the user interface.

Its primary objective is to allow users to continue working while background tasks execute independently.

Examples include:

- Image Import
- Thumbnail Generation
- Metadata Extraction
- Camera Calibration
- Feature Extraction
- Feature Matching
- Bundle Adjustment
- Dense Reconstruction
- Mesh Generation
- DEM Generation
- Orthomosaic Generation
- AI Processing
- Report Generation

---

# 2. Motivation

Traditional photogrammetry software often blocks the user interface while processing.

AerialMapper adopts a non-blocking architecture where multiple tasks may execute independently.

Benefits include:

- Responsive UI
- Better user experience
- Background processing
- Parallel execution
- Task monitoring
- Easier debugging

---

# 3. Design Goals

The Task System shall provide:

- Background execution
- Task queue management
- Progress tracking
- Pause
- Resume
- Cancel
- Retry
- Logging
- Event-driven updates
- Future distributed execution

---

# 4. Architecture

```
             User Action
                  │
                  ▼
          Service Layer
                  │
                  ▼
           TaskManager
                  │
         Create New Task
                  │
                  ▼
            Task Store
                  │
                  ▼
             Event Bus
                  │
      ┌───────────┼───────────┐
      ▼           ▼           ▼
 Bottom Dock   Notifications   Logs
                  │
                  ▼
          Background Worker
```

---

# 5. Components

## TaskManager

Responsibilities

- Create tasks
- Start tasks
- Pause tasks
- Resume tasks
- Cancel tasks
- Complete tasks
- Publish events

TaskManager is the central coordinator.

---

## TaskStore

Responsibilities

- Store all active tasks
- Store completed tasks
- Store failed tasks
- Update task progress
- Notify subscribers

TaskStore is the single source of truth for task information.

---

## EventBus

Responsibilities

- Publish task events
- Notify subscribers
- Synchronize UI

Examples

TaskCreated

TaskStarted

TaskCompleted

TaskFailed

TaskProgressUpdated

---

## Bottom Dock

Responsibilities

Display:

- Active Tasks
- Queue
- Console
- Notifications
- Memory Usage
- CPU Usage
- GPU Usage

---

# 6. Task Lifecycle

```
Create Task

↓

Queued

↓

Running

↓

Paused

↓

Running

↓

Completed

or

Failed

or

Cancelled
```

---

# 7. Task States

A task may exist in one of the following states.

Queued

Waiting to execute.

Running

Currently executing.

Paused

Temporarily suspended.

Completed

Successfully finished.

Failed

Execution failed.

Cancelled

Cancelled by user.

Retrying

Being executed again.

---

# 8. Task Model

Every task contains:

- Task ID
- Task Name
- Task Type
- Status
- Progress
- Current Step
- Start Time
- End Time
- Duration
- Priority
- Owner
- Logs

---

# 9. Progress Reporting

Every task shall report progress.

Example

```
Import Images

25%

Current Step

Reading EXIF Metadata
```

Progress updates shall be published through AMS.

TaskProgressUpdated

---

# 10. Parallel Processing

Independent tasks may execute simultaneously.

Example

```
Import Images
        │
        ├───────────────┐
        ▼               ▼

Thumbnail      Metadata Extraction

        ▼               ▼

Database Update

        ▼

Completed
```

The Task Manager schedules independent operations while respecting task dependencies.

---

# 11. Task Dependencies

Certain tasks require previous tasks to complete.

Example

```
Import Images

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

Orthomosaic
```

A dependent task shall not start until all prerequisites have completed successfully.

---

# 12. Event Integration

TaskManager publishes:

TaskCreated

TaskQueued

TaskStarted

TaskPaused

TaskResumed

TaskCompleted

TaskCancelled

TaskFailed

TaskProgressUpdated

These events are consumed by:

- Bottom Dock
- Notifications
- Console
- Reports
- Logs

---

# 13. Error Handling

Failures shall not crash the application.

Instead:

Task Failed

↓

Publish Event

↓

Log Error

↓

Notify User

↓

Allow Retry

---

# 14. Performance

The Task System shall:

- Avoid blocking the UI thread
- Support multiple background workers
- Minimize memory usage
- Support thousands of queued tasks

---

# 15. Future Expansion

Future capabilities include:

- Distributed Processing
- Multi-GPU Scheduling
- Cloud Workers
- Remote Processing Nodes
- Cluster Execution

The Task System architecture is designed to support these capabilities without redesign.

---

# 16. Compliance

Every long-running operation within AerialMapper shall execute through the Task System.

Modules shall not perform lengthy processing directly on the UI thread.

Task status updates shall always be published through AMS.

---

# 17. Conclusion

ADR-011 establishes the official Task System architecture for AerialMapper.

The architecture enables responsive user interaction by executing computationally intensive operations in the background while providing real-time progress tracking, monitoring, and event-driven communication.

This document serves as the official reference for all background processing within AerialMapper.