import React, {
    Component
} from 'react';
import './person-details.css';
import SwapiService from '../../services/swapi-services';

export default class PersonDetails extends Component {

    swapiService = new SwapiService();
    state = {
        person: {}
    }

    componentDidMount() {
        this.swapiService
            .getPerson(this.props.id)
            .then((person) => {
                console.log(person)
                this.setState({
                    person
                })
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            this.swapiService
                .getPerson(this.props.id)
                .then((person) => {
                    this.setState({
                        person
                    })
                })
        }
    }



    render() {

        const { id, name, gender, birthYear, eyeColor } = this.state.person;

        console.log(name);

        return (
            <div className="person-details card" >
                <img className="person-image"
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

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