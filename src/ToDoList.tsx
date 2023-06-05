import React, {useState} from "react";
import {fdatasync} from "fs";
import {filterValueType} from "./App";

// function sum(a: number , b: number) {
//     return alert(a + b)
// }
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
type PropsType = {
    title: string
    tasks: Array<TaskType>
    remoTask: (id:string) => void
    changeFilter: (value: filterValueType) => void
    addTask:(title:string) => void
}
export function ToDoList(props: PropsType) {
    const [newTaskTitle,setNewTaskTitle ] = useState("")
    return (
        <div>
            <h3>{props.title}</h3>
            <div>

                <input value={newTaskTitle} onChange={ (e) => {
                    setNewTaskTitle(e.currentTarget.value)
                }}/>
                <button onClick={ () => { props.addTask(newTaskTitle) } }>+</button>
            </div>
            <ul>
                {
                    props.tasks.map( (t) => {
                        return <li key={t.id}><input type={"checkbox"} checked={t.isDone}/><span>{t.title}</span>
                            <button onClick={ (e) => {
                                props.remoTask(t.id)
                            }}>x</button>
                        </li>

                    })
                }

            </ul>
            <div>
                <button onClick={ (e) => {props.changeFilter("all")}}>All</button>
                <button onClick={ (e) => {props.changeFilter("active")}}>Active</button>
                <button onClick={ (e) => {props.changeFilter("completed")}}>Completed</button>
            </div>
        </div>
    )
}