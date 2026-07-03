import { useState } from "react";

import "./MainLayout.css";

import MenuBar from "../components/MenuBar";
import MainRibbon from "../toolbar/MainRibbon";
import ProjectExplorer from "../panels/ProjectExplorer";
import Workspace from "../panels/Workspace";
import BottomDock from "../docks/BottomDock";

import NewProjectDialog from "../dialogs/NewProjectDialog";
import ProjectManager from "../services/ProjectManager";

export default function MainLayout() {

  const [showNewProjectDialog, setShowNewProjectDialog] = useState(false);
  console.log("Dialog State:", showNewProjectDialog);
  return (
    <div className="main-layout">
      <MenuBar
          onNewProject={() => {
              console.log("Opening Dialog...");
              setShowNewProjectDialog(true);
          }}
      />

      <MainRibbon />

      <div className="content">

        <aside className="left-panel">
          <ProjectExplorer />
        </aside>

        <main className="workspace">
          <Workspace
              onNewProject={() => setShowNewProjectDialog(true)}
          />
        </main>

        <aside className="right-panel">
          Properties
        </aside>

      </div>

      <div className="console">
        <BottomDock />
      </div>

      <footer className="status-bar">
        Ready
      </footer>

      {
          showNewProjectDialog && (
              <NewProjectDialog
                  onCreate={(name, description, location, coordinateSystem) => {

                      ProjectManager.createProject(
                          name,
                          description,
                          location,
                          coordinateSystem
                      );

                      setShowNewProjectDialog(false);

                  }}

                  onCancel={() => {

                      setShowNewProjectDialog(false);

                  }}
              />
          )
      }

      </div>
  );
}