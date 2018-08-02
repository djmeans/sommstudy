import React, { Component } from "react";




class Varietal extends Component {
    constructor(){
        super()
        this.state = {
            wineInfo: []
        }
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

componentDidMount(){
    fetch(`https://somm-backend.herokuapp.com/varietals/${this.capitalizeFirstLetter(this.props.varietal)}`)
    .then(resp => resp.json())
    .then(data => data.varietal[0])
    .then(data => this.setState({ wineInfo: data }))
}

    render(){
        return (
            <div className='notesHolder'>
                    <p>{ this.state.wineInfo ? this.state.wineInfo.tastingNotes : 'Go to the Add Varietal page and add some notes about this grape' } </p>
            </div>
        )
    }

}


export default Varietal;