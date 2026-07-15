from dataclasses import dataclass

from .feature_result import FeatureDetectionResult
from .match_result import MatchResult


@dataclass
class SfMPipelineResult:

    image1: FeatureDetectionResult

    image2: FeatureDetectionResult

    matching: MatchResult