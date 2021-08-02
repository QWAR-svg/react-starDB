import React from "react"
import ItemDetails , {Rec} from "../item-details"
import withSwapiService from "../Hoc-Helper/with-swapi-service.js"


const PersonDetails = (props) => {
        // console.log(props);

        return (
        <ItemDetails 
            {...props}>
            <Rec field="gender" label="Gender" />
            <Rec field="eyeColor" label="Eye Color" />
        </ItemDetails>
        )

}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}

export default withSwapiService(PersonDetails, mapMethodsToProps);
