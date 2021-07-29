import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import PersonDetails from '../item-details';
import './app.css';
import SwapiService from '../../services/swapi-services';

export default class App extends Component {

    swapiService = new SwapiService();

    render() {
        return (
            <div>
                <Header />
                <RandomPlanet />
                <PeoplePage
                    getData={this.swapiService.getAllPeople}
                    getInform={this.swapiService.getPerson}
                    getImageUrl={this.swapiService.getPersonImage}
                    
                />


                <PeoplePage
                    getData={this.swapiService.getAllPlanets}
                    getInform={this.swapiService.getPlanet}
                    getImageUrl={this.swapiService.getPlanetImage}
                />

            </div>
        )
    }
}
