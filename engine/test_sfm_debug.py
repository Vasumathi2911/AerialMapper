import cv2
import numpy as np

from vision.feature_detection import ORBFeatureDetector
from matching.matcher import BFMatcherEngine
from reconstruction.essential_matrix import EssentialMatrixEstimator
from calibration.camera import CameraCalibration

detector = ORBFeatureDetector()
matcher = BFMatcherEngine()
estimator = EssentialMatrixEstimator()

camera = CameraCalibration()
intrinsics = camera.load("camera.json")
K = camera.camera_matrix(intrinsics)

result1 = detector.detect("sample1.jpg")
result2 = detector.detect("sample2.jpg")

matches = matcher.match(
    result1["descriptors"],
    result2["descriptors"]
)

points1 = np.float32([
    result1["keypoints"][m.queryIdx].pt
    for m in matches
])

points2 = np.float32([
    result2["keypoints"][m.trainIdx].pt
    for m in matches
])

E, mask = cv2.findEssentialMat(
    points1,
    points2,
    K,
    method=cv2.RANSAC,
    prob=0.999,
    threshold=1.0
)

print("===================================")
print("SFM DEBUG REPORT")
print("===================================")

print("Image Size :", result1["image"].shape)

print("Keypoints 1 :", len(result1["keypoints"]))
print("Keypoints 2 :", len(result2["keypoints"]))

print("Matches :", len(matches))

print("Essential Inliers :", int(mask.sum()))

print()

print("Camera Matrix")
print(K)

print()

print("Essential Matrix")
print(E)