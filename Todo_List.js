const ps = require("prompt-sync")
const input = ps()

const fs = require("fs")


let tasks = []

function separator(){
    console.log("==========================================")
}
function add_task(){
    let task = input("Enter the task you want to add: ")
    tasks.push(task)
    console.log("Task Added!!!!")
    update_file()
    separator()

}
function delete_task(){
    if(tasks.length ===0){
        console.log("The list is empty")
        separator()
    }
    else{
        let task_num = Number(input("Enter the number of the task to delete: "))
        while(task_num<1 || task_num>tasks.length){
            task_num = Number(input("Please enter a valid number: "))
        }
        tasks.splice(task_num-1,1)
        console.log("Task Deleted!!!!")
        update_file()
        separator()
    }
}
function modify_task(){
    if(tasks.length ===0){
        console.log("The list is empty")
        separator()
    }
    else {
        let task_num = Number(input("Enter the number of the task to Modify: "))
        while(task_num<1 || task_num>tasks.length){
            task_num = Number(input("Please enter a valid number: "))
        }
        tasks[task_num - 1] = input("Enter the new task: ")
        console.log("Task is modified!!!!!!")
        update_file()
        separator()
    }
}
function show_tasks(){
    if(tasks.length ===0){
        console.log("The list is empty")
        separator()
    }
    else{
        for(let i=0;i<tasks.length;i++){
            console.log(`${i+1}) ${tasks[i]}`)
        }
        separator()
    }
}
function mark_as_done(){
    if(tasks.length ===0){
        console.log("The list is empty")
        separator()
    }
    else{
        let task_num = Number(input("Enter the number of the task to mark: "))
        while(task_num<1 || task_num>tasks.length){
            task_num = Number(input("Please enter a valid number: "))
        }
        if(tasks[task_num-1].includes('[x]')){
            console.log("Task is already Done")
            separator()
        }
        else{
        tasks[task_num-1] = tasks[task_num-1] +"[x]"
        console.log("Task is marked as done!!!!!!")
        update_file()
        separator()
        }
    }
}

function update_file(){
    fs.writeFileSync("tasks.txt","")
    for(var i=0 ; i<tasks.length ; i++){
    fs.appendFileSync("tasks.txt",`${tasks[i]}\n`)
    }
}
function  load_tasks(){
    const data = fs.readFileSync("tasks.txt","utf-8")
    let task_line = data.split("\n")
    for(var i=0;i<task_line.length;i++){
        if(task_line[i].length ===0){

        }else {
            tasks.push(task_line[i])
        }
    }
}

function main() {
    let choice;
    let menu = "1-Add a task\n2-Delete a task\n3-Modify a task\n4-Show The tasks\n5-mark as done\n6-Exit"
    load_tasks()
    while (true) {
        console.log(menu)
        choice = Number(input("Enter the number of task you want to do: "))
        while (choice > 6 || choice < 1) {
            choice = Number(input("Please enter a valid number: "))
        }

        if (choice === 1) {
            add_task()
        } else if (choice === 2) {
            delete_task()
        } else if (choice === 3) {
            modify_task()
        } else if (choice === 4) {
            show_tasks()
        } else if (choice === 5) {
            mark_as_done()
        }else{
            break
        }
    }
}
main()