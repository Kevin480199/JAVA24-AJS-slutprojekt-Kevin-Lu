// Board.jsx - Will render the three colums used new, in-progress and finished
import { Column } from "./Column";

export function Board({tasks, members, user}){
    console.log(tasks, members)
    return(
        <div className="ColumnContainer">
            <Column title="New" filteredTasks={tasks.filter(task => (task.Status == 'New'))} members={members} user={user}/>
            <Column title="In-progress" filteredTasks={tasks.filter(task => (task.Status == 'In-progress'))} members={members} user={user}/>
            <Column title="Finished" filteredTasks={tasks.filter(task => (task.Status == 'Finished'))} members={members} user={user}/>
        </div>
    )
}