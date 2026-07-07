import type { Camera } from "../types/Camera";

type CameraListener = (cameras: Camera[]) => void;

class CameraStore {

    private cameras: Camera[] = [];

    private listeners: CameraListener[] = [];

    getCameras() {

        return this.cameras;

    }

    addCamera(camera: Camera) {

        this.cameras.push(camera);

        this.notify();

    }

    clear() {

        this.cameras = [];

        this.notify();

    }

    subscribe(listener: CameraListener) {

        this.listeners.push(listener);

    }

    unsubscribe(listener: CameraListener) {

        this.listeners = this.listeners.filter(

            l => l !== listener

        );

    }

    private notify() {

        this.listeners.forEach(

            listener => listener(this.cameras)

        );

    }

}

export default new CameraStore();