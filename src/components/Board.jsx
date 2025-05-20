import { Column } from "./Column";

export function Board({tasks, members}){
    console.log(tasks, members)
    return(
        <div className="ColumnContainer">
            <Column title="New" filteredTasks={tasks.filter(task => (task.Status == 'New'))} members={members}/>
            <Column title="In-progress" filteredTasks={tasks.filter(task => (task.Status == 'In-progress'))} members={members}/>
            <Column title="Finished" filteredTasks={tasks.filter(task => (task.Status == 'Finished'))} members={members}/>
        </div>
    )
}