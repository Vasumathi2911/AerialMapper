import "./ProjectExplorer.css";

export default function ProjectExplorer() {
    return (
        <div className="project-explorer">

            <div className="panel-title">
                Project Explorer
            </div>

            <div className="tree">

                <div className="tree-item">▼ 📷 Images</div>

                <div className="tree-item">▼ 🎯 Cameras</div>

                <div className="tree-item">▼ 📍 GCPs</div>

                <div className="tree-item">▼ 🛰 Chunks</div>

                <div className="tree-item">▼ 🗺 Outputs</div>

                <div className="tree-item">▼ 📊 Reports & Analytics</div>

                <div className="tree-item">▼ 📜 Logs</div>

            </div>

            <div className="project-statistics">

                <div className="statistics-title">
                    Project Statistics
                </div>

                <div>Images : 0</div>

                <div>Cameras : 0</div>

                <div>Chunks : 0</div>

                <div>Outputs : 0</div>

                <div>Storage : 0 MB</div>

            </div>

        </div>
    );
}