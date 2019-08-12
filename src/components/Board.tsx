import React, { Component } from 'react'
import Task from './Task';
import { TaskModel } from '../models/TaskModel';
import '../App.css';

interface IBoardProps {
    tasks: TaskModel[];
    markAsDoneFunc: (id: number) => void;

}

export class Board extends Component<IBoardProps> {


    render() {
        return (
            <div className='container'>
                {this.props.tasks.map(task => (
                    <Task
                        markAsDoneFunc={this.props.markAsDoneFunc}
                        key={task.id}
                        id={task.id}
                        done={task.done}
                        text={task.text}
                    />

                ))}
            </div>
        )
    }
}

export default Board
