import { useState } from "react";
import "./NewProjectDialog.css";

interface NewProjectDialogProps {

    onCreate: (
        name: string,
        description: string,
        location: string,
        coordinateSystem: string
    ) => void;

    onCancel: () => void;

}

export default function NewProjectDialog({
    onCreate,
    onCancel
}: NewProjectDialogProps) {

    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [projectLocation, setProjectLocation] = useState("");
    const [coordinateSystem, setCoordinateSystem] = useState("WGS84");

    function handleCreate() {

        if (projectName.trim() === "") {
            alert("Project Name is required.");
            return;
        }

        if (projectLocation.trim() === "") {
            alert("Project Location is required.");
            return;
        }

        onCreate(
            projectName,
            description,
            projectLocation,
            coordinateSystem
        );
    }

    return (

        <div className="dialog-overlay">

            <div className="dialog">

                <h2>New Project</h2>

                <label>

                    Project Name

                    <input
                        type="text"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                    />

                </label>

                <label>

                    Project Description

                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                    />

                </label>

                <label>

                    Project Location

                    <div className="location-row">

                        <input
                            type="text"
                            value={projectLocation}
                            onChange={(e) => setProjectLocation(e.target.value)}
                        />

                        <button type="button">
                            Browse...
                        </button>

                    </div>

                </label>

                <label>

                    Coordinate System

                    <select
                        value={coordinateSystem}
                        onChange={(e) => setCoordinateSystem(e.target.value)}
                    >

                        <option>WGS84</option>
                        <option>UTM</option>
                        <option>EPSG:4326</option>

                    </select>

                </label>

                <div className="dialog-buttons">

                    <button onClick={onCancel}>
                        Cancel
                    </button>

                    <button onClick={handleCreate}>
                        Create
                    </button>

                </div>

            </div>

        </div>

    );

}