from reconstruction.camera_pose import CameraPoseEstimator

class CameraPoseManager:

    def __init__(self):

        self.pose = CameraPoseEstimator()

    def recover_pose(

        self,

        essential_matrix,

        keypoints1,

        keypoints2,

        matches,

        camera_matrix,

        mask

    ):

        print("=" * 60)
        print("Camera Pose Recovery")
        print("=" * 60)

        result = self.pose.recover(

            essential_matrix,

            keypoints1,

            keypoints2,

            matches,

            camera_matrix,

            mask

        )

        print(
            f"Recovered Inliers : {result['inliers']}"
        )

        return result