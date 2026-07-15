from matching.analysis.pair_analyzer import PairAnalyzer

analyzer = PairAnalyzer()

pair = analyzer.compute_score(

    "DJI_0001.jpg",

    "DJI_0005.jpg",

    2826,

    2513

)

print(pair)