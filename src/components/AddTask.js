import React, {Component} from 'react';
import './AddTask.css'

class AddTask extends Component {
    state = { 
        text: "",
        checked: false,
        date: new Date().toISOString().slice(0,10)
     }
changeText=(e)=>{
this.setState({
    text: e.target.value
})
}

changeCheckbox=(e)=>{
    this.setState({
        checked: e.target.checked
    })
    }


changeDate=(e)=> {
this.setState({
    date: e.target.value
})
}

    render() { 
        const minDate = new Date().toISOString().slice(0,10);
        let maxDate = minDate.slice(0,4) *1 + 1;
        maxDate = maxDate + minDate.slice(4,10)
        return ( 
            <div className="add">
                <input type="text" placeholder="wpisz zadanie" id="text" value={this.state.text} onChange={this.changeText}></input>
                <input type="checkbox" id="checked" checked={this.state.checked} onChange={this.changeCheckbox}></input>
                <label htmlFor="checked">Priorytet</label> <br/>
                <label htmlFor="date">Do kiedy</label>
                <input type="date" id="date" value={this.state.date} min={minDate} max={maxDate} onChange={this.changeDate}></input> <br/>
                <button>Dodaj</button>
                
            </div>
         );
    }
}
 
export default AddTask;