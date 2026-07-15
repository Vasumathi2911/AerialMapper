import "./MainRibbon.css";
interface MainRibbonProps {

    onNewProject: () => void;

    onOpenProject: () => void;

    onSaveProject: () => void;

    onImportImages: () => void;

    onAnalyzeImages: () => void;

    onExport: () => void;

}

export default function MainRibbon({

    onNewProject,

    onOpenProject,

    onSaveProject,

    onImportImages,

    onAnalyzeImages,

    onExport

}: MainRibbonProps) {
    return (
        <div className="main-ribbon">

            <div className="ribbon-row">

                <button onClick={onNewProject}>
                    📁 New
                </button>
                
                <button onClick={onOpenProject}>
                    📂 Open
                </button>
                
                <button onClick={onSaveProject}>
                    💾 Save
                </button>
                
                <button onClick={onImportImages}>
                    📥 Import Images
                </button>
                
                <button onClick={onAnalyzeImages}>
                    🔍 Analyze
                </button>
                
                <button onClick={onExport}>
                    📤 Export
                </button>
            
            </div>

        </div>
    );
}