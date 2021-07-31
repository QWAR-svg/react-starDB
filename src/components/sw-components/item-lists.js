import React from "react";
import ItemList from "../item-list";
import widthData from "../Hoc-Helper/width-data";
import SwapiService from "../../services/swapi-services";

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;

const withChildFunc = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props} > 
                {fn}
            </Wrapped>
        )
    }
}

const ListWithChildren = withChildFunc(
    ItemList,
    ({name}) => <span>{name}</span> 
)

const PersonList = widthData(ListWithChildren, getAllPeople) 

const PlanetList = widthData(ListWithChildren, getAllPlanets) 
 
const StarshipList = widthData(ListWithChildren, getAllStarships) 

export {
    PersonList,
    PlanetList,
    StarshipList
};