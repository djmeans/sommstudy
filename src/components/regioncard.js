import React, { Component } from "react";
import Varietal from './varietal'
import MapComponent from './map'

let ApiKey = process.env.REACT_APP_API_KEY

class RegionCard extends Component {
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    log(str){
        return console.log(str)
    }
    deleteRegion(){
        fetch(`https://somm-backend.herokuapp.com/regions/${this.props.info.id}`,{
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        }).then(res => 
            console.log(res) 
        )
    }

    render(){
        return (
        <div className='region' key={this.props.info.id}>
            {this.log(process.env.API_KEY)}
            <h2>{this.capitalizeFirstLetter(this.props.info && this.props.info.region) }</h2>
            <h4>{this.props.info && (this.props.info.appelation === null ? "No Appelation" :this.props.info.appelation)}</h4>
            <p>{this.capitalizeFirstLetter(this.props.info && this.props.info.varietal)}</p>
            <Varietal varietal={this.props.info.varietal} className='varietal'/>
            <MapComponent
                isMarkerShown
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${ApiKey}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ 
                    height: `50%`,
            }} />}
                mapElement={<div style={{ height: `90%` }} />}
                defaultCenter={{lat: parseInt(this.props.info.lat), lng: parseInt(this.props.info.long)}}
            />
            <button onClick={this.deleteRegion.bind(this)}>Delete the Region</button>
        </div>
        )
    }

}


export default RegionCard;
