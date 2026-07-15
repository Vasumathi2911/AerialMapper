import type { ImageFile } from "../../types/Image";

import type {

    FeatureDetector,

    FeatureDetectionResult

} from "./FeatureDetector";

export default class MockFeatureDetector implements FeatureDetector {

    async detect(

        image: ImageFile

    ): Promise<FeatureDetectionResult> {

        const featurePointId = crypto.randomUUID();

        return {

            featurePoints: [

                {

                    id: featurePointId,

                    imageId: image.id,

                    x: 100,

                    y: 150,

                    scale: 1.2,

                    orientation: 45,

                    response: 0.95

                }

            ],

            featureDescriptors: [

                {

                    id: crypto.randomUUID(),

                    featurePointId,

                    algorithm: "Mock",

                    values: [1, 2, 3, 4, 5]

                }

            ]

        };

    }

}