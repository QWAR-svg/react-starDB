import React from 'react';
// import SwapiService from '../../services/swapi-services';
import './item-list.css';

 const ItemList  = (props) => {
    const {data, children: renderLabel, onItemSelected} = props;
    
       const items = data.map((item) => {
           
           const {id} = item;
           
            return <li className="list-group-item" key={id} onClick=
            {() => {
                onItemSelected(id)
            }}
            >{item.name}</li>
        })
    

    
    return (
            <ul className="item-list list-group">
                {items}
            </ul>
    )
}

ItemList.defaultProps = {
    onItemSelected: () => {}
}

export default ItemList;




