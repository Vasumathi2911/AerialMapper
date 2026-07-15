from reconstruction.initial_pair import InitialPairSelector

selector = InitialPairSelector()

pairs = [

    {

        "image1": "sample1.jpg",

        "image2": "sample2.jpg",

        "verified": 3713

    }

]

best = selector.select(pairs)

print(best)