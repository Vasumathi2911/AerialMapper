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

           version: "0.1.0",

           imageCount: 0,

           chunkCount: 0,

        };

        ProjectStore.setProject(project);

        console.log("Creating Project...");
        
        console.log(project);

        return project;

    }

    getCurrentProject() {

        return ProjectStore.getProject();

    }

    closeProject() {

        ProjectStore.clearProject();

    }

}

export default new ProjectManager();