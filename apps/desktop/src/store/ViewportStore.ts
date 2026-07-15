import type { Viewport } from "../types/Viewport";

type ViewportListener = (

    viewport: Viewport

) => void;

class ViewportStore {

    private viewport: Viewport = {

        zoom: 100,

        offsetX: 0,

        offsetY: 0,

        rotation: 0,

        minZoom: 10,

        maxZoom: 1000

    };

    private listeners: ViewportListener[] = [];

    getViewport() {

        return this.viewport;

    }

    setViewport(

        viewport: Viewport

    ) {

        this.viewport = viewport;

        this.notify();

    }

    setZoom(

        zoom: number

    ) {

        this.viewport = {

            ...this.viewport,

            zoom: Math.round(

                Math.min(

                    this.viewport.maxZoom,

                    Math.max(

                        this.viewport.minZoom,

                        zoom

                    )

                )

            )

        };

        this.notify();

    }

    zoomIn() {

        this.setZoom(

            this.viewport.zoom * 1.05

        );

    }

    zoomOut() {

        this.setZoom(

            this.viewport.zoom / 1.05

        );

    }

    reset() {

        this.viewport = {

            ...this.viewport,

            zoom: 100,

            offsetX: 0,

            offsetY: 0,

            rotation: 0

        };

        this.notify();

    }

    fitToScreen(

        imageWidth: number,

        imageHeight: number,

        canvasWidth: number,

        canvasHeight: number

    ) {

        const scaleX =

            canvasWidth / imageWidth;

        const scaleY =

            canvasHeight / imageHeight;

        const zoom =

            Math.min(scaleX, scaleY) * 100;

        this.setZoom(zoom);

        this.viewport = {

            ...this.viewport,

            offsetX: 0,

            offsetY: 0

        };

        this.notify();

    }

    pan(

        dx: number,

        dy: number

    ) {

        this.viewport = {

            ...this.viewport,

            offsetX: this.viewport.offsetX + dx,

            offsetY: this.viewport.offsetY + dy

        };

        this.notify();

    }

    subscribe(

        listener: ViewportListener

    ) {

        this.listeners.push(listener);

    }

    unsubscribe(

        listener: ViewportListener

    ) {

        this.listeners = this.listeners.filter(

            l => l !== listener

        );

    }

    private notify() {

        this.listeners.forEach(

            listener => listener(this.viewport)

        );

    }

}

export default new ViewportStore();