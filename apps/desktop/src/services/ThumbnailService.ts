import type { ImageFile } from "../types/Image";

import ThumbnailStore from "../store/ThumbnailStore";

class ThumbnailService {

    async generate(image: ImageFile) {

        ThumbnailStore.addThumbnail({

            imageId: image.id,

            url: image.path,

            width: 120,

            height: 80

        });

    }

}

export default new ThumbnailService();