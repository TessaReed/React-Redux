//purpose of this component, type into imput & make api request
import React, { Component } from 'react';
// curly braces means import reace and pull off property component as a variable.

// create a function that returns an input
// plain JS functional component

// const SearchBar = () => {
//   return <input />;
// };

//class component is used when we want a component to be
//aware of itself. Component needs to speak to application.
// use ES6 class.

// define a new class & give it access to all of functionality that react.Component has.
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }
//term is search term, so whenever the user searches, the term will update.
// to be the value of the input.


  render () {
    return <input onChange={event => this.setState({term : event.target.value})} />;
  }
}
  //whenever user interacts you have a change event.



  //event handler - always called with an event object.
  // event.target.value - get access to input
  // use arrow function to combact code
  /* onInputChange(event) {
    console.log(event.target.value);
  } */


export default SearchBar;
//this is so any file that imports searchbar will get searchbarcomponent
