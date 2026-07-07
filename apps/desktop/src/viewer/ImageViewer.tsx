import { useEffect, useState } from "react";

import "./ImageViewer.css";

import SelectionStore from "../store/SelectionStore";
import ImageStore from "../store/ImageStore";

import type { Selection } from "../types/Selection";
import type { ImageFile } from "../types/Image";

export default function ImageViewer() {

    const [selection, setSelection] = useState<Selection | null>(

        SelectionStore.getSelection()

    );

    useEffect(() => {

        function handleSelectionChanged(

            selection: Selection | null

        ) {

            setSelection(selection);

        }

        SelectionStore.subscribe(

            handleSelectionChanged

        );

        return () => {

            SelectionStore.unsubscribe(

                handleSelectionChanged

            );

        };

    }, []);

    const image: ImageFile | null =

        selection?.type === "image"

            ? ImageStore

                .getImages()

                .find(

                    image => image.id === selection.id

                ) ?? null

            : null;

    if (!image) {

        return (

            <div className="image-viewer">

                <p>

                    No image selected.

                </p>

            </div>

        );

    }

    return (

        <div className="image-viewer">

            <img

                src={image.path}

                alt={image.name}

                className="viewer-image"

            />

        </div>

    );

}