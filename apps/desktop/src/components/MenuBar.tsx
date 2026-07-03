import "./MenuBar.css";

interface MenuBarProps {
    onNewProject: () => void;
}

export default function MenuBar({
    onNewProject
}: MenuBarProps) {

    return (

        <div className="menu-bar">

            <button style={{ background: "red", color: "white" }}>
                TEST FILE
            </button>

            <button>✏ Edit</button>

            <button>👁 View</button>

            <button
                style={{
                    background: "red",
                    color: "white",
                    padding: "10px"
                }}
                onClick={() => {
                    alert("Button Clicked!");
                    console.log("Button Clicked!");
                    onNewProject();
                }}
            >
                CLICK ME
            </button>

            <button>🚁 Survey</button>

            <button>⚙ Processing</button>

            <button>🤖 AI</button>

            <button>🛠 Tools</button>

            <button>🪟 Window</button>

            <button>❓ Help</button>

        </div>

    );

}