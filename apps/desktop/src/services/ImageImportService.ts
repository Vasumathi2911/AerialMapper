import CameraService from "../camera/services/CameraService";
import CameraEngineStore from "../camera/store/CameraEngineStore";
import type { CameraModel } from "../camera/models/CameraModel";
import type { ImageFile } from "../types/Image";

import ImageStore from "../store/ImageStore";
import ProjectStore from "../store/ProjectStore";
import ThumbnailStore from "../store/ThumbnailStore";

import FileDialogService from "./FileDialogService";
import ExifService from "./ExifService";
import ThumbnailService from "./ThumbnailService";
import SurveyController from "../survey/SurveyController";
import ImageValidator from "../image/utils/ImageValidator";

class ImageImportService {

    async importImages() {

        const files = await FileDialogService.pickImages();

        if (files.length === 0) {

            return;

        }

        const images: ImageFile[] = [];

        for (const file of files) {

            const metadata = await ExifService.read(file);
            const cameraModelName = metadata?.Model ?? "Unknown Camera";
            const manufacturer = metadata?.Make ?? "Unknown Manufacturer";

            let camera = CameraService.getCameraByModel(cameraModelName);

            if (!camera) {

                camera = {

                    id: crypto.randomUUID(),

                    manufacturer,

                    model: cameraModelName,

                    sensorWidth: 0,

                    sensorHeight: 0,

                    imageWidth: metadata?.ExifImageWidth ?? 0,

                    imageHeight: metadata?.ExifImageHeight ?? 0,

                    focalLength: Number(metadata?.FocalLength) || 0,

                    createdAt: new Date(),

                    updatedAt: new Date()

                } satisfies CameraModel;

                CameraService.registerCamera(camera);

                CameraEngineStore.addCamera(camera);

            }

            const image: ImageFile = {

                id: crypto.randomUUID(),

                file,

                name: file.name,

                path: URL.createObjectURL(file),

                extension: file.name.split(".").pop() ?? "",

                size: file.size,

                importedAt: new Date(),

                width: metadata?.ExifImageWidth,

                height: metadata?.ExifImageHeight,

                cameraMake: metadata?.Make,

                cameraModel: metadata?.Model,

                latitude: metadata?.latitude ?? null,

                longitude: metadata?.longitude ?? null,

                altitude: metadata?.GPSAltitude ?? null,

                heading: metadata?.GPSImgDirection,

                focalLength: metadata?.FocalLength,

                captureTime: metadata?.DateTimeOriginal

            };

            if (!ImageValidator.isValid(image)) {

                console.warn(

        `           Skipping invalid image: ${image.name}`

                );

                continue;

            }

            images.push(image);

        }

        ImageStore.clear();

        ThumbnailStore.clear();

        ImageStore.addImages(images);

        SurveyController.buildCameraPositions();

        for (const image of images) {

            await ThumbnailService.generate(image);

        }

        console.log(ThumbnailStore.getThumbnails());

        const project = ProjectStore.getProject();

        if (project) {

            ProjectStore.setProject({

                ...project,

                imageCount: images.length,

                modifiedAt: new Date()

            });

        }

        console.log(images);

    }

}

export default new ImageImportService();