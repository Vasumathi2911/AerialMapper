from pathlib import Path

from matching.pipeline.pair_processor import PairProcessor

processor = PairProcessor()

folder = Path("datasets/validation/images")

images = sorted(folder.glob("*.jpg"))

result = processor.process(

    images[0],

    images[4]

)

print("=" * 60)
print("Pair Processing Report")
print("=" * 60)

print("Image 1 :", result["image1"])
print("Image 2 :", result["image2"])
print("Matches :", result["matches"])
print("Essential Inliers :", result["essential_inliers"])
print("Pair Score :", f"{result['score']:.2f}%")