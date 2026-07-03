# ADR-014
# AerialMapper Processing Pipeline Architecture

---

## Document Information

| Property | Value |
|----------|-------|
| Document | ADR-014 |
| Full Name | AerialMapper Processing Pipeline Architecture |
| Status | Approved |
| Version | 1.0 |
| Project | AerialMapper |
| Architecture | Modular Processing Pipeline |
| Last Updated | July 2026 |

---

# 1. Purpose

This document defines the official processing pipeline architecture used throughout AerialMapper.

The Processing Pipeline is responsible for transforming raw aerial imagery into high-quality geospatial products such as orthomosaics, digital elevation models, textured meshes, point clouds, and AI-assisted analysis.

Every processing engine within AerialMapper shall follow this pipeline architecture.

---

# 2. Motivation

Professional photogrammetry software performs dozens of processing stages.

A standardized processing pipeline provides:

- Modular development
- Resume capability
- Background execution
- Progress monitoring
- Easier debugging
- Better scalability
- Plugin integration
- Future distributed processing

---

# 3. Design Goals

The Processing Pipeline shall provide:

- Sequential processing
- Parallel execution where possible
- Resume from checkpoints
- Background processing
- Real-time progress updates
- Event-driven communication
- Modular processing stages
- AI integration
- Future cloud execution

---

# 4. High-Level Pipeline

```
Project

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

Mesh Generation

↓

Texture Generation

↓

DEM

↓

DSM

↓

DTM

↓

Orthomosaic

↓

AI Analysis

↓

Quality Assessment

↓

Report Generation

↓

Export
```

---

# 5. Pipeline Architecture

```
User

↓

TaskManager

↓

Processing Pipeline

↓

Processing Stage

↓

Event Bus

↓

Database

↓

Workspace

↓

Reports
```

Each processing stage executes independently while communicating through AMS.

---

# 6. Processing Stages

## Stage 1

Image Import

Responsibilities

- Copy Images
- Validate Files
- Read EXIF
- Generate Thumbnails
- Store Metadata

Output

Imported Images

---

## Stage 2

Metadata Extraction

Responsibilities

- GPS
- IMU
- Camera Parameters
- Timestamp
- Sensor Information

Output

Image Metadata

---

## Stage 3

Camera Calibration

Responsibilities

- Lens Calibration
- Distortion Correction
- Intrinsic Parameters

Output

Camera Models

---

## Stage 4

Feature Extraction

Responsibilities

- Detect Keypoints
- Compute Feature Descriptors

Algorithms

- SIFT
- SURF
- ORB
- AKAZE
- SuperPoint (Future)

Output

Feature Database

---

## Stage 5

Feature Matching

Responsibilities

- Pair Images
- Match Descriptors
- Remove Outliers

Algorithms

- FLANN
- BF Matcher
- ANN
- SuperGlue (Future)

Output

Image Matches

---

## Stage 6

Bundle Adjustment

Responsibilities

- Camera Optimization
- Pose Estimation
- Sparse Reconstruction

Output

Sparse Point Cloud

---

## Stage 7

Dense Reconstruction

Responsibilities

- Multi View Stereo
- Depth Maps
- Dense Point Cloud

Output

Dense Cloud

---

## Stage 8

Mesh Generation

Responsibilities

- Surface Reconstruction
- Triangle Mesh

Output

Mesh Model

---

## Stage 9

Texture Generation

Responsibilities

- UV Mapping
- Texture Blending
- Texture Atlas

Output

Textured Mesh

---

## Stage 10

Terrain Products

Responsibilities

Generate

- DEM
- DSM
- DTM
- Contours

Output

Terrain Models

---

## Stage 11

Orthomosaic

Responsibilities

- Orthorectification
- Seamline Generation
- Color Balancing
- Mosaic Blending

Output

Geo-referenced Orthomosaic

---

## Stage 12

AI Processing

Responsibilities

- Object Detection
- Segmentation
- Classification
- Change Detection

Output

AI Results

---

## Stage 13

Quality Assessment

Responsibilities

- RMSE
- Coverage Analysis
- Image Quality
- Overlap Verification
- Processing Statistics

Output

Quality Report

---

## Stage 14

Report Generation

Responsibilities

Generate

- PDF
- HTML
- CSV

Output

Processing Reports

---

## Stage 15

Export

Responsibilities

Export

- GeoTIFF
- OBJ
- PLY
- LAS
- LAZ
- FBX
- DXF
- GeoPackage

Output

Final Deliverables

---

# 7. Pipeline Dependencies

```
Import

↓

Metadata

↓

Calibration

↓

Features

↓

Matching

↓

Bundle Adjustment

↓

Dense Cloud

↓

Mesh

↓

Orthomosaic

↓

AI

↓

Reports
```

A stage shall not execute until all required predecessor stages complete successfully.

---

# 8. Task Integration

Every processing stage creates a background task.

Examples

Image Import

↓

Task Created

↓

Task Running

↓

Progress Updated

↓

Task Completed

The TaskManager controls scheduling and execution.

---

# 9. Event Integration

Each processing stage publishes AMS events.

Examples

ImagesImported

FeatureExtractionStarted

FeatureExtractionCompleted

FeatureMatchingCompleted

BundleAdjustmentCompleted

DenseCloudGenerated

MeshGenerated

DEMGenerated

OrthomosaicCompleted

ReportGenerated

These events update:

- Workspace
- Bottom Dock
- Console
- Notifications
- Project Explorer

---

# 10. Database Integration

Processing stages read and write through DatabaseManager.

Examples

Read

- Images
- Camera Data
- Chunks

Write

- Matches
- Point Clouds
- Mesh Metadata
- Reports
- AI Results

Large binary files remain on disk.

---

# 11. Parallel Processing

Independent stages may execute simultaneously.

Example

```
Image Import

├──────────────┐

▼              ▼

Metadata     Thumbnails

▼              ▼

Database Update

▼

Completed
```

Future versions may support GPU and distributed execution.

---

# 12. Checkpoints

Every major stage creates a checkpoint.

Examples

- Images Imported
- Features Extracted
- Sparse Cloud
- Dense Cloud
- Mesh
- Orthomosaic

If processing is interrupted, execution resumes from the latest valid checkpoint.

---

# 13. Error Handling

If a stage fails:

```
Processing Error

↓

Publish Failure Event

↓

Log Error

↓

Notify User

↓

Offer Retry
```

Failures shall never corrupt completed stages.

---

# 14. Performance Goals

Target Performance

UI

Always Responsive

Processing

Background Execution

Large Projects

100,000+ Images

GPU

Supported

CPU

Multi-Core

Memory

Efficient Streaming

---

# 15. Future Expansion

The pipeline is designed to support:

- LiDAR
- Thermal
- Multispectral
- SAR
- Digital Twin
- Cloud Processing
- Distributed Clusters
- AI Assisted Optimization
- Real-Time Mapping
- Swarm Drone Processing

New stages may be inserted without redesigning the pipeline.

---

# 16. Compliance

Every processing engine shall:

- Execute through TaskManager
- Communicate through AMS
- Store metadata using ADS
- Store files using APS

Direct execution outside the Processing Pipeline is prohibited.

---

# 17. Conclusion

ADR-014 establishes the official Processing Pipeline architecture for AerialMapper.

The architecture provides a modular, event-driven, scalable, and recoverable workflow that transforms raw aerial imagery into professional geospatial products.

By integrating APS, ADS, AMS, the Task System, and the Event Bus, the Processing Pipeline forms the computational backbone of AerialMapper and provides a foundation for future AI-assisted mapping, swarm drone operations, distributed processing, and cloud-enabled workflows.