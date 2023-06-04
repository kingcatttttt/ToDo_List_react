import React from 'react';
import './App.css';
import {ToDoList} from "./ToDoList";

let tasks1 = [
    {id: 1, title: "CSS", isDone: true },
    {id: 2, title: "FIsting", isDone: true },
    {id: 3, title: "Latex", isDone: true },
]
let tasks2 = [
    {id: 1, title: "gay", isDone: true },
    {id: 2, title: "FIsting", isDone: true },
    {id: 3, title: "ssexxx", isDone: true },
]
function App() {
  return (
      <div className="App">
          <ToDoList title="sex" tasks={tasks1}/>
          <ToDoList title="anal" tasks={tasks2}/>
      </div>


  );
}

export default App;
