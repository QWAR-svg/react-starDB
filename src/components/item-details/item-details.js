import React, {Component} from 'react';
import './item-details.css';
import SwapiService from '../../services/swapi-services';




const Rec = ({item, field, label}) => {
    return (
        <li className="list-group-item" >
        <span className="term" >{label}</span>
        <span > {item[field]} </span>
    </li>
    );
}

export {
    Rec
};


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
                // console.log(item)
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

        const { item } = this.state;
        const { id, name, gender, birthYear, eyeColor } = this.state.item;

        const {image} = this.state;
        return (
            <div className="person-details card" >
                <img className="person-image"
                    src={image} />

                <div className="card-body" >
                    <h4 > {name} </h4>

                    <ul className="list-group list-group-flush" >
                        {React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item});
                        })}

                    </ul>
                </div >
            </div>
        )
    }
}

