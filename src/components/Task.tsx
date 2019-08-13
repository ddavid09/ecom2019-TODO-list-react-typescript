import React, { Component } from 'react'
import { TaskModel } from '../models/TaskModel';
import '../App.css';
import CancelImg from '../resources/cancel.png'
import MarkUpImg from '../resources/checked.png'

interface ITaskState {
    done: boolean;
    isMouseInside: boolean;
}

interface TaskComponentProps extends TaskModel {
    markAsDoneFunc: (id: number) => void;
}
export class Task extends Component<TaskComponentProps, ITaskState> {
    state: ITaskState;

    constructor(props: TaskComponentProps) {
        super(props);

        this.state = { done: this.props.done, isMouseInside: false };
        console.log("utworzono nowego taska: #" + this.props.id + " " + this.props.text);
    }

    onClick = () => {
        this.setState({
            done: true
        })
        this.props.markAsDoneFunc(this.props.id);
    }

    mouseEnter = () => {
        this.setState({ isMouseInside: true });
    }
    mouseLeave = () => {
        this.setState({ isMouseInside: false });
    }


    render() {
        let color: string;
        let text: any;
        let textColor: string;
        if (this.state.done) {
            color = '#96968f';
            text = <s>{this.props.text}</s>;
            textColor = "#696964";
        }
        else {
            color = '#ffff61';
            text = this.props.text;
            textColor = "#000000";
        }


        return (
            <div
                className='taskbtn'
                onClick={this.onClick}
                style={{ backgroundColor: color, color: textColor }}
                onMouseEnter={this.mouseEnter}
                onMouseLeave={this.mouseLeave}
            >
                {this.state.isMouseInside ? 
                <div className='taskbtn-overlay'>
                    <button className='overlay-button-delete'><img src={CancelImg} alt="DELETE"/></button>
                    <button className='overlay-button-mark'><img src={MarkUpImg} alt="MARK UP"/></button>
                </div> : null}
                <p>{text}</p>
            </div>
        )

    }
}

export default Task
