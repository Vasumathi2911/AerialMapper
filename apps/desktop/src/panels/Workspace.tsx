import "./Workspace.css";

interface WorkspaceProps {onNewProject: () => void;}

export default function Workspace({
    onNewProject

}: WorkspaceProps) {
    return (
        <div className="workspace">

            <div className="welcome">

                <h1>Welcome to AerialMapper</h1>

                <p>Professional AI Powered Photogrammetry Software</p>

                <div className="welcome-buttons">

                    <button onClick={onNewProject}>
                        📁 New Project
                    </button>

                    <button>📂 Open Project</button>

                    <button>📥 Import Images</button>

                </div>

            </div>

        </div>
    );
}