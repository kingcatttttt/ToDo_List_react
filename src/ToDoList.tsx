import React from "react";
import {fdatasync} from "fs";

// function sum(a: number , b: number) {
//     return alert(a + b)
// }
export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
type PropsType = {
    title: string
    tasks: Array<TaskType>
    remoTask: Function
}
export function ToDoList(props: PropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>

                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map( (t) => {
                        return <li><input type={"checkbox"} checked={t.isDone}/><span>{t.title}</span>
                            <button onClick={ () => {
                                props.remoTask(t.id)
                            }}>x</button>
                        </li>

                    })
                }

            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}