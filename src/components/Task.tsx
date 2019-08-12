import React, { Component } from 'react'
import { TaskModel } from '../models/TaskModel';

interface ITaskState {
    done: boolean;
}
export class Task extends Component<TaskModel, ITaskState> {
    state: ITaskState;

    constructor(props: TaskModel) {
        super(props);

        this.state = { done: this.props.done };
        console.log("utworzono nowego taska: #" + this.props.id + " " + this.props.text);
    }


    render() {
        let color: string;
        if (this.state.done) color = 'red'
        else color = 'blue'

                return (
            <div>
                <button style={{ backgroundColor: color }}>
                    <p>Task TODO #{this.props.id}</p>
                    <p>{this.props.text}</p>
                </button>
            </div>
        )
    }
}

export default Task
