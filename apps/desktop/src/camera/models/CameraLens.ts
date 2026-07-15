export interface CameraLens {

    id: string;

    manufacturer: string;

    model: string;

    focalLength: number;

    minimumAperture: number;

    maximumAperture: number;

    isPrime: boolean;

    createdAt: Date;

    updatedAt: Date;

}