import { child, push, update } from "firebase/database";
import { useState } from "react";
import { scrumRef } from "../js/fireBaseConfig";

export function AddTask({user}){

    let tempTitle = "";
    let tempCategory = "";
    const [errorMessage, setErrorMessage] = useState("");
    function handleSubmit(event){
        event.preventDefault();
        const newID = push(scrumRef).key; // genererar nytt firebaseID
        const newRef = child(scrumRef, `/Assignments/${newID}`)
        if(tempTitle && tempCategory){
            console.log(tempCategory)
            update(newRef, {Category:tempCategory, Assignment:tempTitle, Member:"", Status:"New", TimeStamp:new Date().toISOString()})
            setErrorMessage('');
        } else {
            console.warn("Title and Category are required.");
            setErrorMessage("Title and Category are required.");
        }
        event.target.reset();
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="d-flex align-items-center gap-2">
                <label htmlFor="">Add new task</label>
                <div className="form-floating mb-3">
                    <input onChange={event => tempTitle = event.target.value} type="text" className="form-control" id="floatingInput" placeholder="Name"/>
                    <label htmlFor="floatingInput">Title</label>
                </div>
                <select className="form-select w-25" onChange={event => tempCategory = event.target.value}>
                    <option value="">SELECT ROLE</option>
                    <option value="Backend">Backend</option>
                    <option value="Frontend">Frontend</option>
                    <option value="UX">UX</option>
                </select>
                <button disabled={!user} className="btn btn-primary">Add Task</button>
            </form>
            <p>{errorMessage}</p>
        </div>
    )
}