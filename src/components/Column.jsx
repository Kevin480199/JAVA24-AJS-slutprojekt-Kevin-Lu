import { TaskCard } from "./TaskCard";

export function Column({title, tasks}){

    return(
        <div>
            <h3>{title}</h3>
            <TaskCard tasks={tasks}/>
        </div>
    )
}