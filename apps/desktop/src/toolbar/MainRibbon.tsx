import "./MainRibbon.css";

export default function MainRibbon() {
    return (
        <div className="main-ribbon">

            <div className="ribbon-row">
                <button>📁 New</button>
                <button>📂 Open</button>
                <button>💾 Save</button>
                <button>📥 Import Images</button>
                <button>▶ Process</button>
                <button>📤 Export</button>
            </div>

        </div>
    );
}