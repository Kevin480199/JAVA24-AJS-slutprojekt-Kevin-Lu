import {createRoot} from 'react-dom/client';
import { AddMember } from './components/AddMember';
import { AddTask } from './components/AddTasks';
import { Board } from './components/Board';
import { SortFilter } from './components/SortFilter';
import { scrumRef } from './js/FireBaseConfig';
import { useEffect, useState } from 'react';
import { child, onValue } from 'firebase/database';


function App(){
    const [tasks, setTasks] = useState([]);

    const assigmentsRef = child(scrumRef, 'Assignments');
    useEffect(()=> {
        onValue(assigmentsRef, snapshot=> {
            console.log(snapshot.val())

            // snapshot.val() innehåller firebase-databasen, ett objekt där alla keys är firebaseID:n och alla values är objekt
            setTasks(Object.entries(snapshot.val()).map(([id, obj])=>{return {id, ...obj}}))
        })
    }, [])
    return(
        <div>
            <AddMember/>
            <AddTask/>
            <SortFilter/>
            <Board tasks={tasks}/>
        </div>

    )
}

const root = createRoot( document.querySelector("#root") );
root.render(<App/>); 