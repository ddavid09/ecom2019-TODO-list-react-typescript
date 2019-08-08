import React, { Component } from 'react'
import Task from './Task';


export class Board extends Component {
    render() {
        return (
            <div>
                <Task numOfTask={1} taskText="Posprzątaj pokój" />
            </div>
        )
    }
}

export default Board
