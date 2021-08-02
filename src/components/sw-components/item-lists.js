import React from "react";
import ItemList from "../item-list";
import widthData from "../Hoc-Helper/width-data";
import withSwapiService from "../Hoc-Helper/with-swapi-service";




const withChildFunc = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props} > 
                {fn}
            </Wrapped>
        )
    }
}

// const ListWithChildren = withChildFunc(

//     ItemList,
//     ({name}) => <span>{name}</span> 
// )

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}

const PersonList = withSwapiService(widthData(ItemList), mapPersonMethodsToProps) 

const PlanetList = withSwapiService(widthData(ItemList), mapPlanetMethodsToProps) 
 
const StarshipList = withSwapiService(widthData(ItemList), mapStarshipMethodsToProps) 

export {
    PersonList,
    PlanetList,
    StarshipList
};