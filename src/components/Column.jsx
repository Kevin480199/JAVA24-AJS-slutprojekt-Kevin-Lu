// Column.jsx - Will render each task as a TaskCard
import { TaskCard } from "./TaskCard";

export function Column({title, filteredTasks, members, user}){

    return(
        <div className="Column">
            <h3>{title}</h3>
            
            {filteredTasks.map(task => <TaskCard key={task.id} task={task} members={members} user={user}/>)}
            
        </div>
    )
}