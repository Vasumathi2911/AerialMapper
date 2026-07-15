import numpy as np

from vision.feature_detection import ORBFeatureDetector
from matching.matcher import BFMatcherEngine
from matching.verification import GeometricVerification
from reconstruction.essential_matrix import EssentialMatrixEstimator

detector = ORBFeatureDetector()

matcher = BFMatcherEngine()

verifier = GeometricVerification()

estimator = EssentialMatrixEstimator()

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

# Temporary camera calibration
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

print("\nEssential Matrix")
print(E)

print("\nMask Shape:", mask.shape)
print("Essential Inliers:", int(mask.sum()))

print("Verified Matches :", len(verified))

if E is not None:
    print("Essential Matrix Shape :", E.shape)
else:
    print("Essential Matrix could not be estimated.")
    print("Mask Shape:", mask.shape)
    print("Essential Inliers:", int(mask.sum()))