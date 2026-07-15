from dataclasses import dataclass


@dataclass
class PairEvaluation:

    image1: str
    image2: str

    matches: int
    inliers: int

    average_parallax: float
    median_parallax: float

    score: float


class PairSelector:

    def evaluate(

        self,

        image1,

        image2,

        matches,

        inliers,

        average_parallax,

        median_parallax

    ):

        match_score = min(matches / 4000.0, 1.0)

        inlier_score = inliers / matches if matches else 0

        parallax_score = min(average_parallax / 30.0, 1.0)

        final_score = (

            match_score * 0.35 +

            inlier_score * 0.35 +

            parallax_score * 0.30

        ) * 100

        return PairEvaluation(

            image1=image1,

            image2=image2,

            matches=matches,

            inliers=inliers,

            average_parallax=average_parallax,

            median_parallax=median_parallax,

            score=final_score

        )