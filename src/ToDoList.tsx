import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {fdatasync} from "fs";
import {filterValueType} from "./App";
import {constants} from "os";
import errno = module
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {isStringObject} from "util/types";

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
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    filter: filterValueType
}


export function ToDoList(props: PropsType) {
    const [newTaskTitle,setNewTaskTitle ] = useState("")
    const onNewTitleChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        SetError(null)
        if(e.charCode == 13) {
            props.addTask(newTaskTitle)
            setNewTaskTitle("")
        }
    }
    let [error, SetError] = useState<string | null>(null)
    const addTask = () => {
       if(newTaskTitle.trim() === "") {
           SetError("Title is Required")
       } else {
           props.addTask(newTaskTitle)
           setNewTaskTitle("");
       }

    }

    const onAllHandler = () => {props.changeFilter("all")}
    const onActiveHandler = () => {props.changeFilter("active")}
    const onComoletedHandler = (e: ChangeEvent<HTMLInputElement>) => {props.changeFilter("completed")}


    return (
        <div>
            <h3>{props.title}</h3>
            <div>

                <input value={newTaskTitle}
                       onChange={ onNewTitleChangeHandler}
                       onKeyPress={onKeyPressHandler}
                     className={ error ?"ereor" : ""}

                />
                <button onClick={addTask}>+</button>
                {error && <div className="ereor-message">Field is required</div>}
            </div>
            <ul>
                {
                    props.tasks.map( (t) => {
                        const onClickeHamdler = () => props.remoTask(t.id)
                        const onChamgeHamdler = (e:ChangeEvent<HTMLInputElement>) => {
                            props.changeTaskStatus(t.id, e.currentTarget.checked)
                        }

                        return <li key={t.id} className={t.isDone ? "is-done" : ""} >
                            <input
                            onChange={onChamgeHamdler}
                            type={"checkbox"}
                            checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={onClickeHamdler}>x</button>
                        </li>

                    })
                }

            </ul>
            <div>
                <button onClick={onAllHandler} className={props.filter === "all" ? "active-filter" : "" }>All</button>
                <button onClick={onActiveHandler}className={props.filter === "active" ? "active-filter" : "" }>Active</button>
                <button onClick={onComoletedHandler}className={props.filter === "completed" ? "active-filter" : "" }>Completed</button>
            </div>
        </div>
    )
}