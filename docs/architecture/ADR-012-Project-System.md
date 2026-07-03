# ADR-012
# AerialMapper Project System Architecture

---

## Document Information

| Property | Value |
|----------|-------|
| Document | ADR-012 |
| Full Name | AerialMapper Project System Architecture |
| Status | Approved |
| Version | 1.0 |
| Project | AerialMapper |
| Architecture | Modular Project Management |
| Last Updated | July 2026 |

---

# 1. Purpose

This document defines the official Project System architecture used by AerialMapper.

The Project System is responsible for managing the complete lifecycle of an AerialMapper project from creation to archival.

The Project System provides a single, standardized workflow for creating, opening, saving, recovering, and closing projects.

All project-related operations shall comply with APS (AerialMapper Project Standard), ADS (AerialMapper Database Standard), and AMS (AerialMapper Messaging Standard).

---

# 2. Motivation

Professional photogrammetry software manages a large amount of project data including:

- Images
- Camera calibration
- Sparse point clouds
- Dense point clouds
- Meshes
- Orthomosaics
- AI results
- Reports
- Processing history

A centralized Project System provides:

- Consistent project structure
- Reliable storage
- Easy recovery
- Simplified maintenance
- Future cloud compatibility

---

# 3. Design Goals

The Project System shall provide:

- Project creation
- Project opening
- Project saving
- Project closing
- Project recovery
- Automatic backup
- Autosave
- Version management
- Cross-platform compatibility
- Event-driven updates

---

# 4. Architecture

```
                User

                  │

                  ▼

        New Project Dialog

                  │

                  ▼

          ProjectManager

          /             \

         ▼               ▼

 ProjectStore     ProjectFileManager

                         │

          ┌──────────────┼──────────────┐

          ▼              ▼              ▼

     manifest.json   project.db    Folder Structure
```

---

# 5. Core Components

## ProjectManager

Purpose

Coordinates every project operation.

Responsibilities

- Create Project
- Open Project
- Save Project
- Close Project
- Delete Project
- Recover Project
- Publish Events

ProjectManager does not directly manipulate files.

---

## ProjectStore

Purpose

Stores the active project in memory.

Responsibilities

- Current Project
- Project List
- Active Chunk
- Active Settings

ProjectStore is the single source of truth for runtime project information.

---

## ProjectFileManager

Purpose

Handles project file operations.

Responsibilities

- Create Folder Structure
- Create manifest.json
- Create SQLite Database
- Read Project
- Write Project
- Backup Project
- Autosave

ProjectFileManager performs all file system operations.

---

## New Project Dialog

Purpose

Collect project information from the user.

Fields

- Project Name
- Description
- Location
- Coordinate System

The dialog shall validate user input before project creation.

---

## Project Explorer

Purpose

Visual representation of the current project.

Displays

- Images
- Chunks
- Outputs
- Reports
- AI Results
- Measurements

Project Explorer subscribes to project events through AMS.

---

# 6. Project Lifecycle

```
Create Project

↓

Create Folder Structure

↓

Create manifest.json

↓

Create SQLite Database

↓

Initialize Project Store

↓

Publish ProjectCreated

↓

Open Workspace
```

---

# 7. Project Opening

```
Select Project

↓

Validate Folder

↓

Read manifest.json

↓

Open project.db

↓

Load Project Store

↓

Publish ProjectOpened

↓

Initialize Workspace
```

---

# 8. Project Saving

Saving includes:

- Database Commit
- Manifest Update
- Settings Save
- Autosave Update

Events

ProjectSaved

---

# 9. Project Closing

Closing a project performs:

- Save Pending Changes
- Flush Database
- Close SQLite Connection
- Clear ProjectStore
- Reset Workspace

Event

ProjectClosed

---

# 10. Project Recovery

If an unexpected shutdown occurs:

```
Application Start

↓

Detect Autosave

↓

Validate Database

↓

Recover Project

↓

Publish ProjectRecovered

↓

Notify User
```

Recovery shall never overwrite the original project.

---

# 11. Project Format

Every project shall follow APS.

Example

```
Bridge Survey.amap/

├── manifest.json
├── project.db
├── images/
├── metadata/
├── chunks/
├── outputs/
├── ai/
├── reports/
├── cache/
├── logs/
├── autosave/
├── backups/
├── temp/
└── plugins/
```

---

# 12. Database Integration

ProjectManager interacts with ADS through SQLite.

The database stores:

- Images
- Cameras
- Chunks
- Processing Jobs
- AI Results
- Reports
- Settings

Large binary assets remain on disk.

---

# 13. Event Integration

The Project System publishes:

ProjectCreated

ProjectOpened

ProjectSaved

ProjectClosed

ProjectRecovered

ProjectDeleted

ProjectModified

These events are consumed by:

- Workspace
- Project Explorer
- Bottom Dock
- Task Manager
- Notification Center
- Report Engine

---

# 14. Autosave

Default Interval

5 Minutes

Autosave stores:

- Project State
- Database Transaction
- Workspace Layout
- Active Tasks

Autosave shall never replace the primary project until validation succeeds.

---

# 15. Backup Strategy

Manual Backup

User initiated.

Automatic Backup

Created before major operations.

Examples

- Database Migration
- Large Image Import
- Plugin Installation

---

# 16. Cross Platform Support

Supported Platforms

- Windows
- Linux

Future

- macOS

Project paths shall always use relative references inside the project.

---

# 17. Security

The Project System shall never:

- Delete original images
- Modify imported source imagery
- Corrupt project data
- Store sensitive information without user consent

Every operation shall preserve project integrity.

---

# 18. Future Expansion

The Project System is designed to support:

- Cloud Projects
- Team Collaboration
- Remote Storage
- Version History
- Branching
- Shared Projects
- Plugin Metadata
- Distributed Processing

without architectural redesign.

---

# 19. Compliance

Every module performing project operations shall use the ProjectManager.

Direct modification of project folders is prohibited.

All project changes shall follow APS, ADS, and AMS.

---

# 20. Conclusion

ADR-012 establishes the official Project System architecture for AerialMapper.

The Project System provides a reliable, modular, and scalable foundation for project lifecycle management while integrating seamlessly with the Project Standard (APS), Database Standard (ADS), and Messaging Standard (AMS).

This architecture ensures that every AerialMapper project remains portable, recoverable, maintainable, and ready for future expansion.