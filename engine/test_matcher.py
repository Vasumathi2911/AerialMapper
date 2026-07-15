from vision.feature_detection import ORBFeatureDetector
from matching.matcher import BFMatcherEngine

detector = ORBFeatureDetector()

matcher = BFMatcherEngine()

result1 = detector.detect("sample1.jpg")

result2 = detector.detect("sample2.jpg")

matches = matcher.match(

    result1["descriptors"],

    result2["descriptors"]

)

print(

    "Image 1 Keypoints:",

    len(result1["keypoints"])

)

print(

    "Image 2 Keypoints:",

    len(result2["keypoints"])

)

print(

    "Matches Found:",

    len(matches)

)

if matches:

    print(

        "Best Match Distance:",

        matches[0].distance

    )