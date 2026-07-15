import ViewportStore from "../store/ViewportStore";

class InteractionController {

    zoomIn() {

        ViewportStore.zoomIn();

    }

    zoomOut() {

        ViewportStore.zoomOut();

    }

    pan(dx: number, dy: number) {

        ViewportStore.pan(dx, dy);

    }

    reset() {

        ViewportStore.reset();

    }

}

export default new InteractionController();