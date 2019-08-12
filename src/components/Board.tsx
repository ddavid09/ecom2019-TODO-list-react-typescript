import React, { Component } from 'react'
import Task from './Task';
import { TaskModel } from '../models/TaskModel';

interface IBoardProps {
    tasks: TaskModel[];
}

export class Board extends Component<IBoardProps> {


    render() {
        return (
            <div>
                <ul>
                    {this.props.tasks.map(task => (
                        <Task
                            key={task.id}
                            id={task.id}
                            done={task.done}
                            text={task.text}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Board
