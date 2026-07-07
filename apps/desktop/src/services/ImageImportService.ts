import type { ImageFile } from "../types/Image";

import ImageStore from "../store/ImageStore";
import ProjectStore from "../store/ProjectStore";
import ThumbnailStore from "../store/ThumbnailStore";

import FileDialogService from "./FileDialogService";
import ExifService from "./ExifService";
import ThumbnailService from "./ThumbnailService";

class ImageImportService {

    async importImages() {

        const files = await FileDialogService.pickImages();

        if (files.length === 0) {

            return;

        }

        const images: ImageFile[] = [];

        for (const file of files) {

            const metadata = await ExifService.read(file);

            images.push({

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

            });

        }

        ImageStore.clear();

        ImageStore.addImages(images);

        ThumbnailStore.clear();

        for (const image of images) {

            await ThumbnailService.generate(image);

        }

        console.log("Generated Thumbnails:");

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