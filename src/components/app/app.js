import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import SwapiService from '../../services/swapi-services';
import { StarshipList, PlanetList,StarshipDetails, PlanetDetails } from '../sw-components';
import { SwapiServiceProvider } from '../swapi-service-context';
import {PeoplePage, StarshipPage, PlanetPage} from '../pages';

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

export {
    Row
}


export default class App extends Component {
    swapiService = new SwapiService();
    render() {
        return (
            <div>
                <SwapiServiceProvider value={this.swapiService}>
                    <Header />
                    {/* <RandomPlanet /> */}
                    <PeoplePage/>
                    <PlanetPage/>
                    <StarshipPage/>                    
                </SwapiServiceProvider>
            </div>
        )
    }
}

