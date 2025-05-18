import {createRoot} from 'react-dom/client';
import { AddMember } from './components/AddMember';
import { AddTask } from './components/AddTasks';
import { Board } from './components/Board';


function App(){
    return(
        <div>
            <AddMember/>
            <AddTask/>
            <Board/>
        </div>

    )
}

const root = createRoot( document.querySelector("#root") );
root.render(<App/>); 