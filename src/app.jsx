import {createRoot} from 'react-dom/client';
import { AddMember } from './components/AddMember';
import { AddTask } from './components/AddTasks';
import { Board } from './components/Board';
import { SortFilter } from './components/SortFilter';
import { auth, scrumRef } from './js/fireBaseConfig';
import { useEffect, useState } from 'react';
import { child, onValue } from 'firebase/database';
import { Login } from './components/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { filterTasks, sortTasks } from './js/functions.js';


function App(){
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');
    const [sort, setSort] = useState('default');
    const [members, setMembers] = useState([]);
    const [user, setUser] = useState(null);
    
    const assigmentsRef = child(scrumRef, 'Assignments');
    const memberRef = child(scrumRef, 'Member');
    
    // MODULER

    /*
    tasks.filter(task =>{
        if(filter === 'Backend') return task.Category == filter;
        else if(filter === 'Frontend') return task.Category == filter;
        else if(filter === 'UX') return task.Category == filter;
        // members är en array
        else if(members.some(member => member.Name === filter)) return task.Member == filter;
        else return true;
        })
        */ 
       /*
       filteredTasks.toSorted((a,b)=>{
        if(sort === 'desABC') return a.Assignment.toLowerCase() > b.Assignment.toLowerCase()? 1 : -1;
        else if(sort === 'ascABC') return a.Assignment.toLowerCase() > b.Assignment.toLowerCase()? -1 : 1;
        else if(sort === 'desTime') return a.TimeStamp > b.TimeStamp? 1 : -1;
        else if(sort === 'ascTime') return a.TimeStamp > b.TimeStamp? -1 : 1;
        else return 0;
        })
        */   
       /*
       // Lets the user stay signed in even if page refreshes
       useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
            console.log('User', user)
            });
            return () => unsubscribe();
            }, []);
            */
           
           useEffect(()=> {
               onValue(assigmentsRef, snapshot=> {
                   console.log(snapshot.val())
                   if(snapshot.val()){
                       // snapshot.val() innehåller firebase-databasen, ett objekt där alla keys är firebaseID:n och alla values är objekt
                       setTasks(Object.entries(snapshot.val()).map(([id, obj])=>{return {id, ...obj}}))
                       console.log(tasks)
                    }else{
                        setTasks([])
                    }
                })
            }, [])
            
            const filteredTasks = filterTasks(tasks, filter, members)
            const sortedFilteredTasks = sortTasks(filteredTasks, sort)
            
            

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
            <Login onLogin={setUser} user={user}/>
            <AddMember user={user}/>
            <AddTask user={user}/>
            <SortFilter setFilter={setFilter} setSort={setSort} members={members}/>
            <Board tasks={sortedFilteredTasks} members={members} user={user}/>
        </div>

    )
}

const root = createRoot( document.querySelector("#root") );
root.render(<App/>); 