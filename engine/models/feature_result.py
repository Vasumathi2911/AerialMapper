from dataclasses import dataclass


@dataclass
class FeatureDetectionResult:

    keypoints: int

    descriptor_count: int