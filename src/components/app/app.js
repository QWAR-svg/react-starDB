import React , {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';


export default class App extends Component {

    state = {
        id: 1
    }

    onItemSelected= (id) => {
        this.setState({id});
    }

    render() {
        return (
            <div>
                <Header/>
                <RandomPlanet/>
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                        
                        onItemSelected={this.onItemSelected}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails id={this.state.id}/>
                    </div>
                </div>
            </div>
        )
    }
}
