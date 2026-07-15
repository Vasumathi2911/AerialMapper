import cv2
import numpy as np


class Triangulator:

    def triangulate(
        self,
        points1,
        points2,
        projection1,
        projection2
    ):

        points4d = cv2.triangulatePoints(
            projection1,
            projection2,
            points1.T,
            points2.T
        )

        points3d = (
            points4d[:3] /
            points4d[3]
        ).T

        return points3d