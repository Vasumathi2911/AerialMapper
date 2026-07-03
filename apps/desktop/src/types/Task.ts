export type TaskStatus =
    | "Queued"
    | "Running"
    | "Paused"
    | "Completed"
    | "Cancelled"
    | "Failed";

export interface Task {

    id: string;

    name: string;

    type: string;

    status: TaskStatus;

    progress: number;

    currentStep: string;

    createdAt: Date;

}