import React from 'react';
import Task from '../Task'


export default function Tasks({ tasks }) {
    return (
        <div>
            {tasks.map((task) => (
                <Task task={task}/>
            ))}
        </div>
    );
}