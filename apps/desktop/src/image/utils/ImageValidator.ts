import type { ImageFile } from "../../types/Image";

class ImageValidator {

    isValid(image: ImageFile): boolean {

        if (!image.file) {

            return false;

        }

        if (image.width === undefined || image.height === undefined) {

            return false;

        }

        if (image.width <= 0 || image.height <= 0) {

            return false;

        }

        return true;

    }

}

export default new ImageValidator();