import React, {Component} from "react";
import Spinner from "../spinner";

const widthData = (View) => {
    
    return class extends Component{
        state = {
            data: [],
        } 

        componentDidMount() {
            this.props.getData()
            .then((data) => {
                this.setState({
                    data
                })
               
            })
        } 
        render() {
            const {data} = this.state;
            console.log(this.props)
            if (!data) {
                return <Spinner/>
            }
            return <View {...this.props} data={data}/>
        }
    }
}

export default widthData;