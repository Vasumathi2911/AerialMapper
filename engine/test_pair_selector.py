from reconstruction.pair_selector import PairSelector

selector = PairSelector()

result = selector.evaluate(

    image1="DJI_0005.jpg",

    image2="DJI_0006.jpg",

    matches=4010,

    inliers=3855,

    average_parallax=3.64,

    median_parallax=0.00

)

print("=" * 60)
print("AerialMapper Pair Selector")
print("=" * 60)

print(result)