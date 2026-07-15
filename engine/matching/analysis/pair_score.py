from dataclasses import dataclass


@dataclass
class PairScore:

    image1: str

    image2: str

    feature_matches: int

    essential_inliers: int

    score: float