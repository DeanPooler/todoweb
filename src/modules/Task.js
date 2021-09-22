export default class Task {
    constructor(name, desc, dateDue, priority) {
        this.name = name;
        this.description = desc;
        this.priority = priority;
        this.dateAdded = Date.now();
        this.subtasks = [];
        this.isCompleted = false;
        this.idFriendlyName = this.name.toLowerCase().replaceAll(/ */ig, "");
        if (new Date(dateDue.replaceAll(/-/ig, "/")) - this.dateAdded > 0) {
            new Date(dateDue.replaceAll(/-/ig, "/"));
        } else {
            throw "dateDue cannot be lower than dateAdded";
        }
    }

    addSubTask(task) {
        if (task instanceof Task) {
            this.subtasks.push(task);
        } else {
            console.log("ERROR: tried to add a subtask that is not of type Task.");
        }
    }

    completeTask() {
        this.isCompleted ? this.isCompleted = false : this.isCompleted = true;
    }

    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`description: ${this.description}`);
        console.log(`dateDue: ${this.dateDue}`);
        console.log(`priority: ${this.priority}`);
        console.log(`dateAdded: ${this.dateAdded}`);
        console.log(`subtasks: ${this.subtasks}`);
        console.log(`isCompleted: ${this.isCompleted}`);
        console.log(`idFriendlyName: ${this.idFriendlyName}`);
    }
}