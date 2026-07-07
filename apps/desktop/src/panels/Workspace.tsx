import "./Workspace.css";
interface WorkspaceProps {

    onNewProject: () => void;

    onImportImages: () => void;

}

export default function Workspace({

    onNewProject,

    onImportImages

}: WorkspaceProps) {

    return (

        <div className="workspace">

            <div className="welcome">

                <h1>Welcome to AerialMapper</h1>

                <p>Professional AI Powered Photogrammetry Software</p>

                <div className="welcome-buttons">

                    <button
                        onClick={onNewProject}
                    >
                        📁 New Project
                    </button>

                    <button>
                        📂 Open Project
                    </button>

                    <button
                        onClick={onImportImages}
                    >
                        📥 Import Images
                    </button>

                </div>

            </div>

        </div>

    );

}