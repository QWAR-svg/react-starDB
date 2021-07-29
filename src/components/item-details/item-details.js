import React, {Component} from 'react';
import './item-details.css';
import SwapiService from '../../services/swapi-services';

export default class ItemDetails extends Component {

    swapiService = new SwapiService();
    state = {
        item: {},
        image: null
    }

    componentDidMount() {
        const {id, getInform, getImageUrl} = this.props
            getInform(id)
            .then((item) => {
                console.log(item)
                this.setState({
                    item,
                    image: getImageUrl(item)
                })
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            const {id, getInform, getImageUrl} = this.props
            getInform(id)
                .then((item) => {
                    this.setState({
                        item,
                        image: getImageUrl(item)
                    })
                })
        }
    }



    render() {

        const { id, name, gender, birthYear, eyeColor } = this.state.item;

        console.log(name);
        const {image} = this.state;
        return (
            <div className="person-details card" >
                <img className="person-image"
                    src={image} />

                <div className="card-body" >
                    <h4 > {name} </h4>

                    <ul className="list-group list-group-flush" >
                        <li className="list-group-item" >
                            <span className="term" > Gender </span>
                            <span> {gender} </span>
                        </li>
                        <li className="list-group-item" >
                            <span className="term" >Year </span>
                            <span > {birthYear} </span>
                        </li>
                        <li className="list-group-item" >
                            <span className="term" > Color eye</span>
                            <span> {eyeColor} </span>
                        </li>

                    </ul>
                </div >
            </div>
        )
    }
}