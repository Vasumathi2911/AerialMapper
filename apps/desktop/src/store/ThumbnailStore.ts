import type { Thumbnail } from "../types/Thumbnail";

type ThumbnailListener = (

    thumbnails: Thumbnail[]

) => void;

class ThumbnailStore {

    private thumbnails: Thumbnail[] = [];

    private listeners: ThumbnailListener[] = [];

    getThumbnails() {

        return this.thumbnails;

    }

    addThumbnail(thumbnail: Thumbnail) {

        this.thumbnails.push(thumbnail);

        this.notify();

    }

    clear() {

        this.thumbnails = [];

        this.notify();

    }

    subscribe(listener: ThumbnailListener) {

        this.listeners.push(listener);

    }

    unsubscribe(listener: ThumbnailListener) {

        this.listeners = this.listeners.filter(

            l => l !== listener

        );

    }

    private notify() {

        this.listeners.forEach(

            listener => listener(this.thumbnails)

        );

    }

}

export default new ThumbnailStore();