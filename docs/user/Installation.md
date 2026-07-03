# Installation Guide v1.0
# AerialMapper Installation Guide

---

## Document Information

| Property | Value |
|----------|-------|
| Document | Installation Guide v1.0 |
| Full Name | AerialMapper Installation Guide |
| Status | Approved |
| Version | 1.0 |
| Project | AerialMapper |
| Last Updated | July 2026 |

---

# 1. Purpose

This document explains how to install, configure, and verify AerialMapper on supported operating systems.

Following this guide ensures a successful installation and prepares the system for professional photogrammetry workflows.

---

# 2. Supported Platforms

Officially Supported

- Windows 10 (64-bit)
- Windows 11 (64-bit)
- Ubuntu 22.04 LTS
- Ubuntu 24.04 LTS
- Linux Mint

Future Support

- macOS

---

# 3. Minimum System Requirements

| Component | Minimum |
|----------|----------|
| CPU | Quad-Core 64-bit Processor |
| RAM | 8 GB |
| GPU | OpenGL 4.5 Compatible |
| Storage | 20 GB Free Space |
| Display | 1920 × 1080 |

---

# 4. Recommended System Requirements

| Component | Recommended |
|----------|--------------|
| CPU | Intel Core i7 / AMD Ryzen 7 or better |
| RAM | 32 GB or higher |
| GPU | NVIDIA RTX Series (CUDA Supported) |
| VRAM | 8 GB or higher |
| Storage | NVMe SSD |
| Display | 2560 × 1440 or higher |

---

# 5. Required Software

The installer includes all required runtime components.

Optional software for advanced users:

- NVIDIA Graphics Driver
- CUDA Toolkit
- Python 3.12+
- Git

---

# 6. Windows Installation

## Step 1

Download

```
AerialMapper_Setup.exe
```

from the official release page.

---

## Step 2

Double-click

```
AerialMapper_Setup.exe
```

---

## Step 3

Accept the license agreement.

---

## Step 4

Choose the installation directory.

Example

```
C:\Program Files\AerialMapper
```

---

## Step 5

Click

```
Install
```

---

## Step 6

Wait for installation to complete.

---

## Step 7

Click

```
Finish
```

AerialMapper is now installed.

---

# 7. Linux Installation

Extract

```
AerialMapper-Linux.tar.gz
```

Open a terminal.

Navigate to the extracted folder.

Run

```bash
chmod +x AerialMapper

./AerialMapper
```

---

# 8. First Launch

Launch

```
AerialMapper
```

The Welcome Screen appears.

Options

- New Project
- Open Project
- Recent Projects
- Import Images

---

# 9. Creating Your First Project

Select

```
New Project
```

Enter

- Project Name
- Description
- Project Location
- Coordinate System

Click

```
Create
```

A new `.amap` project is created.

---

# 10. Importing Images

Select

```
Import Images
```

Choose the folder containing aerial photographs.

Supported Formats

- JPG
- JPEG
- PNG
- TIFF
- GeoTIFF

Click

```
Import
```

The Task System displays import progress.

---

# 11. Verify Installation

A successful installation should allow you to:

- Create a project
- Import images
- Display thumbnails
- Open the Project Explorer
- Access the Workspace
- View the Bottom Dock

If all operations complete successfully, the installation is verified.

---

# 12. Updating AerialMapper

Open

```
Help

↓

Check for Updates
```

If a newer version is available:

- Download Update
- Install
- Restart Application

Project files remain unchanged during updates.

---

# 13. Uninstalling

## Windows

Open

```
Settings

↓

Apps

↓

Installed Apps

↓

AerialMapper

↓

Uninstall
```

---

## Linux

Delete the installation directory.

Example

```bash
rm -rf AerialMapper
```

Project files are not removed.

---

# 14. Troubleshooting

## Application Does Not Start

Possible Causes

- Unsupported operating system
- Missing graphics driver
- Corrupted installation

Recommended Actions

- Restart computer
- Reinstall AerialMapper
- Update GPU drivers

---

## Images Cannot Be Imported

Possible Causes

- Unsupported image format
- Corrupted image
- Insufficient disk space

Recommended Actions

- Verify image format
- Check available storage
- Re-import images

---

## Slow Performance

Possible Causes

- Low RAM
- Slow storage
- No GPU acceleration

Recommended Actions

- Close unnecessary applications
- Move project to SSD
- Enable GPU acceleration (if available)

---

# 15. Frequently Asked Questions

## Are original images modified?

No.

AerialMapper never modifies source images.

---

## Can projects be moved?

Yes.

The `.amap` project folder is portable and may be copied to another computer.

---

## Is an internet connection required?

No.

AerialMapper operates completely offline.

Internet access is only required for optional updates.

---

## Can multiple projects be open?

Currently, one active project is supported.

Future versions may support multiple project workspaces.

---

# 16. Safety Notes

Users should:

- Keep regular project backups.
- Store projects on reliable storage devices.
- Avoid deleting project folders during processing.
- Maintain sufficient free disk space.

---

# 17. Support

For support, users should consult:

- User Manual
- Official Documentation
- GitHub Repository
- Issue Tracker

---

# 18. Conclusion

This guide provides the official installation procedure for AerialMapper.

Following these instructions ensures a successful installation and prepares the system for creating professional photogrammetry projects.

For detailed application usage, refer to the **AerialMapper User Manual**.