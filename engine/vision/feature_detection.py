import cv2
import numpy as np

from .image_loader import ImageLoader


class ORBFeatureDetector:
    """
    ORB Feature Detection for AerialMapper.
    """

    def __init__(self, max_features: int = 5000):

        self.detector = cv2.ORB_create(

            nfeatures=max_features

        )

        self.loader = ImageLoader()

    def detect(self, image_path: str):

        image = self.loader.load(image_path)

        gray = cv2.cvtColor(

            image,

            cv2.COLOR_BGR2GRAY

        )

        keypoints, descriptors = self.detector.detectAndCompute(

            gray,

            None

        )

        return {

            "image": image,

            "keypoints": keypoints,

            "descriptors": descriptors

        }