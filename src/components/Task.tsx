import React, { Component } from 'react'

interface ITaskProps {
    id: number;
    taskText: string;
}

interface ITaskState {
    isDone: boolean;
    color: string;
}


export class Task extends Component<ITaskProps, ITaskState> {

    state: ITaskState;

    constructor(props: ITaskProps) {
        super(props);
        this.state = { isDone: false, color: 'blue' };
    }

    setDone = () => {
        this.setState({
            isDone: true,
            color: 'red'
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.setDone} style={{ backgroundColor: this.state.color }}>
                    <p>Task TODO #{this.props.id}</p>
                    <p>{this.props.taskText}</p>
                </button>
            </div>
        )
    }
}

export default Task
