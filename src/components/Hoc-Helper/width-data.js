import React, {Component} from "react";
import Spinner from "../spinner";

const widthData = (View, getData) => {
    return class extends Component{

        state = {
            data: [],
        } 

        componentDidMount() {
            getData()
            .then((data) => {
                this.setState({
                    data
                })
                console.log(this.state);
            })
        } 
        render() {
            const {data} = this.state;
            if (!data) {
                return <Spinner/>
            }
            return <View {...this.props} data={data}/>
        }
    }
}

export default widthData;