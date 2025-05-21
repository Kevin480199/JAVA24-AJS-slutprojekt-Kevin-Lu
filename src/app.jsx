import {createRoot} from 'react-dom/client';
import { AddMember } from './components/AddMember';
import { AddTask } from './components/AddTasks';
import { Board } from './components/Board';
import { SortFilter } from './components/SortFilter';
import { auth, scrumRef } from './js/FireBaseConfig';
import { useEffect, useState } from 'react';
import { child, onValue } from 'firebase/database';
import { Login } from './components/Login';
import { onAuthStateChanged } from 'firebase/auth';


function App(){
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');
    const [sort, setSort] = useState('default');
    const [members, setMembers] = useState([]);
    const filteredTasks = tasks.filter(task =>{
        if(filter === 'Backend') return task.Category == filter;
        else if(filter === 'Frontend') return task.Category == filter;
        else if(filter === 'UX') return task.Category == filter;
        // members är en array
        else if(members.some(member => member.Name === filter)) return task.Member == filter;
        else return true;
    })
    const sortedFilteredTasks = filteredTasks.toSorted((a,b)=>{
        if(sort === 'desABC') return a.Assignment.toLowerCase() > b.Assignment.toLowerCase()? 1 : -1;
        else if(sort === 'ascABC') return a.Assignment.toLowerCase() > b.Assignment.toLowerCase()? -1 : 1;
        else if(sort === 'desTime') return a.TimeStamp > b.TimeStamp? 1 : -1;
        else if(sort === 'ascTime') return a.TimeStamp > b.TimeStamp? -1 : 1;
        else return 0;
    })
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
        setUser(user);
        });
        return () => unsubscribe();
    }, []);

    const assigmentsRef = child(scrumRef, 'Assignments');
    useEffect(()=> {
        onValue(assigmentsRef, snapshot=> {
            console.log(snapshot.val())
            if(snapshot.val()){
                // snapshot.val() innehåller firebase-databasen, ett objekt där alla keys är firebaseID:n och alla values är objekt
                setTasks(Object.entries(snapshot.val()).map(([id, obj])=>{return {id, ...obj}}))

            }else{
                setTasks([])
            }
        })
    }, [])


    const memberRef = child(scrumRef, 'Member');
    useEffect(()=> {
        onValue(memberRef, snapshot=> {
            console.log(snapshot.val())
            if(snapshot.val()){
                // snapshot.val() innehåller firebase-databasen, ett objekt där alla keys är firebaseID:n och alla values är objekt
                setMembers(Object.entries(snapshot.val()).map(([id, obj])=>{return {id, ...obj}}))

            }else{
                setMembers([])
            }
        })
    }, [])
    return(
        <div>
            <Login onLogin={setUser}/>
            <AddMember/>
            <AddTask/>
            <SortFilter setFilter={setFilter} setSort={setSort} members={members}/>
            <Board tasks={sortedFilteredTasks} members={members} user={user}/>
        </div>

    )
}

const root = createRoot( document.querySelector("#root") );
root.render(<App/>); 