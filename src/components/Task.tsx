import React, { Component } from 'react'

interface ITaskProps {
    id: number;
    taskText: string;
}

interface ITaskState {
    text: string;
    isDone: boolean;
    color: string;
}


export class Task extends Component<ITaskProps, ITaskState> {
    state: ITaskState;

    constructor(props: ITaskProps) {
        super(props);
        this.state = { text: this.props.taskText, isDone: false, color: 'blue' };
        console.log("utworzono nowego taska: #" + this.props.id + " " + this.props.taskText);
    }

    setDone = () => {
        this.setState({
            isDone: true,
            color: 'red'
        })
    }

    changeText = (txt: string) => {
        this.setState({
            text: txt,
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
