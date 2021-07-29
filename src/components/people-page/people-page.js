import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';


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



export default class PeoplePage extends Component {

    state = {
        id: 3
    }

    onItemSelected = (id) => {
        this.setState({ id });
    }

    

    render() {

        const itemList =  (
            <ItemList
            getData={this.props.getData}
            onItemSelected={this.onItemSelected}
            
            />
            )

        const personDetails = (
            <ItemDetails id={this.state.id}
             getInform={this.props.getInform}
             getImageUrl={this.props.getImageUrl}
             />
        )

        return (
            <Row left={itemList}  right ={personDetails}/>
        )
    }
}