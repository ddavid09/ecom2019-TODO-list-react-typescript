import React, { Component } from 'react'

interface ITaskProps {
    numOfTask: number
    taskText: string;
}

interface ITaskState {
    isDone: boolean;
}


export class Task extends Component<ITaskProps, ITaskState> {
    state: ITaskState;

    constructor(props: ITaskProps) {
        super(props);
        this.state = { isDone: false };
    }

    render() {
        return (
            <div>
                <p>Task TODO #{this.props.numOfTask}</p>
                <p>{this.props.taskText}</p>
            </div>
        )
    }
}

export default Task
