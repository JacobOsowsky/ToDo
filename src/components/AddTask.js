import React, {Component} from 'react';
import './AddTask.css'

class AddTask extends Component {
    state = { 
        text: "",
        checked: false,
        date: "2021-04-01"
     }
    render() { 
        return ( 
            <div className="add">
                <input type="text" placeholder="wpisz zadanie" id="text" value={this.state.text}></input>
                <input type="checkbox" id="checked" checked={this.state.checked}></input>
                <label htmlFor="checked">Priorytet</label> <br/>
                <label htmlFor="date">Do kiedy</label>
                <input type="date" id="date" value={this.state.date} min="2021-03-17" max="2021-05-01"></input> <br/>
                <button>Dodaj</button>
                
            </div>
         );
    }
}
 
export default AddTask;