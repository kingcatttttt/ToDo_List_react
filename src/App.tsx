import React, {useState} from 'react';
import './App.css';
import {TaskType, ToDoList} from "./ToDoList";
import {v1} from "uuid";

export type filterValueType = "all" | "completed" | "active"
function useState2(data: any) {
    return [data, () => {
    }];
}

let arr = useState2([{}, {}, {},]);

let tasks = arr[0]
let Settasks = arr[1]

function App() {


    let [tasks, Settasks]  = useState<Array<TaskType>>([
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "FIsting", isDone: true},
        {id: v1(), title: "Latex", isDone: false},
        {id: v1(), title: "Latex", isDone: false},
    ])

    let [filter, setFilter] = useState<filterValueType>("all")

    let tasksForToDoList = tasks;
    if (filter === "completed") {
        tasksForToDoList = tasks.filter(t => t.isDone === true)
    }
    if(filter === "active") {
        tasksForToDoList = tasks.filter(( t => t.isDone === false))
    }
    function addTask(title:string) {
        let newTask = {id: v1(), title:title, isDone:false}
        let newTasks = [newTask,...tasks];
        Settasks(newTasks);
    }
    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        Settasks(filteredTasks)
    }
    function changeFilter(value: filterValueType) {
        setFilter(value)
    }

    return (
        <div className="App">
            <ToDoList title="sex" tasks={tasksForToDoList} remoTask={removeTask} changeFilter={changeFilter} addTask={addTask}/>
        </div>


    );
}

export default App;
