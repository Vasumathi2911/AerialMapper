import { useEffect, useState } from "react";

import "./ProjectExplorer.css";

import ProjectStore from "../store/ProjectStore";
import type { Project } from "../types/Project";

import ImageStore from "../store/ImageStore";
import type { ImageFile } from "../types/Image";

import CameraStore from "../store/CameraStore";
import type { Camera } from "../types/Camera";

import SelectionStore from "../store/SelectionStore";

import ThumbnailStore from "../store/ThumbnailStore";
import type { Thumbnail } from "../types/Thumbnail";

import ThumbnailItem from "../components/ThumbnailItem";

export default function ProjectExplorer() {

    const [project, setProject] = useState<Project | null>(

        ProjectStore.getProject()

    );

    const [images, setImages] = useState<ImageFile[]>(

        ImageStore.getImages()

    );

    const [cameras, setCameras] = useState<Camera[]>(

        CameraStore.getCameras()

    );

    const [thumbnails, setThumbnails] = useState<Thumbnail[]>(

        ThumbnailStore.getThumbnails()

    );

    useEffect(() => {

        function handleImagesChanged(

            images: ImageFile[]

        ) {

            setImages(images);

        }

        ImageStore.subscribe(

            handleImagesChanged

        );

        return () => {

            ImageStore.unsubscribe(

                handleImagesChanged

            );

        };

    }, []);

    useEffect(() => {

        function handleProjectChanged(project: Project | null) {

            console.log("ProjectExplorer received:", project);

            setProject(project);

        }

        ProjectStore.subscribe(handleProjectChanged);

        return () => {

            ProjectStore.unsubscribe(handleProjectChanged);

        };

    }, []);

    useEffect(() => {

        function handleCameraChanged(

            cameras: Camera[]

        ) {

            setCameras(cameras);

        }

        CameraStore.subscribe(

            handleCameraChanged

        );

        return () => {

            CameraStore.unsubscribe(

                handleCameraChanged

            );

        };

    }, []);

    useEffect(() => {

        function handleThumbnailChanged(

            thumbnails: Thumbnail[]

        ) {

            setThumbnails(thumbnails);

        }

        ThumbnailStore.subscribe(

            handleThumbnailChanged

        );

        return () => {

            ThumbnailStore.unsubscribe(

                handleThumbnailChanged

            );

        };

    }, []);

    if (!project) {

        return (

            <div className="project-explorer">

                <h3>Project Explorer</h3>

                <p>No project opened.</p>

            </div>

        );

    }

    return (

        <div className="project-explorer">

            <h3>Project Explorer</h3>

            <ul className="tree">

                <li

                    onClick={() => {

                        SelectionStore.setSelection({

                            type: "project",

                            id: project.id,

                            name: project.name

                        });

                        console.log("Selected Project", project.name);

                    }}

                    style={{

                        cursor: "pointer"

                    }}

                >

                    📁 {project.name}

                    <ul>

                        <li>

                            📂 Images ({project.imageCount})

                            {

                                images.length > 0 && (

                                    <ul>

                                        {

                                            images.map(image => (

                                                <li

                                                    key={image.id}

                                                    onClick={(e) => {

                                                        e.stopPropagation();

                                                        SelectionStore.setSelection({

                                                            type: "image",

                                                            id: image.id,

                                                            name: image.name

                                                        });

                                                        console.log("Selected Image", image.name);

                                                    }}

                                                    style={{

                                                        cursor: "pointer"

                                                    }}

                                                >

                                                    <ThumbnailItem

                                                        imageUrl={

                                                            thumbnails.find(

                                                                t => t.imageId === image.id

                                                            )?.url ?? ""

                                                        }

                                                        imageName={image.name}

                                                        selected={false}

                                                        onClick={() => {

                                                            SelectionStore.setSelection({

                                                                type: "image",

                                                                id: image.id,

                                                                name: image.name

                                                            });

                                                        }}

                                                    />

                                                </li>

                                            ))

                                        }

                                    </ul>

                                )

                            }

                        </li>

                        <li>📂 Chunks ({project.chunkCount})</li>

                        <li>

                            📂 Cameras ({cameras.length})

                            {

                                cameras.length > 0 && (

                                    <ul>

                                        {

                                            cameras.map(camera => (

                                                <li

                                                    key={camera.id}

                                                    onClick={() => {

                                                        SelectionStore.setSelection({

                                                            type: "camera",

                                                            id: camera.id,

                                                            name: `${camera.manufacturer} ${camera.model}`

                                                        });

                                                        console.log(

                                                            "Selected Camera",

                                                            camera.model

                                                        );

                                                    }}

                                                    style={{

                                                        cursor: "pointer"

                                                    }}

                                                >

                                                    📷 {camera.manufacturer} {camera.model}

                                                </li>

                                            ))

                                        }

                                    </ul>

                                )

                            }

                        </li>

                        <li>📂 Ground Control Points</li>

                        <li>📂 Tie Points</li>

                        <li>📂 Dense Clouds</li>

                        <li>📂 Meshes</li>

                        <li>📂 DEM</li>

                        <li>📂 DSM</li>

                        <li>📂 DTM</li>

                        <li>📂 Orthomosaics</li>

                        <li>📂 AI Results</li>

                        <li>📂 Reports</li>

                        <li>📂 Exports</li>

                    </ul>

                </li>

            </ul>

        </div>

    );

}