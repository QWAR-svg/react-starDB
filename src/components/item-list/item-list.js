import React, {Component} from 'react';
import SwapiService from '../../services/swapi-services';
import './item-list.css';
import Spinner from '../spinner';

export default class ItemList extends Component {

  
    swapiService = new SwapiService();
    state = {
        peopleList: [],
    }


    componentDidMount() {
        this.swapiService
        .getAllPeople()
        .then((peopleList) => {
            this.setState({
                peopleList
            })
         
        })
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return <li className="list-group-item" key={id} onClick={() => {
                this.props.onItemSelected(id)
            }}>{name}</li>
        })
    }


    render() {
        const {peopleList} = this.state;
        const x = this.renderItems(peopleList)

        if (!peopleList) {
            return <Spinner/>
        }
        return (
            <ul className="item-list list-group">
                {x}
            </ul>
         )
    }
}


