from matching.analysis.pair_analyzer import PairAnalyzer
from matching.analysis.pair_ranking import PairRanking
from matching.pipeline.pair_processor import PairProcessor


class SfMFrontend:

    def __init__(self):

        self.analyzer = PairAnalyzer()

        self.processor = PairProcessor()

        self.ranking = PairRanking()

    def analyze_dataset(self, folder):

        pairs = self.analyzer.generate_pairs(folder)

        print("=" * 60)
        print("AerialMapper SfM Front-End")
        print("=" * 60)

        print(f"Image Pairs : {len(pairs)}")

        print()

        results = []

        for image1, image2 in pairs:

            result = self.processor.process(
                image1,
                image2
            )

            results.append(result)

            print(
                f"{result.image1} <-> {result.image2}"
                f" Score: {result.score:.2f}%"
            )

        return results