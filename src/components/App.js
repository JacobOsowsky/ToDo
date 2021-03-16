import React, {Component} from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList'

class App extends Component {
  state = { 
    tasks: [
      {
        id: 0,
        text: 'Umyć samochód',
        date: '2018-03-13',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'Pograć w LoLa',
        date: '2018-08-10',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'Zrobić obiad',
        date: '2018-01-03',
        important: true,
        active: true,
        finishDate: null
      }
    ]
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
        <AddTask/>
        <TaskList tasks={tasks} done={this.finishTask} delete={this.deleteTask}/>
      </div>
      );
  }
}
 
export default App;
