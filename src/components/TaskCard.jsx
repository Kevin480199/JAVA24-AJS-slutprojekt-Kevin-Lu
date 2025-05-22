import { child, remove, update } from "firebase/database";
import { scrumRef } from "../js/fireBaseConfig";
import { useState } from "react";

export function TaskCard({task, members, user}){
    let tempSelectedMember = "";
    const [errorMessage, setErrorMessage] = useState('');
    console.log(task, members)

    function handleAssignment(event, taskID){
        event.preventDefault();
        const newRef = child(scrumRef, `/Assignments/${taskID}`)
        if(tempSelectedMember){
            update(newRef, {Member:tempSelectedMember, Status:"In-progress"})
            setErrorMessage('')

        }else{
            console.log('it didnt work')
            setErrorMessage('Select a member')
        }
        
    }

    function handleFinishTask(event, taskID){
        event.preventDefault();
        const newRef = child(scrumRef, `/Assignments/${taskID}`)
        update(newRef, {Status:"Finished"})
    }

    function handleDeleteTask(event, taskID){
        event.preventDefault();
        const newRef = child(scrumRef, `/Assignments/${taskID}`)
        remove(newRef)
    }
    return(
        <div className="taskCard">
            <h4>{task.Assignment}</h4>
            <h5>{task.Category}</h5>
            <h5>{new Date(task.TimeStamp).toLocaleString()}</h5>
            <h5>{task.Member? task.Member:''}</h5>


            {task.Status === 'New' && user && (
                <form>
                    <select className="form-select" onChange={event => tempSelectedMember = event.target.value}>
                        <option value="">SELECT MEMBER</option>
                        {members.filter(member =>member.Category == task.Category).map(member => <option key={member.id} value={member.Name}>{member.Name}</option>)}
                    </select>
                    <button className="btn btn-primary" onClick={(event) => handleAssignment(event, task.id)}>Assign Member</button>
                </form>
            )}

            {task.Status === 'In-progress' && user && (
                <button className="btn btn-primary" onClick={(event) => handleFinishTask(event, task.id)}>Mark as finished</button>
            )}

            {task.Status === 'Finished' && user && (
                <button className="btn btn-primary" onClick={(event) => handleDeleteTask(event, task.id)}>Delete Task</button>
            )}
                

            
            <p>{errorMessage}</p>
        </div>
    )
}