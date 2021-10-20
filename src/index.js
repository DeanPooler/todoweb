import UI from "./modules/UI/UI";
import Project from "./modules/Project";
import Task from "./modules/Task";
import "../dist/style/scss/main.scss";

let UIHandler = new UI;

UIHandler.pageLoad();

let projectArray = [new Project("default", "This is the default project.")];
let defaultTask1 = new Task("Default Task One", "This task serves as filler", "12-10-2021");
let defaultTask2 = new Task("Default Task Two", "This also serves as filler.", "12-10-2021");
let testProject = new Project("Test Project", "This is a project for testing purposes");
let taskTest1 = new Task("test task one", "This is the first test task", "12-29-2021", 1);
let taskTest2 = new Task("test task two", "This is the second test task", "12-10-2021", 1);
let taskTest3 = new Task("test task three", "This is the third test task", "12-19-2021", 1);
taskTest1.displayInfo();
console.log(taskTest1 instanceof Task);
testProject.addTask(taskTest1);
testProject.addTask(taskTest2);
testProject.addTask(taskTest3);
projectArray[0].addTask(defaultTask1);
projectArray[0].addTask(defaultTask2);

console.log(testProject.tasks);
testProject.displayTasksInfo();

projectArray.push(testProject);




UIHandler.displayProjectList(projectArray);