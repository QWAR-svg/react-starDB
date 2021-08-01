import React from "react"
import ItemDetails , {Rec} from "../item-details"
import { SwapiServiceConsumer } from "../swapi-service-context"
import withSwapiService from "../Hoc-Helper/with-swapi-service"


const PersonDetails = ({id, swapiService}) => {

    const {getPerson, getPersonImage} = swapiService;

        return (
        <ItemDetails 
            id={id}
            getInform={getPerson}
            getImageUrl={getPersonImage}>
            <Rec field="gender" label="Gender" />
            <Rec field="eyeColor" label="Eye Color" />
        </ItemDetails>
        )

}

export default withSwapiService(PersonDetails);
