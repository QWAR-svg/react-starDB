import React, {Component} from 'react';
import { Row } from '../app/app.js';
import {
    StarshipDetails, 
    StarshipList
} from '../sw-components';

export default class StarshipPage extends Component {
    state = {
        selectedItem: 3
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render() {
        const {selectedItem} = this.state;
        return (
            <Row
            left={<StarshipList onItemSelected={this.onItemSelected} />}
            right={<StarshipDetails id={selectedItem} />} >
        </Row>
        )
    }
}