from matching.analysis.sfm_frontend import SfMFrontend

frontend = SfMFrontend()

results = frontend.analyze_dataset(
    "datasets/validation/images"
)

print()

best = max(
    results,
    key=lambda r: r.score
)

print("=" * 60)
print("Best Initial Pair")
print("=" * 60)

print(f"Image 1 : {best.image1}")
print(f"Image 2 : {best.image2}")
print(f"Matches : {best.feature_matches}")
print(f"Essential Inliers : {best.essential_inliers}")
print(f"Score : {best.score:.2f}%")