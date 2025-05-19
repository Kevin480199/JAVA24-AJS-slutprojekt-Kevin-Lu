import { child, push, update } from "firebase/database";
import { useState } from "react";
import { scrumRef } from "../js/FireBaseConfig";

export function AddTask(){

    let tempTitle = "";
    let tempCategory = "";
    const [errorMessage, setErrorMessage] = useState("");
    function handleSubmit(event){
        event.preventDefault();
        const newID = push(scrumRef).key; // genererar nytt firebaseID
        const newRef = child(scrumRef, `/Assignments/${newID}`)
        if(tempTitle && tempCategory){
            update(newRef, {Category:tempCategory, Assignment:tempTitle, Member:"", Status:"New", TimeStamp:new Date().toLocaleString()})
            setErrorMessage('');
        } else {
            console.warn("Title and Category are required.");
            setErrorMessage("Title and Category are required.");
        }
        event.target.reset();
    }
    // Add timestamp and status NEW
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Add new task</label>
                <input onChange={event => tempTitle = event.target.value} placeholder="Title" type="text" />
                <select onChange={event => tempCategory = event.target.value}>
                    <option value="">SELECT ROLL</option>
                    <option value="backend">Backend</option>
                    <option value="frontend">Frontend</option>
                    <option value="UX">UX</option>
                </select>
                <button>Add Task</button>
            </form>
            <p>{errorMessage}</p>
        </div>
    )
}