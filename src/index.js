import UI from "./modules/UI/UI";
import Project from "./modules/Project";

UI.pageLoad();

let projectArray = [new Project("default", "This is the default project.")];
let testProject = new Project("Test Project", "This is a project for testing purposes");
projectArray.push(testProject);


UI.displayProjectList(projectArray);