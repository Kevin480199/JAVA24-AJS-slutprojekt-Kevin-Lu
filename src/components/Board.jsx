import { Column } from "./Column";

export function Board({tasks}){
    console.log(tasks)
    return(
        <div className="ColumnContainer">
            <Column title="New" tasks={tasks.filter(task => (task.Status == 'New'))}/>
            <Column title="In-progress" tasks={tasks.filter(task => (task.Status == 'In-progress'))}/>
            <Column title="Finished" tasks={tasks.filter(task => (task.Status == 'Finished'))}/>
        </div>
    )
}