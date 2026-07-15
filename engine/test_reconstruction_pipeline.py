from pathlib import Path

from reconstruction.reconstruction_pipeline import ReconstructionPipeline

folder = Path("datasets/validation/images")

images = sorted(folder.glob("*.jpg"))

pipeline = ReconstructionPipeline()

pipeline.reconstruct_pair(

    images[4],   # DJI_0005

    images[5]    # DJI_0006

)