export interface CameraIntrinsics {

    id: string;

    calibrationId: string;

    fx: number;

    fy: number;

    cx: number;

    cy: number;

    skew: number;

    imageWidth: number;

    imageHeight: number;

}