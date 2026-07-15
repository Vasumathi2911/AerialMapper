from vision.feature_detection import ORBFeatureDetector

detector = ORBFeatureDetector()

result = detector.detect("sample.jpg")

print("Keypoints:", len(result["keypoints"]))

if result["descriptors"] is not None:

    print("Descriptor Shape:", result["descriptors"].shape)

else:

    print("No descriptors found.")