from dataclasses import dataclass


@dataclass
class ReconstructionState:

    image1: str
    image2: str

    keypoints1: list
    keypoints2: list

    matches: list

    essential_matrix: object
    essential_mask: object

    camera_matrix: object

    pair_score: float
    inliers: int