import React, { Component } from 'react'
import Task from './Task';

interface IBoardProps {
    tasks: Task[];
}

export class Board extends Component<IBoardProps> {


    render() {
        return (
            <div>
                <ul>
                    {this.props.tasks.map(task => (
                        <Task id={task.props.id} taskText={task.props.taskText} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Board
