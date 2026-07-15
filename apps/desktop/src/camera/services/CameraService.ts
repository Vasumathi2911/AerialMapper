import type { CameraModel } from "../models/CameraModel";

import CameraDatabase from "./CameraDatabase";

class CameraService {

    registerCamera(camera: CameraModel): void {

        CameraDatabase.addCamera(camera);

    }

    getCameraByModel(model: string): CameraModel | undefined {

        return CameraDatabase.findByModel(model);

    }

    getAllCameras(): CameraModel[] {

        return CameraDatabase.getAll();

    }

    clearDatabase(): void {

        CameraDatabase.clear();

    }

}

export default new CameraService();