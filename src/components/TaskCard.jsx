
export function TaskCard({tasks}){

    console.log(tasks)
    return(
        <div>
            {tasks.map(task => {
                return <div> 
                            <h4>{task.Assignment}</h4>
                            <h5>{task.Category}</h5>
                            <h5>{task.TimeStamp}</h5>
                            {task.Status === 'New' && (
                                <button onClick={() => handleStartTask(task.id)}>Start Task</button>
                            )}

                            {task.Status === 'In-progress' && (
                                <button onClick={() => handleFinishTask(task.id)}>Finish Task</button>
                            )}

                            {task.Status === 'Finished' && (
                                <button onClick={() => handleResetTask(task.id)}>Reset Task</button>
                            )}
                             </div>

            })}
        </div>
    )
}