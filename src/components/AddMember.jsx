
export function AddMember(){

    return(
        <div>
            <form>
                <input placeholder= "Name"type="text" />
                <select>
                    <option value="">SELECT ROLL</option>
                    <option value="backend">Backend</option>
                    <option value="frontend">Frontend</option>
                    <option value="UX">UX</option>
                </select>
                <button>Add Member</button>
            </form>
        </div>
    )
}