from matching.analysis.pair_score import PairScore


class PairRanking:

    def rank(self, pair_scores: list[PairScore]):

        return sorted(

            pair_scores,

            key=lambda pair: pair.score,

            reverse=True

        )

    def best_pair(self, pair_scores: list[PairScore]):

        ranked = self.rank(pair_scores)

        return ranked[0] if ranked else None