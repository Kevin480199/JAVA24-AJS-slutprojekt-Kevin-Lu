
export function AddTask(){

    // Add timestamp and status NEW
    return(
        <div>
            <form>
                <input placeholder="Title" type="text" />
                <select>
                    <option value="">SELECT ROLL</option>
                    <option value="backend">Backend</option>
                    <option value="frontend">Frontend</option>
                    <option value="UX">UX</option>
                </select>
                <button>Add Task</button>
            </form>
        </div>
    )
}