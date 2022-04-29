import { Wrapper, Boxlist, Tittle} from './styled';
import React, {useState} from 'react';
import Tasks from '../Tasks';


export default function App() {

    const [tasks, setTasks] = useState([
        {
            id: '1',
            tittle: 'React',
            completed: false
        },
        {
            id: '2',
            tittle: 'Ciência da Computação',
            completed: true
        },
        {
            id: '2',
            tittle: 'Academia',
            completed: true
        }
    ]);
    return (
        <Wrapper>
            <Boxlist>
                <Tittle>tarefas do dia</Tittle>
                <Tasks tasks={tasks}/>
            </Boxlist>
        </Wrapper>
    );
}