import "./Workspace.css";

import { useEffect, useState } from "react";

import ImageViewer from "../viewer/ImageViewer";

import ProjectStore from "../store/ProjectStore";

import type { Project } from "../types/Project";

interface WorkspaceProps {

    onNewProject: () => void;

    onImportImages: () => void;

}

export default function Workspace({

    onNewProject,

    onImportImages

}: WorkspaceProps) {

    const [project, setProject] = useState<Project | null>(
        ProjectStore.getProject()
    );

    useEffect(() => {

        function handleProjectChanged(project: Project | null) {

            setProject(project);

        }

        ProjectStore.subscribe(handleProjectChanged);

        return () => {

            ProjectStore.unsubscribe(handleProjectChanged);

        };

    }, []);

    // No Project → Welcome Screen

    if (!project) {

        return (

            <div className="workspace">

                <div className="welcome">

                    <h1>Welcome to AerialMapper</h1>

                    <p>Professional AI Powered Photogrammetry Software</p>

                    <div className="welcome-buttons">

                        <button onClick={onNewProject}>

                            📁 New Project

                        </button>

                        <button>

                            📂 Open Project

                        </button>

                        <button onClick={onImportImages}>

                            📥 Import Images

                        </button>

                    </div>

                </div>

            </div>

        );

    }

    // Project Exists → Show Viewer

    return (

        <ImageViewer />

    );

}