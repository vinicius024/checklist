import React from 'react'
import { Wrapper, Tittle } from './styled'

export default function Task({ task }) {

    return (
        <Wrapper>
            <Tittle>{task.tittle}</Tittle>
            
        </Wrapper>
    );
}