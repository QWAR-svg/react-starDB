import React, {Component} from 'react';
// import SwapiService from '../../services/swapi-services';
import './item-list.css';

 const ItemList  = (props) => {

    const {data, children: renderLabel} = props;
   
       const items = data.map((item) => {
           const {id} = item;
            return <li className="list-group-item" key={id} onClick=
            {() => {
                this.props.onItemSelected(id)
            }}
            >{item.name}</li>
        })
    

    
    return (
            <ul className="item-list list-group">
                {items}
            </ul>
    )
}

export default ItemList;




