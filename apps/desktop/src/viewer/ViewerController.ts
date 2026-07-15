import ViewportStore from "../store/ViewportStore";

class ViewerController {

    fitToScreen(

        imageWidth: number,

        imageHeight: number,

        canvasWidth: number,

        canvasHeight: number

    ) {

        ViewportStore.fitToScreen(

            imageWidth,

            imageHeight,

            canvasWidth,

            canvasHeight

        );

    }

    resetView() {

        ViewportStore.reset();

    }

}

export default new ViewerController();