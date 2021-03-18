import React, {Component} from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList'

class App extends Component {
  state = { 
    tasks: []
   }

   addNewTask=(text,date,important)=>{
     const newTask = {
      id: this.state.tasks.length,
      text,
      date,
      important,
      active: true,
      finishDate: null
     }
     this.setState({
       tasks: [...this.state.tasks, newTask]
     })

     return true
   }

finishTask = (id)=> {
  const tasks = [...this.state.tasks];
  tasks.forEach(task=>{
    if(task.id === id){
      task.active = false;
      task.finishDate = new Date().getTime();
    }
  })
  this.setState({
    tasks
  })

  
}

deleteTask = (id) => {
  const tasks = [...this.state.tasks];
  const index = tasks.findIndex(task=> task.id === id);
  tasks.splice(index,1);
  this.setState({
    tasks
  })
  
  /* ALTERNATYWNA METODA:
  let tasks = Array.from(this.state.tasks);
  tasks = tasks.filter(task=> task.id !== id);
  this.setState({
    tasks
  })
  */
}

  render() { 
    const tasks = this.state.tasks
    return (
      <div className="wrapper">
        <h1>TODO App</h1>
        <AddTask add={this.addNewTask}/>
        <TaskList tasks={tasks} done={this.finishTask} delete={this.deleteTask}/>
      </div>
      );
  }
}
 
export default App;
