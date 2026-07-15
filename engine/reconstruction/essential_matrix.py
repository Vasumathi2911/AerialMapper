import cv2
import numpy as np


class EssentialMatrixEstimator:
    """
    Estimates the Essential Matrix between two images.
    """

    def estimate(

        self,

        keypoints1,

        keypoints2,

        matches,

        camera_matrix

    ):

        if len(matches) < 8:

            return None, None

        points1 = np.float32(

            [

                keypoints1[m.queryIdx].pt

                for m in matches

            ]

        )

        points2 = np.float32(

            [

                keypoints2[m.trainIdx].pt

                for m in matches

            ]

        )

        E, mask = cv2.findEssentialMat(

            points1,

            points2,

            camera_matrix,

            method=cv2.RANSAC,

            prob=0.999,

            threshold=1.0

        )

        return E, mask