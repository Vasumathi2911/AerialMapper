export interface CameraCalibration {

    id: string;

    cameraModelId: string;

    lensId: string;

    focalLengthPx: number;

    principalPointX: number;

    principalPointY: number;

    radialK1: number;

    radialK2: number;

    radialK3: number;

    tangentialP1: number;

    tangentialP2: number;

    calibratedAt: Date;

}