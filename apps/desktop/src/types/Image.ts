export interface ImageFile {

    id: string;

    file: File;

    name: string;

    path: string;

    extension: string;

    size: number;

    importedAt: Date;

    width?: number;

    height?: number;

    cameraMake?: string;

    cameraModel?: string;

    focalLength?: number;

    latitude?: number | null;

    longitude?: number | null;

    altitude?: number | null;

    heading?: number;

    captureTime?: Date;

}