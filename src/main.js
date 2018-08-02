import React, { Component, Fragment } from 'react';
import RegionCard from './components/regioncard'
import './App.css';


class Main extends Component {
  constructor(){
    super()
    this.state={
      allRegions:[],
      filteredData:[]
    }
  }

  filterRegionData(arr){
    let whites = arr.filter(wine => wine.id < 24)
    let reds = arr.filter(wine => wine.id > 23)
    let france = arr.filter(wine => wine.country === 'France')
    let aus = arr.filter(wine => wine.country === 'Australia')
    let italy = arr.filter(wine => wine.country === 'Italy')
    let usa = arr.filter(wine => wine.country === 'United States')
    let spain = arr.filter(wine => wine.country === 'Spain')
    let arg = arr.filter(wine => wine.country === 'Argentina')
    let chile = arr.filter(wine => wine.country === 'Chile')
    let nz = arr.filter(wine => wine.country === 'New Zealand')
    let germany = arr.filter(wine=> wine.country === 'Germany')
    this.setState({ 
      whites,
      reds,
      filteredData:[
        france,
        aus,
        italy,
        usa, 
        nz,
        arg,
        chile,
        spain,
        germany
        ]
    })
  }

  createCounrtyDiv(arr){
    return arr.map(country => {
      return (
      <div className='country' key ={country[0] && country[0].id}>
        <h1>{country[0] && country[0].country}</h1>
        {country.map( item => {
          return (
            <Fragment>
              <RegionCard info={item} key={item.id} className="regionCard"></RegionCard>
            </Fragment>
          )
        })}
      </div>
      )
    })
  }

  componentDidMount(){
    fetch(`https://somm-backend.herokuapp.com/regions`)
    .then(res => res.json())
    .then(data => data.regions)
    .then(regions => {
      this.setState({allRegions: regions})
      return regions
      })
    .then(regions => this.filterRegionData(regions))
  }
  
  render() {
    return (
      <div className="App">
        {
        this.state.filteredData[0] && this.createCounrtyDiv(this.state.filteredData)
        }
     
      </div>
    );
  }
}

export default Main;
