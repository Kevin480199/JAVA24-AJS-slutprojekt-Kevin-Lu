export function filterTasks(tasks, filter, members){
    console.log(tasks)
    return tasks.filter(task =>{
        if(filter === 'Backend') return task.Category == filter;
        else if(filter === 'Frontend') return task.Category == filter;
        else if(filter === 'UX') return task.Category == filter;
        // members är en array
        else if(members.some(member => member.Name === filter)) return task.Member == filter;
        else return true;
    })
}

export function sortTasks(filteredTasks, sort){
    console.log(filteredTasks)
    return filteredTasks.toSorted((a,b)=>{
        if(sort === 'desABC') return a.Assignment.toLowerCase() > b.Assignment.toLowerCase()? 1 : -1;
        else if(sort === 'ascABC') return a.Assignment.toLowerCase() > b.Assignment.toLowerCase()? -1 : 1;
        else if(sort === 'desTime') return a.TimeStamp > b.TimeStamp? 1 : -1;
        else if(sort === 'ascTime') return a.TimeStamp > b.TimeStamp? -1 : 1;
        else return 0;
    })
}