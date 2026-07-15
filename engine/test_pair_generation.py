from matching.analysis.pair_analyzer import PairAnalyzer

analyzer = PairAnalyzer()

pairs = analyzer.generate_pairs(
    "datasets/validation/images"
)

print("Total Pairs:", len(pairs))

print()

for pair in pairs[:10]:

    print(

        pair[0].name,

        "<->",

        pair[1].name

    )