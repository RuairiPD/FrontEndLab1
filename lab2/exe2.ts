// shift alt f indentation

interface iTask {
    arr: Array<string>;
    addTask(task: string): number;
    listAllTasks(): void;
    deleteTask(task: string): void;
}

class Task implements iTask {
    constructor() { }

    arr: string[] = [];

    addTask(task: string): number {
        this.arr.push(task);
        console.log(task + " has been added to the array");
        return this.arr.length;
    }

    deleteTask(task: string): void {
        // declares the index of the item you want to delete
        let index = this.arr.indexOf(task);
        console.log("deleting");
        // deletes at the index 1 time
        this.arr.splice(index, 1);
        // prints array length
        console.log("arr length: " + this.arr.length);
    }
    listAllTasks(): void {
        for (let i = 0; i < this.arr.length; i++) {
            // prints elements in the array
            console.log(this.arr[i]);
        }
    }
}

let todo = new Task();
todo.addTask("Helo");
todo.listAllTasks();
todo.deleteTask("Helo");
