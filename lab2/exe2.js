// shift alt f indentation
var Task = /** @class */ (function () {
    function Task() {
        this.arr = [];
    }
    Task.prototype.addTask = function (task) {
        this.arr.push(task);
        console.log(task + " has been added to the array");
        return this.arr.length;
    };
    Task.prototype.deleteTask = function (task) {
        // declares the index of the item you want to delete
        var index = this.arr.indexOf(task);
        console.log("deleting");
        // deletes at the index 1 time
        this.arr.splice(index, 1);
        // prints array length
        console.log("arr length: " + this.arr.length);
    };
    Task.prototype.listAllTasks = function () {
        for (var i = 0; i < this.arr.length; i++) {
            // prints elements in the array
            console.log(this.arr[i]);
        }
    };
    return Task;
}());
var todo = new Task();
todo.addTask("Helo");
todo.listAllTasks();
todo.deleteTask("Helo");
