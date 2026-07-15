from vision.feature_detection import ORBFeatureDetector
from matching.matcher import BFMatcherEngine
from matching.verification import GeometricVerification

detector = ORBFeatureDetector()

matcher = BFMatcherEngine()

verifier = GeometricVerification()

# Detect features
result1 = detector.detect("sample1.jpg")
result2 = detector.detect("sample2.jpg")

# Match descriptors
matches = matcher.match(
    result1["descriptors"],
    result2["descriptors"]
)

# Verify matches using RANSAC
verified_matches = verifier.verify(
    result1["keypoints"],
    result2["keypoints"],
    matches
)

print("Image 1 Keypoints :", len(result1["keypoints"]))
print("Image 2 Keypoints :", len(result2["keypoints"]))
print("Raw Matches       :", len(matches))
print("Verified Matches  :", len(verified_matches))