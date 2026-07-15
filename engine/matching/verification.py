import cv2
import numpy as np


class GeometricVerification:
    """
    Removes incorrect feature matches using RANSAC.
    """

    def verify(

        self,

        keypoints1,

        keypoints2,

        matches

    ):

        if len(matches) < 8:

            return []

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

        _, mask = cv2.findFundamentalMat(

            points1,

            points2,

            cv2.FM_RANSAC,

            3.0,

            0.99

        )

        if mask is None:

            return []

        inliers = [

            match

            for match, keep

            in zip(matches, mask.ravel())

            if keep

        ]

        return inliers