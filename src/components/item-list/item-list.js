import React, {Component} from 'react';
// import SwapiService from '../../services/swapi-services';
import './item-list.css';
import Spinner from '../spinner';

export default class ItemList extends Component {

  
 
    state = {
        ItemList: [],
    }


    componentDidMount() {
        const {getData} = this.props;
        
        getData()
        .then((ItemList) => {
            this.setState({
                ItemList
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
        const {ItemList} = this.state;
        const x = this.renderItems(ItemList)

        if (!ItemList) {
            return <Spinner/>
        }
        return (
            <ul className="item-list list-group">
                {x}
            </ul>
         )
    }
}


