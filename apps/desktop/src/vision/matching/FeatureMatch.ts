export interface FeatureMatch {

    id: string;

    sourceImageId: string;

    targetImageId: string;

    sourceFeatureId: string;

    targetFeatureId: string;

    distance: number;

    confidence: number;

}