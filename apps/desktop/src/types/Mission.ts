import type { MissionDataset } from "./MissionDataset";

export interface Mission {

    id: string;

    name: string;

    description: string;

    createdAt: Date;

    modifiedAt: Date;

    datasets: MissionDataset[];

}