export type ProcessingStatus =

    | "pending"
    | "running"
    | "completed"
    | "failed"
    | "cancelled";

export interface ProcessingJob {

    id: string;

    name: string;

    engine: string;

    status: ProcessingStatus;

    progress: number;

    startedAt?: Date;

    completedAt?: Date;

}