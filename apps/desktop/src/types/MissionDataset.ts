export type DatasetType =

    | "images"

    | "videos"

    | "gps"

    | "telemetry"

    | "gcp"

    | "outputs";

export interface MissionDataset {

    id: string;

    type: DatasetType;

    name: string;

    count: number;

    createdAt: Date;

    updatedAt: Date;

}