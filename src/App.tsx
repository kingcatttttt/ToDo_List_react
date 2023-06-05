import React, {useState} from 'react';
import './App.css';
import {ToDoList} from "./ToDoList";


function  useState2(data:any) {
    return [ data, () => {}];
}
let arr = useState2([{}, {}, {},]);

let tasks = arr[0]
let Settasks = arr[1]
function App() {
let InitTasks = [
    {id: 1, title: "CSS", isDone: true },
    {id: 2, title: "FIsting", isDone: true },
    {id: 3, title: "Latex", isDone: true },
    {id: 4, title: "Latex", isDone: true },
]


let arr = useState(InitTasks)
let tasks = arr[0]
let Settasks = arr[1]

function removeTask(id: number) {
    let filteredTasks = tasks.filter( t => t.id !== id)
    Settasks(filteredTasks)
}

    return (
        <div className="App">
            <ToDoList title="sex" tasks={tasks} remoTask={removeTask}/>
        </div>


    );
}
export default App;
