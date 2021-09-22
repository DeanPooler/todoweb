export default class Project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.tasks = [];
        this.idFriendlyName = this.name.toLowerCase().replaceAll(/\s/ig, "-");
    }

    addTask(task) {
        if (task.constructor.name == "Task") {
            this.tasks.push(task);
        } else {
            console.log("ERROR: Tried to add task to project that was not of type Task");
        }
    }
    
    displayTasksInfo() {
        this.tasks.forEach(element => {
            element.displayInfo();
            console.log("----------------------------");
        });
    }
}