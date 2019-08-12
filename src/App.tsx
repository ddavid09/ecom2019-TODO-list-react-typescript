import React, { Component } from 'react';
import Task from './components/Task';
import TaskAddForm from './components/TaskAddForm';
import Board from './components/Board';

interface IAppState {
  tasks: Task[];
  newTaskText: string
}

export class App extends Component<{}, IAppState> {
  state = {
    tasks: [],
    newTaskText: ""
  }

  private addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let tempTasks: Task[] = [];
    tempTasks = this.state.tasks;
    tempTasks.push(new Task({ id: this.state.tasks.length + 1, taskText: this.state.newTaskText }));
    this.setState({
      tasks: tempTasks,
      newTaskText: ""
    });

  };

  private handleInputTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let tempString: string = event.target.value;
    console.log(tempString);
    this.setState({
      newTaskText: tempString,
    })
  };

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
