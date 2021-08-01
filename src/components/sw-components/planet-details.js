import React from "react"
import ItemDetails , {Rec}from "../item-details"
import { SwapiServiceConsumer } from "../swapi-service-context"


const PlanetDetails = ({id}) => {
    return (
        <SwapiServiceConsumer>
         {
             ({getPlanet, getPlanetImage}) => {
        return (
        <ItemDetails 
            id={id}
            getInform={getPlanet}
            getImageUrl={getPlanetImage}>
            <Rec field="rotationPeriod" label="Rotation" />
            <Rec field="diametr" label="Diameter" />
        </ItemDetails>
        )
             }
         }
        </SwapiServiceConsumer>
    )
}


export default PlanetDetails;