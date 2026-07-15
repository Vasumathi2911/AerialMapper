import "./ImageViewer.css";

import { useEffect, useState } from "react";

import SelectionStore from "../store/SelectionStore";
import ImageStore from "../store/ImageStore";

import type { Selection } from "../types/Selection";
import type { ImageFile } from "../types/Image";

import ImageToolbar from "./ImageToolbar";
import ImageCanvas from "./ImageCanvas";
import ImageStatusBar from "./ImageStatusBar";
import ViewerController from "./ViewerController";
import SurveyMap from "../survey/SurveyMap";


import ViewportStore from "../store/ViewportStore";

import type { Viewport } from "../types/Viewport";

export default function ImageViewer() {

    const [selection, setSelection] = useState<Selection | null>(
        SelectionStore.getSelection()
    );

    const [viewport, setViewport] = useState<Viewport>(
        ViewportStore.getViewport()
    );

    useEffect(() => {

        function handleSelectionChanged(
            selection: Selection | null
        ) {

            setSelection(selection);

        }

        SelectionStore.subscribe(handleSelectionChanged);

        return () => {

            SelectionStore.unsubscribe(handleSelectionChanged);

        };

    }, []);

    useEffect(() => {

        function handleViewportChanged(
            viewport: Viewport
        ) {

            setViewport(viewport);

        }

        ViewportStore.subscribe(
            handleViewportChanged
        );

        return () => {

            ViewportStore.unsubscribe(
                handleViewportChanged
            );

        };

    }, []);

    const image: ImageFile | null =

        selection?.type === "image"

            ? ImageStore
                .getImages()
                .find(img => img.id === selection.id) ?? null

            : null;

    return (

        <div className="image-viewer">

            <ImageToolbar

                name={image?.name ?? "No Image"}

                width={image?.width ?? 0}

                height={image?.height ?? 0}

                camera={
                    image?.cameraModel ??
                    image?.cameraMake ??
                    "-"
                }

                zoom={viewport.zoom}

                onReset={() => {

                    ViewerController.resetView();

                }}

            />

            <ImageCanvas

                image={image}

                viewport={viewport}

            />

            <SurveyMap />

            <ImageStatusBar />

        </div>

    );

}