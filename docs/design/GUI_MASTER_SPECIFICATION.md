# GUI MASTER SPECIFICATION
# AerialMapper User Interface Specification

---

## Document Information

| Property | Value |
|----------|-------|
| Document | GUI Master Specification |
| Version | 1.0 |
| Status | Approved |
| Project | AerialMapper |
| UI Framework | React + TypeScript |
| Desktop Framework | Electron |
| Last Updated | July 2026 |

---

# 1. Purpose

This document defines the official graphical user interface (GUI) of AerialMapper.

The objective is to provide a professional, responsive, intuitive, and scalable user interface suitable for photogrammetry, drone mapping, AI-assisted analysis, and live mission control.

All UI components shall comply with this specification.

---

# 2. Design Goals

The GUI shall provide:

- Professional desktop experience
- High responsiveness
- Modular layout
- Dockable panels
- Multi-workspace support
- Dark and Light themes
- Multi-monitor compatibility
- Keyboard shortcuts
- Accessibility
- Future plugin integration

---

# 3. GUI Layout

```
+-------------------------------------------------------------+
| Menu Bar                                                    |
+-------------------------------------------------------------+
| Ribbon                                                      |
+-------------------------------------------------------------+
| Project Explorer | Workspace | Properties Panel             |
|                  |           |                              |
|                  |           |                              |
|                  |           |                              |
+-------------------------------------------------------------+
| Bottom Dock                                                |
+-------------------------------------------------------------+
| Status Bar                                                 |
+-------------------------------------------------------------+
```

---

# 4. Main Components

The AerialMapper GUI consists of:

- Menu Bar
- Ribbon
- Workspace
- Project Explorer
- Properties Panel
- Bottom Dock
- Status Bar
- Dialog System
- Notification System

---

# 5. Menu Bar

Purpose

Provides access to application-wide commands.

Menus

- File
- Edit
- View
- Project
- Survey
- Processing
- AI
- Tools
- Window
- Help

Example

```
File

New Project

Open Project

Save

Save As

Import Images

Exit
```

---

# 6. Ribbon

Purpose

Provides quick access to frequently used tools.

Ribbon Tabs

- Home
- Project
- Survey
- Processing
- AI
- Export
- View
- Plugins

Each ribbon tab contains grouped commands.

---

# 7. Workspace

Purpose

Primary working area.

Supports

- Welcome Screen
- Orthomosaic Viewer
- DEM Viewer
- 3D Viewer
- Point Cloud Viewer
- Image Viewer
- Live Mapping
- AI Viewer

Only one workspace is active at a time.

---

# 8. Workspace Tabs

Multiple workspaces may be opened simultaneously.

Examples

```
Project

Orthomosaic

DEM

3D Mesh

Point Cloud

AI Results

Reports
```

Tabs may be:

- Opened
- Closed
- Reordered
- Detached (Future)

---

# 9. Welcome Screen

Displayed when no project is open.

Contains

- New Project
- Open Project
- Recent Projects
- Import Images
- Documentation
- Recent Activity

---

# 10. Project Explorer

Purpose

Displays the project hierarchy.

Tree Structure

```
Project

Images

Chunks

Orthomosaics

Meshes

Point Clouds

DEM

DSM

Reports

AI Results

Plugins
```

Supports

- Expand
- Collapse
- Context Menu
- Drag and Drop

---

# 11. Properties Panel

Purpose

Displays properties of the selected object.

Examples

Image

Chunk

Camera

Orthomosaic

Mesh

Drone

Report

Properties update automatically.

---

# 12. Bottom Dock

Purpose

Displays background information.

Tabs

- Tasks
- Console
- Notifications
- Reports
- Memory Usage
- CPU Monitor
- GPU Monitor
- Logs

Users may show or hide individual tabs.

---

# 13. Status Bar

Displays

- Current Project
- Coordinate System
- Zoom Level
- Cursor Coordinates
- CPU Usage
- GPU Usage
- Memory Usage
- Database Status
- Background Tasks

Updates in real time.

---

# 14. Dialog System

Standard dialogs include

- New Project
- Open Project
- Import Images
- Settings
- Coordinate System
- Camera Calibration
- Export
- AI Settings

Dialogs shall be modal unless otherwise specified.

---

# 15. Notification System

Notifications appear in the bottom-right corner.

Types

- Success
- Information
- Warning
- Error

Examples

Project Created

Images Imported

Orthomosaic Completed

Export Finished

---

# 16. Theme

Supported Themes

- Dark (Default)
- Light

Future

- Custom Themes

The UI shall remain visually consistent across themes.

---

# 17. Icons

Icons shall follow a consistent style.

Examples

📁 Project

📷 Image

🛰 Drone

🧠 AI

🗺 Orthomosaic

⛰ DEM

📈 Report

⚙ Settings

Icons shall be vector-based.

---

# 18. Keyboard Shortcuts

Examples

Ctrl + N

New Project

Ctrl + O

Open Project

Ctrl + S

Save

Ctrl + Shift + S

Save As

Ctrl + Z

Undo

Ctrl + Y

Redo

F11

Fullscreen

---

# 19. Context Menus

Right-click menus shall be available for

- Images
- Chunks
- Reports
- AI Results
- Outputs
- Workspace
- Project Explorer

Context menus shall display only relevant actions.

---

# 20. Drag and Drop

Supported Operations

- Import Images
- Reorder Tabs
- Reorder Panels
- Import Projects
- Import Flight Logs

Future

Dockable Panels

---

# 21. Multi-Monitor Support

The GUI shall support:

- Multiple Displays
- Detached Windows (Future)
- Independent Viewers

Example

Monitor 1

Workspace

Monitor 2

3D Viewer

---

# 22. Accessibility

The GUI shall support:

- Keyboard Navigation
- High Contrast Mode
- Scalable Fonts
- Screen Readers (Future)

---

# 23. Performance

Target Performance

Application Startup

< 3 Seconds

Workspace Switch

< 500 ms

Large Project Loading

Incremental

UI Frame Rate

60 FPS

The GUI shall remain responsive during background processing.

---

# 24. Future Expansion

Future UI components include

- Plugin Marketplace
- Cloud Dashboard
- Live Drone Dashboard
- Swarm Control Panel
- AI Workflow Designer
- Mission Planner
- Digital Twin Viewer
- VR Viewer
- Web Dashboard

The GUI architecture shall support expansion without redesign.

---

# 25. Compliance

Every UI component shall:

- Follow AerialMapper Design Language
- Use Event Bus (AMS)
- Read data through ADS
- Respect APS project structure

Direct access to internal services is prohibited.

---

# 26. Conclusion

The GUI Master Specification defines the official user interface architecture of AerialMapper.

The interface is designed to provide a modern, responsive, modular, and extensible desktop experience suitable for professional photogrammetry, AI-assisted mapping, live drone operations, and future cloud-enabled workflows.

This document serves as the authoritative reference for all user interface development within AerialMapper.