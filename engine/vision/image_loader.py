from pathlib import Path

import cv2
import numpy as np


class ImageLoader:
    """
    Loads images for the AerialMapper Engine.
    """

    def load(self, image_path: str) -> np.ndarray:

        image = cv2.imread(str(Path(image_path)))

        if image is None:

            raise FileNotFoundError(

                f"Unable to load image: {image_path}"

            )

        return image