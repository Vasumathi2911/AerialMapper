from pathlib import Path

from vision.feature_detection import ORBFeatureDetector
from matching.matcher import BFMatcherEngine
from reconstruction.essential_matrix import EssentialMatrixEstimator
from reconstruction.camera_pose import CameraPoseEstimator
from calibration.camera import CameraCalibration


folder = Path("datasets/validation/images")

image1 = folder / "DJI_0005.jpg"
image2 = folder / "DJI_0006.jpg"

# -----------------------------
# Load camera calibration
# -----------------------------
calibration = CameraCalibration()

intrinsics = calibration.load("camera.json")

camera_matrix = calibration.camera_matrix(intrinsics)

# -----------------------------
# Feature Detection
# -----------------------------
detector = ORBFeatureDetector()

result1 = detector.detect(str(image1))
result2 = detector.detect(str(image2))

# -----------------------------
# Matching
# -----------------------------
matcher = BFMatcherEngine()

matches = matcher.match(
    result1["descriptors"],
    result2["descriptors"]
)

# -----------------------------
# Essential Matrix
# -----------------------------
essential = EssentialMatrixEstimator()

E, mask = essential.estimate(
    result1["keypoints"],
    result2["keypoints"],
    matches,
    camera_matrix
)

# -----------------------------
# Camera Pose
# -----------------------------
pose = CameraPoseEstimator()

result = pose.recover(
    E,
    result1["keypoints"],
    result2["keypoints"],
    matches,
    camera_matrix,
    mask
)

print()
print("=" * 60)
print("Best Pair Pose Validation")
print("=" * 60)

print("Image 1 :", image1.name)
print("Image 2 :", image2.name)

print("Matches :", len(matches))
print("Essential Inliers :", int(mask.sum()))

print()

print("Recovered Inliers :", result["inliers"])

print()

print("Rotation Matrix")
print(result["rotation"])

print()

print("Translation Vector")
print(result["translation"])