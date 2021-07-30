// import React, { Component } from 'react';
// import ItemList from '../item-list';
// import ItemDetails from '../item-details';




// export default class PeoplePage extends Component {

//     state = {
//         id: 3
//     }

//     onItemSelected = (id) => {
//         this.setState({ id });
//     }

    

//     render() {

//         console.log(this.props.showData);

//         const itemList =  (
//             <ItemList
//             getData={this.props.getData}
//             onItemSelected={this.onItemSelected}
            
//             />
//             )

//         const personDetails = (
//             <ItemDetails id={this.state.id}
//              getInform={this.props.getInform}
//              getImageUrl={this.props.getImageUrl}
//              >
//                  {/* <Record field="gender" label="Gender"/> 
//                  <Record field="eyeColor" label="Eye Color"/>  */}

//              </ItemDetails>
//         )

//         return (
//             <Row left={itemList}  right ={personDetails}/>
//         )
//     }
// }