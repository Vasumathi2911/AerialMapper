import { useEffect, useState } from "react";

import "./PropertiesPanel.css";

import ProjectStore from "../store/ProjectStore";
import SelectionStore from "../store/SelectionStore";

import ImageStore from "../store/ImageStore";

import type { Project } from "../types/Project";
import type { Selection } from "../types/Selection";

export default function PropertiesPanel() {

    const [project, setProject] = useState<Project | null>(
        ProjectStore.getProject()
    );

    const [selection, setSelection] = useState<Selection | null>(
        SelectionStore.getSelection()
    );

    const [selectedImage, setSelectedImage] = useState(

        ImageStore.getImages().find(

            img => img.id === selection?.id

        ) ?? null

    );

    useEffect(() => {

        function updateSelection() {

            if (selection?.type !== "image") {

                setSelectedImage(null);

                return;

            }

            const image = ImageStore.getImages().find(

                img => img.id === selection.id

            );

            setSelectedImage(image ?? null);

        }

        updateSelection();

    }, [selection]);

    useEffect(() => {

        function handleProjectChanged(project: Project | null) {

            setProject(project);

        }

        ProjectStore.subscribe(handleProjectChanged);

        return () => {

            ProjectStore.unsubscribe(handleProjectChanged);

        };

    }, []);

    useEffect(() => {

        function handleSelectionChanged(
            selection: Selection | null
        ) {

            console.log("PropertiesPanel received:", selection);
            
            setSelection(selection);

        }

        SelectionStore.subscribe(handleSelectionChanged);

        return () => {

            SelectionStore.unsubscribe(handleSelectionChanged);

        };

    }, []);

    if (!project) {

        return (

            <div className="properties-panel">

                <h3>Properties</h3>

                <p>No project loaded.</p>

            </div>

        );

    }

    if (selection) {

        return (

            <div className="properties-panel">

                <h3>Object Inspector</h3>

                <table>

                    <tbody>

                    <tr>

                    <td>Type</td>

                    <td>{selection.type}</td>

                    </tr>

                    <tr>

                    <td>Name</td>

                    <td>{selection.name}</td>

                    </tr>

                    {

                    selectedImage && (

                    <>

                    <tr>

                    <td>Camera</td>

                    <td>{selectedImage.cameraModel}</td>

                    </tr>

                    <tr>

                    <td>Resolution</td>

                    <td>

                    {selectedImage.width} × {selectedImage.height}

                    </td>

                    </tr>

                    <tr>

                    <td>Latitude</td>

                    <td>{selectedImage.latitude}</td>

                    </tr>

                    <tr>

                    <td>Longitude</td>

                    <td>{selectedImage.longitude}</td>

                    </tr>

                    <tr>

                    <td>Altitude</td>

                    <td>{selectedImage.altitude}</td>

                    </tr>

                    <tr>

                    <td>Heading</td>

                    <td>{selectedImage.heading}</td>

                    </tr>

                    <tr>

                    <td>Focal Length</td>

                    <td>{selectedImage.focalLength} mm</td>

                    </tr>

                    <tr>

                    <td>Captured</td>

                    <td>

                    {selectedImage.captureTime?.toLocaleString()}

                    </td>

                    </tr>

                    </>

                    )

                    }

                    <tr>

                    <td>ID</td>

                    <td>{selection.id}</td>

                    </tr>

                    </tbody>

                </table>

            </div>

        );

    }

    return (

        <div className="properties-panel">

            <h3>Project Properties</h3>

            <table>

                <tbody>

                    <tr>
                        <td>Name</td>
                        <td>{project.name}</td>
                    </tr>

                    <tr>
                        <td>Description</td>
                        <td>{project.description || "-"}</td>
                    </tr>

                    <tr>
                        <td>Location</td>
                        <td>{project.location}</td>
                    </tr>

                    <tr>
                        <td>Coordinate System</td>
                        <td>{project.coordinateSystem}</td>
                    </tr>

                    <tr>
                        <td>Version</td>
                        <td>{project.version}</td>
                    </tr>

                    <tr>
                        <td>Images</td>
                        <td>{project.imageCount}</td>
                    </tr>

                    <tr>
                        <td>Chunks</td>
                        <td>{project.chunkCount}</td>
                    </tr>

                    <tr>
                        <td>Created</td>
                        <td>{project.createdAt.toLocaleString()}</td>
                    </tr>

                    <tr>
                        <td>Modified</td>
                        <td>{project.modifiedAt.toLocaleString()}</td>
                    </tr>

                </tbody>

            </table>

        </div>

    );

}