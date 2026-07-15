export interface ImageMetadata {

    imageId: string;

    width: number;

    height: number;

    orientation: number;

    colorSpace: string;

    bitDepth: number;

    format: string;

    hasGps: boolean;

    hasExif: boolean;

    captureTime?: string;

}