from pathlib import Path
from itertools import combinations

from matching.analysis.pair_score import PairScore


class PairAnalyzer:

    def compute_score(
        self,
        image1,
        image2,
        matches,
        inliers
    ):

        score = 0 if matches == 0 else (inliers / matches) * 100

        return PairScore(
            image1=image1,
            image2=image2,
            feature_matches=matches,
            essential_inliers=inliers,
            score=score
        )

    def generate_pairs(self, folder):

        images = sorted(
            Path(folder).glob("*.jpg")
        )

        return list(
            combinations(images, 2)
        )