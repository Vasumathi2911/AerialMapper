import ImageStore from "../store/ImageStore";

import CameraPositionStore from "../store/CameraPositionStore";

class SurveyController {

    buildCameraPositions() {

        const cameras = ImageStore

            .getImages()

            .filter(

                image =>

                    image.latitude !== null &&

                    image.longitude !== null

            )

            .map(image => ({

                id: crypto.randomUUID(),

                imageId: image.id,

                latitude: image.latitude!,

                longitude: image.longitude!,

                altitude: image.altitude ?? 0,

                heading: image.heading

            }));

        CameraPositionStore.setCameras(cameras);

    }

    getMissionStatistics() {

        const cameras = CameraPositionStore.getCameras();

        if (cameras.length === 0) {

            return {

                imageCount: 0,

                gpsCount: 0,

                averageAltitude: 0,

                minAltitude: 0,

                maxAltitude: 0,

                centerLatitude: 0,

                centerLongitude: 0

            };

        }

        const altitudes = cameras.map(

            camera => camera.altitude

        );

        const averageAltitude =

            altitudes.reduce(

                (sum, altitude) => sum + altitude,

                0

            ) / altitudes.length;

        const centerLatitude =

            cameras.reduce(

                (sum, camera) => sum + camera.latitude,

                0

            ) / cameras.length;

        const centerLongitude =

            cameras.reduce(

                (sum, camera) => sum + camera.longitude,

                0

            ) / cameras.length;

        return {

            imageCount: ImageStore.getImages().length,

            gpsCount: cameras.length,

            averageAltitude,

            minAltitude: Math.min(...altitudes),

            maxAltitude: Math.max(...altitudes),

            centerLatitude,

            centerLongitude

        };

    }

}

export default new SurveyController();