import React, { Component } from 'react';

class AddForm extends Component {
    constructor(){
        super()
        this.state={
            newVarietal:{
                tastingNotes:'',
                varietal:''
            }

        }
    }
    
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    postNewVarietal(e){
        e.preventDefault()
        let payload = this.state.newVarietal
        return fetch(`https://somm-backend.herokuapp.com/varietals/`,{
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
        })
    }


    onNewVarietalChange = (event) => { 
        let varietal = this.state.newVarietal
        varietal[event.target.name] = this.capitalizeFirstLetter(event.target.value)   
        this.setState({
            newVarietal: varietal,
        })
    }
    
    render() {
        return (
            <div className='form'>
                <h3>Add a new Varietal</h3>
                <form onSubmit={this.postNewVarietal.bind(this)}>
                    <label for='newVarietal'> Put the Vaietal Name here: (Use Caps)</label>
                    <br></br>
                    <input 
                        type='text' 
                        name='varietal' 
                        value={this.state.newVarietal.varietal}
                        onChange={this.onNewVarietalChange.bind(this)} 
                        />
                    <br></br>
                    <label for='newTastingNotes'> Put the tasting notes here</label>
                    <br></br>
                    <input 
                        type='text' 
                        name='tastingNotes' 
                        value={this.state.newVarietal.tastingNotes} 
                        onChange={this.onNewVarietalChange.bind(this)}
                    />  
                    <br></br>
                    <button type='submit'>Add Varietal</button>
                </form>
            </div>
        )
    
};
}
export default AddForm;