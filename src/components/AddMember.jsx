import { child, push, update } from "firebase/database";
import { scrumRef } from "../js/fireBaseConfig";
import { useState } from "react";

export function AddMember({user}){
    let tempName = "";
    let tempCategory = "";
    const [errorMessage, setErrorMessage] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        const newID = push(scrumRef).key; // genererar nytt firebaseID
        const newRef = child(scrumRef, `/Member/${newID}`)
        if(tempName && tempCategory){
            console.log(tempCategory)
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
            <form onSubmit={handleSubmit} className="d-flex align-items-center gap-2">
                <label htmlFor="">Add new team member</label>
                <div className="form-floating mb-3">
                    <input onChange={event => tempName = event.target.value} type="text" className="form-control" id="floatingInput" placeholder="Name"/>
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <select className="form-select w-25" onChange={event => tempCategory = event.target.value}>
                    <option value="">SELECT ROLE</option>
                    <option value="Backend">Backend</option>
                    <option value="Frontend">Frontend</option>
                    <option value="UX">UX</option>
                </select>
                <button disabled={!user} className="btn btn-primary">Add Member</button>
            </form>
            <p>{errorMessage}</p>
        </div>
    )
}