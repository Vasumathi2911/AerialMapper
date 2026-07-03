# Photogrammetry v1.0
# AerialMapper Photogrammetry Processing Specification

---

## Document Information

| Property | Value |
|----------|-------|
| Document | Photogrammetry v1.0 |
| Full Name | AerialMapper Photogrammetry Processing Specification |
| Status | Approved |
| Version | 1.0 |
| Project | AerialMapper |
| Engine | Mapping Engine |
| Last Updated | July 2026 |

---

# 1. Purpose

This document defines the official photogrammetry workflow implemented by AerialMapper.

The Mapping Engine transforms raw aerial imagery into accurate geospatial products including:

- Sparse Point Cloud
- Dense Point Cloud
- Mesh
- Textured Mesh
- DEM
- DSM
- DTM
- Orthomosaic
- Contours

The workflow is modular, scalable, GPU accelerated, and capable of handling large image datasets.

---

# 2. Design Goals

The Mapping Engine shall provide:

- High Accuracy
- Fast Processing
- GPU Acceleration
- Multi-Core Processing
- Modular Pipeline
- Resume Support
- Large Project Support
- AI Integration
- Event Driven Processing

---

# 3. Processing Pipeline

```
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

Dense Reconstruction

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

Quality Assessment

↓

Export
```

---

# 4. Stage 1 - Image Import

Purpose

Import aerial images into the project.

Responsibilities

- Validate image format
- Read EXIF
- Copy images
- Generate thumbnails
- Store metadata

Input

Image Folder

Output

Imported Images

Supported Formats

- JPG
- JPEG
- PNG
- TIFF
- GeoTIFF
- RAW (Future)

---

# 5. Stage 2 - Metadata Extraction

Purpose

Extract image metadata.

Extract

- GPS
- Altitude
- Latitude
- Longitude
- Camera Model
- Focal Length
- Timestamp
- Sensor Size
- Orientation

Output

Image Metadata Database

---

# 6. Stage 3 - Camera Calibration

Purpose

Estimate camera intrinsic parameters.

Responsibilities

- Lens Distortion
- Principal Point
- Focal Length
- Camera Matrix

Models

- Brown
- OpenCV
- Fisheye

Output

Camera Model

---

# 7. Stage 4 - Feature Extraction

Purpose

Detect unique image features.

Algorithms

- SIFT
- SURF
- ORB
- AKAZE
- BRISK
- SuperPoint (Future)

Output

Feature Descriptors

Stored Data

- Keypoints
- Descriptors
- Scale
- Orientation

---

# 8. Stage 5 - Feature Matching

Purpose

Find corresponding features.

Algorithms

- BF Matcher
- FLANN
- ANN
- SuperGlue (Future)

Outlier Removal

- RANSAC

Output

Feature Matches

---

# 9. Stage 6 - Bundle Adjustment

Purpose

Optimize camera positions.

Responsibilities

- Camera Pose Estimation
- Sparse Reconstruction
- Reprojection Error Minimization

Algorithms

- Levenberg-Marquardt
- Ceres Solver (Future)

Output

Sparse Point Cloud

---

# 10. Stage 7 - Dense Reconstruction

Purpose

Generate dense point cloud.

Methods

- Multi View Stereo (MVS)
- Depth Maps
- Fusion

Output

Dense Point Cloud

Supported Formats

- PLY
- LAS
- LAZ

---

# 11. Stage 8 - Mesh Generation

Purpose

Generate surface mesh.

Algorithms

- Poisson Reconstruction
- Delaunay Triangulation

Output

Triangle Mesh

Formats

- OBJ
- FBX
- GLTF
- PLY

---

# 12. Stage 9 - Texture Generation

Purpose

Generate textured 3D models.

Responsibilities

- UV Mapping
- Texture Blending
- Texture Atlas
- Color Correction

Output

Textured Mesh

---

# 13. Stage 10 - Terrain Products

Generate

- DEM
- DSM
- DTM
- Contours

Purpose

Create terrain models.

Supported Formats

- GeoTIFF
- ASCII Grid
- IMG

---

# 14. Stage 11 - Orthomosaic Generation

Purpose

Generate orthorectified imagery.

Responsibilities

- Orthorectification
- Seamline Detection
- Mosaic Blending
- Color Balancing
- Geo Referencing

Output

Orthomosaic

Formats

- GeoTIFF
- JPEG2000
- PNG

---

# 15. Stage 12 - Quality Assessment

Quality Checks

- RMSE
- GSD
- Coverage
- Overlap
- Blur Detection
- GPS Accuracy
- Reprojection Error

Output

Quality Report

---

# 16. Processing Modes

Supported Modes

Standard

Balanced speed and accuracy.

High Accuracy

Maximum precision.

Fast Preview

Quick reconstruction.

Custom

User-defined parameters.

Live Mapping

Real-time incremental processing.

---

# 17. GPU Acceleration

Supported APIs

- CUDA
- OpenCL (Future)

GPU Accelerated Stages

- Feature Extraction
- Feature Matching
- Dense Reconstruction
- Mesh Generation
- Texture Generation
- Orthomosaic Blending

---

# 18. Parallel Processing

The Mapping Engine shall support parallel execution.

Examples

```
Image Import

├── Metadata

├── Thumbnails

└── Database Update
```

```
Feature Extraction

├── Image 1

├── Image 2

├── Image 3

└── Image N
```

Parallel execution shall utilize available CPU cores.

---

# 19. Checkpoints

Every major stage creates a checkpoint.

Examples

- Images Imported
- Features Extracted
- Sparse Cloud
- Dense Cloud
- Mesh
- Orthomosaic

Processing resumes from the latest valid checkpoint.

---

# 20. Event Integration

The Mapping Engine publishes AMS events.

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

---

# 21. Database Integration

Processing metadata is stored in SQLite.

Large files remain in the project folder.

Database Stores

- Image Metadata
- Camera Parameters
- Matches
- Processing Status
- Reports

File System Stores

- Images
- Meshes
- Orthomosaics
- Point Clouds
- DEM
- DSM
- DTM

---

# 22. Error Handling

Errors shall generate AMS events.

Examples

ImageImportFailed

CalibrationFailed

FeatureMatchingFailed

DenseCloudFailed

MeshGenerationFailed

OrthomosaicFailed

Failures shall never corrupt completed stages.

---

# 23. Performance Goals

Target Performance

Image Import

1000 Images < 30 Seconds

Feature Extraction

GPU Accelerated

UI

Always Responsive

Large Projects

100,000+ Images

Memory

Dynamic Allocation

---

# 24. Future Expansion

Future algorithms include

- NeRF Reconstruction
- Gaussian Splatting
- AI Feature Matching
- AI Camera Calibration
- AI Seamline Optimization
- AI Noise Removal
- Distributed Reconstruction
- Cloud Processing

The architecture supports adding new algorithms without redesigning the processing pipeline.

---

# 25. Compliance

The Mapping Engine shall:

- Follow APS
- Follow ADS
- Follow AMS
- Execute through TaskManager
- Publish Events
- Store metadata in SQLite
- Store outputs in the project folder

---

# 26. Conclusion

This document defines the official photogrammetry processing specification for AerialMapper.

The Mapping Engine provides a modular, scalable, GPU-accelerated, and event-driven workflow capable of transforming raw aerial imagery into professional geospatial products.

It serves as the engineering blueprint for implementing AerialMapper's photogrammetry capabilities.