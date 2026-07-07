export type SelectionType =
    | "project"
    | "image"
    | "camera"
    | "chunk";

export interface Selection {

    type: SelectionType;

    id: string;

    name?: string;

}