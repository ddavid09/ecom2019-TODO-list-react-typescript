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

    setDone = () => {
        this.setState({
            isDone: true
        })
    }

    render() {
        let color: string = 'blue';
        if (this.state.isDone) {
            color = 'red';
        }
        return (
            <div>
                <button onClick={this.setDone} style={{ backgroundColor: color }}>
                    {console.log("kliknieto stan taska: " + this.state.isDone)}
                    <p>Task TODO #{this.props.numOfTask}</p>
                    <p>{this.props.taskText}</p>
                </button>
            </div>
        )
    }
}

export default Task
