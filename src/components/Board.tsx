import React, { Component } from 'react'
import Task from './Task';
import { TaskModel } from '../models/TaskModel';

interface IBoardProps {
    tasks: TaskModel[];
    markAsDoneFunc: (id: number) => void;

}

export class Board extends Component<IBoardProps> {


    render() {
        return (
            <div>
                <ul>
                    {this.props.tasks.map(task => (
                        <Task
                            markAsDoneFunc={this.props.markAsDoneFunc}
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
