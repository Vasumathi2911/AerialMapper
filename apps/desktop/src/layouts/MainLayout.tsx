import "./MainLayout.css";
import MenuBar from "../components/MenuBar";
import MainRibbon from "../toolbar/MainRibbon";
import ProjectExplorer from "../panels/ProjectExplorer";
import Workspace from "../panels/Workspace";

export default function MainLayout() {
  return (
    <div className="main-layout">
      <MenuBar />

      <MainRibbon />

      <div className="content">

        <aside className="left-panel">
          <ProjectExplorer />
        </aside>

        <main className="workspace">
          <Workspace />
        </main>

        <aside className="right-panel">
          Properties
        </aside>

      </div>

      <div className="console">
        Processing Console
      </div>

      <footer className="status-bar">
        Ready
      </footer>

    </div>
  );
}