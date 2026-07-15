from vision.feature_detection import ORBFeatureDetector
from matching.matcher import BFMatcherEngine
from matching.verification import GeometricVerification
from matching.track_builder import TrackBuilder

detector = ORBFeatureDetector()

matcher = BFMatcherEngine()

verifier = GeometricVerification()

builder = TrackBuilder()

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

tracks = builder.build(verified)

print("Verified Matches :", len(verified))
print("Tracks Created   :", len(tracks))