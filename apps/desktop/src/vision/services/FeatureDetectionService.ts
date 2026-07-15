import type { ImageFile } from "../../types/Image";

import type {

    FeatureDetectionResult,

    FeatureDetector

} from "../detectors/FeatureDetector";

import MockFeatureDetector from "../detectors/MockFeatureDetector";

class FeatureDetectionService {

    private detector: FeatureDetector = new MockFeatureDetector();

    setDetector(

        detector: FeatureDetector

    ): void {

        this.detector = detector;

    }

    async detectFeatures(

        image: ImageFile

    ): Promise<FeatureDetectionResult> {

        return this.detector.detect(image);

    }

}

export default new FeatureDetectionService();