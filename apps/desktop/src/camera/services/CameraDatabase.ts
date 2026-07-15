import type { CameraModel } from "../models/CameraModel";

class CameraDatabase {

    private cameras: CameraModel[] = [];

    addCamera(camera: CameraModel): void {

        this.cameras.push(camera);

    }

    getAll(): CameraModel[] {

        return this.cameras;

    }

    findByModel(model: string): CameraModel | undefined {

        return this.cameras.find(

            camera =>

                camera.model.toLowerCase() ===

                model.toLowerCase()

        );

    }

    clear(): void {

        this.cameras = [];

    }

}

export default new CameraDatabase();