import { TaskCard } from "./TaskCard";

export function Column({title, filteredTasks, members, user}){

    return(
        <div>
            <h3>{title}</h3>
            <TaskCard filteredTasks={filteredTasks} members={members} user={user}/>
        </div>
    )
}