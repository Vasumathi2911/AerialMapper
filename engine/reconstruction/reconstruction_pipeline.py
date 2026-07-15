from matching.pipeline.pair_processor import PairProcessor
from reconstruction.camera_pose_manager import CameraPoseManager


class ReconstructionPipeline:

    def __init__(self):

        self.processor = PairProcessor()

        self.pose_manager = CameraPoseManager()

    def reconstruct_pair(

        self,

        image1,

        image2

    ):

        print("=" * 60)
        print("AerialMapper Reconstruction Pipeline")
        print("=" * 60)

        result = self.processor.process(

            image1,

            image2

        )

        print()

        print("Pair Processing Complete")

        print(f"Image 1 : {result.image1}")
        print(f"Image 2 : {result.image2}")
        print(f"Matches : {result.feature_matches}")
        print(f"Inliers : {result.essential_inliers}")
        print(f"Score   : {result.score:.2f}%")

        print()

        print("Ready for Camera Pose Recovery")

        return result