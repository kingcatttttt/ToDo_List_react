import React, {useState} from 'react';
import './App.css';
import {TaskType, ToDoList} from "./ToDoList";
import {v1} from "uuid";

export type filterValueType = "all" | "completed" | "active"
type ToDoListType = {
    id:string
    title:string
    filter: filterValueType
}
function useState2(data: any) {
    return [data, () => {
    }];
}

let arr = useState2([{}, {}, {},]);

let tasks = arr[0]
let Settasks = arr[1]

function App() {




    function changeStatus(taskId:string,isdome:boolean, todolistId: string) {
        let tasks = tasksObj[todolistId]
        let task = tasks.find( (t) => {
            let task = tasks.find(t => t.id === taskId)
            if (task) {
                task.isDone = isdome;
                SettasksObj({...tasksObj})
            }

        })
    }


    function addTask(title:string,todolistId: string ) {
       let task = {id:v1(), title: title, isDone: false};
       let tasks = tasksObj[todolistId]

        let newTasks = [task, ...tasks];
       tasksObj[todolistId] = newTasks;
        SettasksObj({...tasksObj})
    }
    function removeTask(id: number, todolistId: string) {
        let tasks = tasksObj[todolistId];
        let filteredTasks = tasks.filter(t => t.id != id)
        tasksObj[todolistId] = filteredTasks
        SettasksObj(filteredTasks)

        SettasksObj({...tasksObj})
    }
    function changeFilter(value: filterValueType,todolistId: string) {
    let todolist = toDoList.find(tl => tl.id === todolistId);
    if( todolist ) {
        todolist.filter = value;
        setToDoList([...toDoList])
    }
    }
    let todoListIdi1 = v1()
    let todoListIdi2 = v1()
    let [toDoList,setToDoList] = useState<Array<toDoListType>>([
        { id: todoListIdi1, title :"sex", filter: "active"},
        { id: todoListIdi2, title :"anal", filter: "completed"},
    ]);
    let [tasksObj,SettasksObj] = useState({
        [todoListIdi1]: [
            {id: v1(), title: "CSS", isDone: true},
            {id: v1(), title: "FIsting", isDone: true},
            {id: v1(), title: "Latex", isDone: false},
            {id: v1(), title: "Latex", isDone: false},
        ],
        [todoListIdi2]: [
            {id: v1(), title: "CSS", isDone: true},
            {id: v1(), title: "sex", isDone: true},
            {id: v1(), title: "anal", isDone: false},
            {id: v1(), title: "Latex", isDone: false},
        ]

    })
    let removeTodoList = (todoListIdi: string) => {
        let filteredTodoList = toDoList.filter(tl => tl.id !== todoListIdi)
        setToDoList(filteredTodoList)
        delete tasksObj[todoListIdi]
        SettasksObj({...tasksObj})

    }

    return (
        <div className="App">
            {

                toDoList.map( (tl) => {
                    let tasksForToDoList = tasksObj[tl.id];
                    if (tl.filter === "completed") {
                        tasksForToDoList = tasksForToDoList.filter(t => t.isDone === true)
                    }
                    if(tl.filter === "active") {
                        tasksForToDoList = tasksForToDoList.filter(( t => t.isDone === false))
                    }

                    return  <ToDoList title={tl.title}
                                      key={tl.id}
                                      id={tl.id}
                                      tasksObj={tasksForToDoList}
                                      remoTask={removeTask}
                                      changeFilter={changeFilter}
                                      addTask={addTask}
                                      changeTaskStatus={changeStatus}
                                      filter={tl.filter}
                                      removeTodoList={removeTodoList}
                    />
                })
            }


        </div>


    );
}

export default App;
