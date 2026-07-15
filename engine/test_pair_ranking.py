from matching.analysis.pair_score import PairScore
from matching.analysis.pair_ranking import PairRanking

ranking = PairRanking()

pairs = [

    PairScore(
        "DJI_0001.jpg",
        "DJI_0005.jpg",
        2826,
        2513,
        88.92
    ),

    PairScore(
        "DJI_0003.jpg",
        "DJI_0006.jpg",
        3100,
        2950,
        95.16
    ),

    PairScore(
        "DJI_0002.jpg",
        "DJI_0004.jpg",
        2600,
        2250,
        86.54
    )

]

ranked = ranking.rank(pairs)

print("=" * 50)
print("AerialMapper Pair Ranking")
print("=" * 50)

for i, pair in enumerate(ranked, start=1):

    print(

        f"{i}.",

        pair.image1,

        "<->",

        pair.image2,

        f"Score: {pair.score:.2f}"

    )

print()

best = ranking.best_pair(pairs)

print("Selected Initial Pair")

print(best.image1)

print(best.image2)