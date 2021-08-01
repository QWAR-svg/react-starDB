import React from "react"
import ItemDetails , {Rec}from "../item-details"
import { SwapiServiceConsumer } from "../swapi-service-context"

const StarshipDetails = ({id}) => {
    console.log(id)

    return (
        <SwapiServiceConsumer>
         {
             ({getStarship, getStarshipImage}) => {
        return (
        <ItemDetails 
            id={id}
            getInform={getStarship}
            getImageUrl={getStarshipImage}>
            <Rec field="model" label="Model" />
            <Rec field="manufacturer" label="Manu" />
            <Rec field="passengers" label="Pass" />
        </ItemDetails>
        )
             }
         }
        </SwapiServiceConsumer>
    )
}

export default StarshipDetails;