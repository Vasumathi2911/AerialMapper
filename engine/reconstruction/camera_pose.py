import cv2
import numpy as np


class CameraPoseEstimator:
    """
    Estimates the relative camera pose from an Essential Matrix.
    """

    def recover(
        self,
        essential_matrix,
        keypoints1,
        keypoints2,
        matches,
        camera_matrix,
        mask
    ):

        if essential_matrix is None:
            return {
                "inliers": 0,
                "rotation": None,
                "translation": None,
                "mask": None
            }

        points1 = []
        points2 = []

        for i, match in enumerate(matches):

            if mask[i] == 0:
                continue

            points1.append(
                keypoints1[match.queryIdx].pt
            )

            points2.append(
                keypoints2[match.trainIdx].pt
            )

        points1 = np.float32(points1)
        points2 = np.float32(points2)

        retval, rotation, translation, pose_mask = cv2.recoverPose(
            essential_matrix,
            points1,
            points2,
            camera_matrix,
        )

        print("========== recoverPose Debug ==========")
        print("retval:", retval)
        print("pose_mask shape:", pose_mask.shape)
        print("pose_mask sum:", int(pose_mask.sum()))
        print("=======================================")

        return {
            "inliers": retval,
            "rotation": rotation,
            "translation": translation,
            "mask": pose_mask
        }