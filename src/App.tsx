import React, {useState} from 'react';
import './App.css';
import {TaskType, ToDoList} from "./ToDoList";

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
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "FIsting", isDone: true},
        {id: 3, title: "Latex", isDone: false},
        {id: 4, title: "Latex", isDone: false},
    ])

    let [filter, setFilter] = useState<filterValueType>("all")

    let tasksForToDoList = tasks;
    if (filter === "completed") {
        tasksForToDoList = tasks.filter(t => t.isDone === true)
    }
    if(filter === "active") {
        tasksForToDoList = tasks.filter(( t => t.isDone === false))
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
            <ToDoList title="sex" tasks={tasksForToDoList} remoTask={removeTask} changeFilter={changeFilter}/>
        </div>


    );
}

export default App;
