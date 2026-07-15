import json
import numpy as np


class CameraCalibration:
    """
    Loads camera intrinsics exported by the AerialMapper desktop application.
    """

    def load(self, path: str):

        with open(path, "r", encoding="utf-8") as file:

            data = json.load(file)

        return data

    def camera_matrix(self, intrinsics):

        return np.array(

            [

                [intrinsics["fx"], intrinsics["skew"], intrinsics["cx"]],

                [0.0, intrinsics["fy"], intrinsics["cy"]],

                [0.0, 0.0, 1.0]

            ],

            dtype=np.float64

        )