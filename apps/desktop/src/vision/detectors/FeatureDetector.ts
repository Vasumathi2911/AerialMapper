import type { ImageFile } from "../../types/Image";
import type { FeaturePoint } from "../models/FeaturePoint";
import type { FeatureDescriptor } from "../models/FeatureDescriptor";

export interface FeatureDetectionResult {

    featurePoints: FeaturePoint[];

    featureDescriptors: FeatureDescriptor[];

}

export interface FeatureDetector {

    detect(

        image: ImageFile

    ): Promise<FeatureDetectionResult>;

}