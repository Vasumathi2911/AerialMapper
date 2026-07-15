from vision.feature_detection import ORBFeatureDetector
from matching.matcher import BFMatcherEngine
from matching.verification import GeometricVerification
from matching.track_builder import TrackBuilder


class StructureFromMotionPipeline:
    """
    Executes the front-end of the SfM pipeline.
    """

    def __init__(self):

        self.detector = ORBFeatureDetector()

        self.matcher = BFMatcherEngine()

        self.verifier = GeometricVerification()

        self.track_builder = TrackBuilder()

    def process(

        self,

        image1: str,

        image2: str

    ):

        result1 = self.detector.detect(image1)

        result2 = self.detector.detect(image2)

        matches = self.matcher.match(

            result1["descriptors"],

            result2["descriptors"]

        )

        verified = self.verifier.verify(

            result1["keypoints"],

            result2["keypoints"],

            matches

        )

        tracks = self.track_builder.build(

            verified

        )

        return {

            "keypoints1": len(result1["keypoints"]),

            "keypoints2": len(result2["keypoints"]),

            "matches": len(matches),

            "verified": len(verified),

            "tracks": len(tracks)

        }