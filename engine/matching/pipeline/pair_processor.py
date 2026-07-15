import cv2

from vision.feature_detection import ORBFeatureDetector
from matching.matcher import BFMatcherEngine
from reconstruction.essential_matrix import EssentialMatrixEstimator
from calibration.camera import CameraCalibration
from matching.analysis.pair_score import PairScore

class PairProcessor:

    def __init__(self):

        self.detector = ORBFeatureDetector()

        self.matcher = BFMatcherEngine()

        self.essential = EssentialMatrixEstimator()

        calibration = CameraCalibration()

        intrinsics = calibration.load("camera.json")

        self.camera_matrix = calibration.camera_matrix(
            intrinsics
        )

    def process(

        self,

        image1,

        image2

    ):

        result1 = self.detector.detect(str(image1))

        result2 = self.detector.detect(str(image2))

        matches = self.matcher.match(
            result1["descriptors"],
            result2["descriptors"]
        )

        E, mask = self.essential.estimate(
            result1["keypoints"],
            result2["keypoints"],
            matches,
            self.camera_matrix
        )

        if mask is None:
            inliers = 0
        else:
            inliers = int(mask.sum())

        score = (
            (inliers / len(matches)) * 100
            if len(matches) > 0 else 0
        )

        return PairScore(

            image1=image1.name,

            image2=image2.name,

            feature_matches=len(matches),

            essential_inliers=inliers,

            score=score

        )