import React, { Component } from 'react';
import SwapiService from '../../services/swapi-services';
import Spinner from '../spinner';
import './random-planet.css';
import ErrorIndicator from '../error-indicator';


export default class RandomPlanet extends Component {


  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 1500)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
    swapiService = new SwapiService();
    
    state = {
       planet: {},
       loading: true,
       error: false
    }

    onError = (err) => {
      this.setState({error: true, loading: false});
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet, loading: false})
    };
 
     updatePlanet = () => {
        const id = Math.floor(Math.random()*25) + 2;
        this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded) 
        .catch(this.onError);
    }


  render() {

    const {planet, loading, error} = this.state
    const hasData = !(loading || error)
    const errorMessage = error ? <ErrorIndicator/> : null;
    const content = hasData ? <PlanetView planet = {planet}/> : null
    const spinner = loading ? <Spinner/> : null;
    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>

    );
  }
}

const PlanetView = ({planet}) => {


  
  const { id, name,population, rotationPeriod, diametr} = planet

  return (
    <React.Fragment>
      <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diametr}</span>
            </li>
          </ul>
        </div>
    </React.Fragment>
  )
}