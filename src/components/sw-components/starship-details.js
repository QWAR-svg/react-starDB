import React from "react"
import ItemDetails , {Rec}from "../item-details";
import withSwapiService from '../Hoc-Helper/with-swapi-service.js';

const StarshipDetails = (props) => {
   
        return (
        <ItemDetails 
            {...props}>
            <Rec field="model" label="Model" />
            <Rec field="manufacturer" label="Manu" />
            <Rec field="passengers" label="Pass" />
        </ItemDetails>
        )

}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
}

export default withSwapiService(StarshipDetails, mapMethodsToProps);