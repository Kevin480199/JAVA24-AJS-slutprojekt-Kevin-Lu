
export function SortFilter({setFilter, setSort, members}){

    return(
        <div>
            <label htmlFor="">Filter by: </label>
            <select className="form-select w-25" id="filter" onChange={ event=> setFilter(event.target.value)}>
                <option value="All">All</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="UX">UX</option>
                {// Makes sure the names only renders once. Members array may contain more than one occurrence
                 [...new Map(members.map(member => [member.Name, member])).values()]
                .map(uniqueMember => (
                <option key={uniqueMember.id} value={uniqueMember.Name}>
                    {uniqueMember.Name}
                </option>
  ))}
            </select>
            <label htmlFor="">Sort by: </label>
            <select className="form-select w-25" id="sort" onChange={event => setSort(event.target.value)}>
                <option value="default">Default</option>
                <option value="desABC">A-Z</option>
                <option value="ascABC">Z-A</option>
                <option value="desTime">Earliest</option>
                <option value="ascTime">Latest</option>
            </select>
        </div>
    )
}