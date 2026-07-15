import ImageStore from "../../store/ImageStore";

import FeatureDetectionService from "../services/FeatureDetectionService";
import FeatureStore from "../store/FeatureStore";

class VisionController {

    async analyzeMission(): Promise<void> {

        const images = ImageStore.getImages();

        FeatureStore.clear();

        for (const image of images) {

            const result = await FeatureDetectionService.detectFeatures(image);

            FeatureStore.addFeatures(

                result.featurePoints,

                result.featureDescriptors

            );

        }

    }

}

export default new VisionController();