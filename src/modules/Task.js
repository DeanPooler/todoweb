export default class Task {
    constructor(name, desc, dateDue, priority) {
        this.name = name;
        this.description = desc;
        this.dateDue = dateDue;
        this.priority = priority;
        this.dateAdded = new Date.now();
        this.subtasks = [];
        this.isCompleted = false;
        this.idFriendlyName = this.name.toLowerCase().replaceAll(/ */ig, "");
    }

    addSubTask(task) {
        if (task == typeof Task) {
            this.subtasks.push(task);
        } else {
            console.log("ERROR: tried to add a subtask that is not of type Task.");
        }
    }

    completeTask() {
        this.isCompleted ? this.isCompleted = false : this.isCompleted = true;
    }
}