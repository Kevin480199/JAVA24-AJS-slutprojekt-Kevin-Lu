import { child, push, update } from "firebase/database";
import { scrumRef } from "../js/FireBaseConfig";
import { useState } from "react";

export function AddMember(){
    let tempName = "";
    let tempCategory = "";
    const [errorMessage, setErrorMessage] = useState("");
    function handleSubmit(event){
        event.preventDefault();
        const newID = push(scrumRef).key; // genererar nytt firebaseID
        const newRef = child(scrumRef, `/Member/${newID}`)
        if(tempName && tempCategory){
            update(newRef, {Category:tempCategory, Name:tempName})
            setErrorMessage('');
        } else {
            console.warn("Name and Category are required.");
            setErrorMessage("Name and Category are required.");
        }
        event.target.reset();
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Add new team member</label>
                <input onChange={event => tempName = event.target.value} placeholder= "Name"type="text" />
                <select onChange={event => tempCategory = event.target.value}>
                    <option value="">SELECT ROLL</option>
                    <option value="backend">Backend</option>
                    <option value="frontend">Frontend</option>
                    <option value="UX">UX</option>
                </select>
                <button>Add Member</button>
            </form>
            <p>{errorMessage}</p>
        </div>
    )
}