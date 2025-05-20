
export function SortFilter({setFilter, setSort}){

    return(
        // Implement all OPTIONS NOT FINNISHED
        <div>
            <label htmlFor="">Filter by: </label>
            <select name="" id="filter" onChange={ event=> setFilter(event.target.value)}>
                <option value="All">All</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="UX">UX</option>
            </select>
            <label htmlFor="">Sort by: </label>
            <select name="" id="sort" onChange={event => setSort(event.target.value)}>
                <option value="default">Default</option>
                <option value="desABC">A-Z</option>
                <option value="ascABC">Z-A</option>
                <option value="desTime">Earliest</option>
                <option value="ascTime">Latest</option>
            </select>
        </div>
    )
}