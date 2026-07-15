from vision.feature_detection import ORBFeatureDetector


class ProcessingPipeline:
    """
    Executes processing pipelines inside the AerialMapper Engine.
    """

    def __init__(self):

        self.orb_detector = ORBFeatureDetector()

    def execute(self, pipeline: str, **kwargs):

        if pipeline == "vision.orb":

            image_path = kwargs["image_path"]

            return self.orb_detector.detect(image_path)

        raise ValueError(

            f"Unknown pipeline: {pipeline}"

        )