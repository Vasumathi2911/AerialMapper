import "./ImageViewer.css";

interface ImageToolbarProps {

    name: string;

    width: number;

    height: number;

    camera: string;

    zoom: number;

    onReset: () => void;

}

export default function ImageToolbar({

    name,

    width,

    height,

    camera,

    zoom,

    onReset

}: ImageToolbarProps) {

    return (

        <div className="image-toolbar">

            <button onClick={onReset}>

                ⌂ Reset

            </button>

            <span><strong>{name}</strong></span>

            <span>{width} × {height}</span>

            <span>{camera}</span>

            <span>Zoom: {zoom}%</span>

        </div>

    );

}