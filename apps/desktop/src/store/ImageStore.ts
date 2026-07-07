import type { ImageFile } from "../types/Image";

type ImageListener = (images: ImageFile[]) => void;

class ImageStore {

    private images: ImageFile[] = [];

    private listeners: ImageListener[] = [];

    getImages() {

        return this.images;

    }

    addImages(images: ImageFile[]) {

        this.images.push(...images);

        this.notify();

    }

    clear() {

        this.images = [];

        this.notify();

    }

    subscribe(listener: ImageListener) {

        this.listeners.push(listener);

    }

    unsubscribe(listener: ImageListener) {

        this.listeners = this.listeners.filter(

            l => l !== listener

        );

    }

    private notify() {

        this.listeners.forEach(

            listener => listener(this.images)

        );

    }

}

export default new ImageStore();