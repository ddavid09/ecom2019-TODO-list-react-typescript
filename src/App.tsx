import React, { Component } from 'react';
import TaskAddForm from './components/TaskAddForm';
import Board from './components/Board';
import { TaskModel } from './models/TaskModel';
import './App.css';

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

    const tempTasks: TaskModel[] = this.state.tasks.slice();
    tempTasks.push({ id: this.state.tasks.length + 1, text: this.state.newTaskText, done: false });
    this.setState({
      tasks: tempTasks,
      newTaskText: ""
    });
    localStorage.setItem('tasks', JSON.stringify(tempTasks));

  };

  private handleInputTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let tempString: string = event.target.value;
    console.log(tempString);
    this.setState({
      newTaskText: tempString,
    })
  };

  private markTaskAsDone = (id: number) => {
    const tempTasks: TaskModel[] = this.state.tasks.slice();
    tempTasks[id - 1].done = true;
    this.setState({
      tasks: tempTasks,
    });
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));

  }

  componentDidMount() {
    const restoredState = JSON.parse(localStorage.getItem('tasks') || '[]');
    this.setState({
      tasks: restoredState,
    })

  }


  render() {
    return (
      <div className='App'>
        <header>Simple TODO List</header>
        <div className='input-section'>
          <TaskAddForm
            onChange={this.handleInputTextChange}
            onAdd={this.addTask}
            inputText={this.state.newTaskText}
          />
        </div>

        <Board markAsDoneFunc={this.markTaskAsDone} tasks={this.state.tasks} />
      </div >
    );
  }

}

export default App;
