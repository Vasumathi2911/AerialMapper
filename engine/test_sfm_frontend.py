from matching.analysis.sfm_frontend import SfMFrontend

frontend = SfMFrontend()

pairs = frontend.analyze_dataset(
    "datasets/validation/images"
)

for pair in pairs[:10]:

    print(

        pair[0].name,

        "<->",

        pair[1].name

    )