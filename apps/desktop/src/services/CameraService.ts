import CameraStore from "../store/CameraStore";

class CameraService {

    createDummyCamera(imageCount: number) {

        CameraStore.clear();

        CameraStore.addCamera({

            id: crypto.randomUUID(),

            manufacturer: "DJI",

            model: "FC6310",

            sensorWidth: 13.2,

            sensorHeight: 8.8,

            focalLength: 8.8,

            imageWidth: 5472,

            imageHeight: 3648,

            imageCount

        });

    }

}

export default new CameraService();