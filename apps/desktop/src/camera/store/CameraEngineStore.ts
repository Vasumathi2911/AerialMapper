import type { CameraModel } from "../models/CameraModel";

type Listener = (cameras: CameraModel[]) => void;

class CameraEngineStore {

    private cameras: CameraModel[] = [];

    private listeners: Listener[] = [];

    getCameras(): CameraModel[] {

        return this.cameras;

    }

    setCameras(cameras: CameraModel[]): void {

        this.cameras = cameras;

        this.notify();

    }

    addCamera(camera: CameraModel): void {

        this.cameras.push(camera);

        this.notify();

    }

    clear(): void {

        this.cameras = [];

        this.notify();

    }

    subscribe(listener: Listener): void {

        this.listeners.push(listener);

    }

    unsubscribe(listener: Listener): void {

        this.listeners = this.listeners.filter(

            l => l !== listener

        );

    }

    private notify(): void {

        this.listeners.forEach(

            listener => listener(this.cameras)

        );

    }

}

export default new CameraEngineStore();