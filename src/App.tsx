import React, { Component } from 'react';
import TaskAddForm from './components/TaskAddForm';
import Board from './components/Board';
import { TaskModel } from './models/TaskModel';

interface IAppState {
  tasks: TaskModel[];
  newTaskText: string
}

export class App extends Component<{}, IAppState> {
  state = {
    tasks: [],
    newTaskText: ""
  }

  private addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let tempTasks: TaskModel[] = [];
    tempTasks = this.state.tasks;
    tempTasks.push({ id: this.state.tasks.length + 1, text: this.state.newTaskText, done: false });
    this.setState({
      tasks: tempTasks,
      newTaskText: ""
    });
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));

  };

  private handleInputTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let tempString: string = event.target.value;
    console.log(tempString);
    this.setState({
      newTaskText: tempString,
    })
  };

  componentDidMount() {
    const restoredState = JSON.parse(localStorage.getItem('tasks') || '[]');
    this.setState({
      tasks: restoredState,
    })

  }


  render() {
    return (
      <div>
        <h1>Tasks TODO list</h1>
        <TaskAddForm
          onChange={this.handleInputTextChange}
          onAdd={this.addTask}
          inputText={this.state.newTaskText}
        />
        <Board tasks={this.state.tasks} />
      </div >
    );
  }

}

export default App;
