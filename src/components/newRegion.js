import React, { Component } from 'react';

class AddForm extends Component {
    constructor(){
        super()
        this.state={
            newRegion:
                {
                    varietal:"",
                    country:"",
                    region:"",
                    appelation:null,
                    lat: null,
                    long: null
                },

        }
    }

    postNewRegion(e){
        e.preventDefault()
        let payload = this.state.newRegion
        return fetch(`https://somm-backend.herokuapp.com/regions/`,{
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
        })
    }


    onNewRegionChange = (event) => { 
        let region = this.state.newRegion
        region[event.target.name] = event.target.value
        this.setState({
            newRegion: region,
        })
    }
    
    render() {
        return (
            <div className='form'>
                <h3>Add a new Region</h3>
                <form onSubmit={this.postNewRegion.bind(this)}>
                    <label for='region'> Put the Region Name here</label>
                    <br></br>
                    <input 
                        type='text' 
                        name='region' 
                        value={this.state.newRegion.region}
                        onChange={this.onNewRegionChange.bind(this)} 
                        />
                    <br></br>
                    <label for='varietal'> Put the main Varietal here</label>
                    <br></br>
                    <input 
                        type='text' 
                        name='varietal' 
                        value={this.state.newRegion.varietal} 
                        onChange={this.onNewRegionChange.bind(this)}
                    />  
                    <br></br>
                    <label for='newTastingNotes'> Put the Country here</label>
                    <br></br>
                    <input 
                        type='text' 
                        name='country' 
                        value={this.state.newRegion.country} 
                        onChange={this.onNewRegionChange.bind(this)}
                    />  
                    <br></br>
                    <label for='newTastingNotes'>Latitude</label>
                    <br></br>
                    <input 
                        type='number' 
                        name='lat' 
                        value={this.state.newRegion.lat} 
                        onChange={this.onNewRegionChange.bind(this)}
                    />  
                    <br></br>
                    <label for='newTastingNotes'>Longitude</label>
                    <br></br>
                    <input 
                        type='number' 
                        name='long' 
                        value={this.state.newRegion.long} 
                        onChange={this.onNewRegionChange.bind(this)}
                    />  
                    <br></br>
                    <button type='submit'>Add Region</button>
                </form>
            </div>
        )
    
};
}
export default AddForm;