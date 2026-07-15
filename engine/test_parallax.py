from pathlib import Path
import math

from vision.feature_detection import ORBFeatureDetector
from matching.matcher import BFMatcherEngine

# -------------------------------------------------

folder = Path("datasets/validation/images")

image1 = folder / "DJI_0005.jpg"
image2 = folder / "DJI_0006.jpg"

detector = ORBFeatureDetector()
matcher = BFMatcherEngine()

result1 = detector.detect(str(image1))
result2 = detector.detect(str(image2))

matches = matcher.match(
    result1["descriptors"],
    result2["descriptors"]
)

distances = []

for match in matches:

    p1 = result1["keypoints"][match.queryIdx].pt
    p2 = result2["keypoints"][match.trainIdx].pt

    dx = p2[0] - p1[0]
    dy = p2[1] - p1[1]

    distances.append(math.sqrt(dx * dx + dy * dy))

distances.sort()

print("=" * 60)
print("AerialMapper Parallax Analysis")
print("=" * 60)

print("Image 1 :", image1.name)
print("Image 2 :", image2.name)

print()

print("Matches :", len(matches))

print()

print(f"Minimum : {distances[0]:.2f} px")
print(f"Median  : {distances[len(distances)//2]:.2f} px")
print(f"Average : {sum(distances)/len(distances):.2f} px")
print(f"Maximum : {max(distances):.2f} px")