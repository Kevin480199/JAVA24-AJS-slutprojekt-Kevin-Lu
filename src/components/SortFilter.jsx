
export function SortFilter({setFilter, setSort}){

    return(
        // Implement all OPTIONS NOT FINNISHED
        <div>
            <label htmlFor="">Filter by: </label>
            <select name="" id="filter" onChange={ event=> setFilter(event.target.value)}>
                <option value="all">All</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
            </select>
            <label htmlFor="">Sort by: </label>
            <select name="" id="sort" onChange={event => setSort(event.target.value)}>
                <option value="default">Default</option>
                <option value="des">A-Z</option>
                <option value="asc">Z-A</option>
            </select>
        </div>
    )
}