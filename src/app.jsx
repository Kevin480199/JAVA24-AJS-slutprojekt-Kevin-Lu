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
    const [tasks, setTasks] = useState([]); // Rerenders tasks when tasks is updated
    const [filter, setFilter] = useState('all');
    const [sort, setSort] = useState('default');
    const [members, setMembers] = useState([]);
    const [user, setUser] = useState(null);
    
    const assigmentsRef = child(scrumRef, 'Assignments');
    const memberRef = child(scrumRef, 'Member');
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
                // Updates tasks whenever assigmentRef has a new node
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