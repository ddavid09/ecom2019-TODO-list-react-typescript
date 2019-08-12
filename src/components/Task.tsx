import React, { Component } from 'react'
import { TaskModel } from '../models/TaskModel';
import '../App.css';

interface ITaskState {
    done: boolean;
}

interface TaskComponentProps extends TaskModel{
    markAsDoneFunc: (id: number) => void;
}
export class Task extends Component<TaskComponentProps, ITaskState> {
    state: ITaskState;

    constructor(props: TaskComponentProps) {
        super(props);

        this.state = { done: this.props.done };
        console.log("utworzono nowego taska: #" + this.props.id + " " + this.props.text);
    }

    onClick = () => {
        this.setState({
            done: true
        })
        this.props.markAsDoneFunc(this.props.id);
    }

    render() {
        let color: string;
        if (this.state.done) color = 'red'
        else color = 'blue'

        return (
            <div>
                <button className='taskbtn' onClick={this.onClick} style={{ backgroundColor: color }}>
                    <p>Task TODO #{this.props.id}</p>
                    <p>{this.props.text}</p>
                </button>
            </div>
        )
    }
}

export default Task
