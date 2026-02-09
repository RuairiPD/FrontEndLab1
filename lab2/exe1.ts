// Declare empty array
let arr:Array<string>=[];

function addTask(task:string):number{
    // passes the string into the array
    arr.push(task);
    // prints the string 
    console.log(task);
    // returns the length of the array
    return arr.length;
}
function listAllTasks():void{
    // loops based on array length
    for(let i =0;i<arr.length;i++){
        // prints elements in the array
        console.log(arr[i]);
    }
}

function deleteTask(task:string){
    // declares the index of the item you want to delete
    let index = arr.indexOf(task);
    console.log("deleting");
    // deletes at the index 1 time
    arr.splice(index,1);
    // prints array length
    console.log("arr length: "+arr.length);
}

// Calling Functions 
addTask("Helo");
// Debug addTask("Helo2");
listAllTasks();
deleteTask("Helo");
listAllTasks();