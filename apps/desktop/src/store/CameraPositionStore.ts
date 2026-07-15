import type { CameraPosition } from "../types/CameraPosition";

type Listener = (

    cameras: CameraPosition[]

) => void;

class CameraPositionStore {

    private cameras: CameraPosition[] = [];

    private listeners: Listener[] = [];

    getCameras() {

        return this.cameras;

    }

    setCameras(

        cameras: CameraPosition[]

    ) {

        this.cameras = cameras;

        this.notify();

    }

    subscribe(

        listener: Listener

    ) {

        this.listeners.push(listener);

    }

    unsubscribe(

        listener: Listener

    ) {

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

export default new CameraPositionStore();