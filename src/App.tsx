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
    tempTasks.push({ id: this.state.tasks.length, text: this.state.newTaskText, done: false });
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
    const indexToMarkUp: number = tempTasks.findIndex((element: TaskModel) => { return element.id === id });
    tempTasks[indexToMarkUp].done = true;
    this.setState({
      tasks: tempTasks,
    });
    localStorage.setItem('tasks', JSON.stringify(tempTasks));

  }

  private deleteTask = (id: number) => {
    const tempTasks: TaskModel[] = this.state.tasks.slice();
    const indexToDelete: number = tempTasks.findIndex((element: TaskModel) => { return element.id === id });
    tempTasks.splice(indexToDelete, 1);
    this.setState({
      tasks: tempTasks,
    });
    localStorage.setItem('tasks', JSON.stringify(tempTasks));
  }

  private backTask = (id: number) => {
    const tempTasks: TaskModel[] = this.state.tasks.slice();
    const indexToMarkUp: number = tempTasks.findIndex((element: TaskModel) => { return element.id === id });
    tempTasks[indexToMarkUp].done = false;
    this.setState({
      tasks: tempTasks,
    });
    localStorage.setItem('tasks', JSON.stringify(tempTasks));
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

        <Board backTask={this.backTask} deleteTask={this.deleteTask} markAsDoneFunc={this.markTaskAsDone} tasks={this.state.tasks} />
      </div >
    );
  }

}

export default App;
