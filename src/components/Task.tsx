import React, { Component } from 'react'
import { TaskModel } from '../models/TaskModel';
import '../App.css';

interface ITaskState {
    done: boolean;
}

interface TaskComponentProps extends TaskModel {
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
        let text: any;
        let textColor: string;
        if (this.state.done){
            color = '#96968f';
            text = <s>{this.props.text}</s>;
            textColor = "#696964";
        } 
        else{
            color = '#ffff61';
            text = this.props.text;
            textColor = "#000000";
        } 

        return (
            <div className='taskbtn'>
                <button onClick={this.onClick} style={{ backgroundColor: color, color: textColor }}>
                    <p>{text}</p>
                </button>
            </div>
        )
    }
}

export default Task
