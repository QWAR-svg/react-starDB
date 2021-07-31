import React from "react";
import ItemDetails, {Rec} from "../item-details";
import SwapiService from "../../services/swapi-services";

const swapiService = new SwapiService()

const {
    getPerson, 
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService;


const PersonDetails = (id) => {
    return (
        <ItemDetails id={id}
        getInform={getPerson}
        getImageUrl={getPersonImage}
        >
             <Rec  field="gender" label="Gender" />
             <Rec  field="eyeColor" label="Eye Color" />
        </ItemDetails>
    )
}

const PlanetDetails = (id) => {
    return (
        <ItemDetails id={id}
        getInform={getPlanet}
        getImageUrl={getPlanetImage}
        >
             <Rec  field="gender" label="Gender" />
             <Rec  field="eyeColor" label="Eye Color" />
        </ItemDetails>
    )
}

const StarshipDetails = (id) => {
    return (
        <ItemDetails id={id}
        getInform={getStarship}
        getImageUrl={getStarshipImage}
        >
            <Rec  field="population" label="Population" />
            <Rec  field="rotationPeriod" label="Rotation" />
            <Rec  field="diametr" label="Diametr" />
        </ItemDetails>
    )
} 

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};