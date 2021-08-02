import React from "react"
import ItemDetails , {Rec}from "../item-details"
import withSwapiService from '../Hoc-Helper/with-swapi-service.js';

const PlanetDetails = (props) => {
    
   
        return (
        <ItemDetails 
            {...props}>
            <Rec field="rotationPeriod" label="Rotation" />
            <Rec field="diametr" label="Diameter" />
        </ItemDetails>
        )
                
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}

export default withSwapiService(PlanetDetails, mapMethodsToProps);