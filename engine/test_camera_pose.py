import numpy as np

from vision.feature_detection import ORBFeatureDetector
from matching.matcher import BFMatcherEngine
from matching.verification import GeometricVerification
from reconstruction.essential_matrix import EssentialMatrixEstimator
from reconstruction.camera_pose import CameraPoseEstimator

detector = ORBFeatureDetector()
matcher = BFMatcherEngine()
verifier = GeometricVerification()
estimator = EssentialMatrixEstimator()
pose = CameraPoseEstimator()

result1 = detector.detect("sample1.jpg")
result2 = detector.detect("sample2.jpg")

matches = matcher.match(
    result1["descriptors"],
    result2["descriptors"]
)

verified = verifier.verify(
    result1["keypoints"],
    result2["keypoints"],
    matches
)

from calibration.camera import CameraCalibration

camera = CameraCalibration()

intrinsics = camera.load("camera.json")

camera_matrix = camera.camera_matrix(intrinsics)

E, mask = estimator.estimate(
    result1["keypoints"],
    result2["keypoints"],
    verified,
    camera_matrix
)

result = pose.recover(
    E,
    result1["keypoints"],
    result2["keypoints"],
    verified,
    camera_matrix,
    mask
)

print("Recovered Inliers :", result["inliers"])

print()

print("Pose Mask Shape :", result["mask"].shape)
print("Pose Mask Sum   :", int(result["mask"].sum()))

print()

print("\nRotation Matrix")
print(result["rotation"])

print()

print("\nTranslation Vector")
print(result["translation"])
