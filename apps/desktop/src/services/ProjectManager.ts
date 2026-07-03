import type { Project } from "../types/Project";
import ProjectStore from "../store/ProjectStore";

class ProjectManager {

   createProject(
       name: string,
       description: string,
       location: string,
       coordinateSystem: string
   ) {

       const project: Project = {

           id: crypto.randomUUID(),

           name,

           description,

           location,

           coordinateSystem,

           createdAt: new Date(),

           modifiedAt: new Date(),

           imageCount: 0,

           chunkCount: 0,

           version: "0.1.0"

        };

        ProjectStore.setCurrentProject(project);

        console.log(project);

    }

    getCurrentProject() {

        return ProjectStore.getCurrentProject();

    }

    closeProject() {

        ProjectStore.clearProject();

    }

}

export default new ProjectManager();