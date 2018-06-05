import React, { Component } from 'react';
import { Form, FormGroup, Input} from 'reactstrap';

class SearchBar extends Component {
  state = {
    searchTerm: ""
  }

handleInputChange(searchTerm) {
    this.setState({ searchTerm });
    //run runSearch method pased in as a prop
    this.props.runSearch(searchTerm);
};


  render() {
    return (
     <Form>
       <FormGroup>
         <Input 
          type="text"
          placeholder="Search Bar"
          value={this.state.searchTerm}
          //run this event later when they input value is changed
          //event.target is actual element that trigger the click
          //Onchange will take in what event the user puts, when they do, will kick off on change of the input field. From there grab the state of which and give it event.target.value
          onChange={(event) => this.handleInputChange(event.target.value)}
         />
        </FormGroup>
     </Form>  

    )
  }
}



export default SearchBar;