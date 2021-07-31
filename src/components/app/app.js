import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import './app.css';
import SwapiService from '../../services/swapi-services';
import ItemDetails, { Rec } from '../item-details/item-details';
import { PersonList } from '../sw-components';

const Row = ({left, right}) => {
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

        const personDetails = (
            <ItemDetails id={11}
             getInform={this.swapiService.getPerson}
             getImageUrl={this.swapiService.getPersonImage}
             >
                  <Rec  field="gender" label="Gender" />
                  <Rec  field="eyeColor" label="Eye Color" />
             </ItemDetails>
        )
        
        
        const planetDetails = (
            <ItemDetails id={7}
             getInform={this.swapiService.getPlanet}
             getImageUrl={this.swapiService.getPlanetImage}
             >
               <Rec  field="population" label="Population" />
                <Rec  field="rotationPeriod" label="Rotation" />
                <Rec  field="diametr" label="Diametr" />

 
             </ItemDetails>
        )
        return (
            <div>
                <Header />
                <RandomPlanet />
               
               <PersonList/> 
                
               

            </div>
        )
      }
    }

