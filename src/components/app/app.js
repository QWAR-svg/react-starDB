import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import './app.css';
import SwapiService from '../../services/swapi-services';
import ItemDetails, { Rec } from '../item-details/item-details';
import { PersonList, StarshipList, PlanetList , PersonDetails, StarshipDetails, PlanetDetails } from '../sw-components';
import { SwapiServiceProvider } from '../swapi-service-context';


const Row = ({ left, right }) => {
    return (
        <div className="row mb2">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    );
}



export default class App extends Component {

    swapiService = new SwapiService();

    render() {

        return (
            <div>
                <SwapiServiceProvider value={this.swapiService}>
                    <Header />
                    {/* <RandomPlanet /> */}
                    <PersonDetails id={6}/>
                     <StarshipDetails id = {5}/> 
                      <PlanetDetails id={5}/>  
                    <PersonList />
                    <StarshipList />
                    <PlanetList />
                </SwapiServiceProvider>
            </div>
        )
    }
}

