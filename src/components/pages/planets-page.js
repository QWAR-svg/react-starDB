import React, {Component} from 'react';
import { Row } from '../app/app.js';
import {
    PlanetDetails, 
    PlanetList
} from '../sw-components';

export default class PlanetPage extends Component {
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
            left={<PlanetList onItemSelected={this.onItemSelected} />}
            right={<PlanetDetails id={selectedItem} />} >
        </Row>
        )
    }
}