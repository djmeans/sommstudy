import React, { Component } from 'react';

class UpdateForm extends Component {
    constructor(){
        super()
        this.state={
            updateVarietal:{
                tastingNotes:'',
                varietal: ''
            }
        }
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    updateVarietal(e){
        e.preventDefault()
        let payload = this.state.updateVarietal
        return fetch(`https://somm-backend.herokuapp.com/varietals/${this.state.updateVarietal.varietal}`, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
        })
    }

    onUpdateChange = (event) => { 
        let varietal = this.state.updateVarietal
        varietal[event.target.name] = this.capitalizeFirstLetter(event.target.value)
        this.setState({
            updateVarietal: varietal,
        })
    }
    
    render() {
        return (
            <div className='form'>
                <h3>Update an Existing Varietal</h3>
                <form onSubmit={this.updateVarietal.bind(this)}>
                    <label for='varietal'> Update the Vaietal Name here (Use Caps)</label>
                    <br></br>
                    <input 
                        type='text' 
                        name='varietal' 
                        value={this.state.updateVarietal.varietal}
                        onChange={this.onUpdateChange.bind(this)} 
                        />
                    <br></br>
                    <label for='tastingNotes'> Update the tasting notes here</label>
                    <br></br>
                    <input 
                        type='text' 
                        name='tastingNotes' 
                        value={this.state.updateVarietal.tastingNotes} 
                        onChange={this.onUpdateChange.bind(this)}
                    />  
                    <br></br>
                    <button type='submit'> Update Varietal</button>
                </form>
            </div>
        )
    
};
}
export default UpdateForm;