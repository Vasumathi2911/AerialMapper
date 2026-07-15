import "./ImageViewer.css";

import { useRef } from "react";

import InteractionController from "./InteractionController";

import type { Viewport } from "../types/Viewport";

import type { ImageFile } from "../types/Image";

import type { WheelEvent } from "react";

interface ImageCanvasProps {

    image: ImageFile | null;

    viewport: Viewport;

}

export default function ImageCanvas({

    image,

    viewport

}: ImageCanvasProps) {

    const canvasRef = useRef<HTMLDivElement>(null);

    const isDragging = useRef(false);

    const lastMouse = useRef({

        x: 0,

        y: 0

    });

    if (!image) {

        return (

            <div

                className="image-canvas"

                onWheel={handleWheel}

            >

                <p>No image selected.</p>

            </div>

        );

    }

    function handleWheel(
        event: WheelEvent<HTMLDivElement>
    ) {

        event.preventDefault();

        console.log("Wheel Event:", event.deltaY);

        if (event.deltaY < 0) {

            console.log("Zoom In");

            InteractionController.zoomIn();

        } else {

            console.log("Zoom Out");

            InteractionController.zoomOut();

        }

    }

    function handleMouseDown(
        event: React.MouseEvent<HTMLDivElement>
    ) {

        isDragging.current = true;

        lastMouse.current = {

            x: event.clientX,

            y: event.clientY

        };

    }

    function handleMouseMove(
        event: React.MouseEvent<HTMLDivElement>
    ) {

        if (!isDragging.current) {

            return;

        }

        const dx = event.clientX - lastMouse.current.x;

        const dy = event.clientY - lastMouse.current.y;

        InteractionController.pan(dx, dy);

        lastMouse.current = {

            x: event.clientX,

            y: event.clientY

        };

    }

    function handleMouseUp() {

        isDragging.current = false;

    } 

    return (

        <div

            ref={canvasRef}

            className="image-canvas"

            onWheel={handleWheel}

            onMouseDown={handleMouseDown}

            onMouseMove={handleMouseMove}

            onMouseUp={handleMouseUp}

            onMouseLeave={handleMouseUp}

        >

            <img

                src={image.path}

                alt={image.name}

                className="viewer-image"

                style={{

                    transform: `

                        translate(${viewport.offsetX}px,

                                  ${viewport.offsetY}px)

                        scale(${viewport.zoom / 100})

                    `

                }}

            />

        </div>

    );

}