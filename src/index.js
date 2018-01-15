//create a new component. This component should produce some html.
// put the component HTML and put it on page. In the DOM.
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';
 //declare a variable to hold Youtube API key
const API_KEY = 'AIzaSyC80D-KKhajH2HVkaDYiJqt7_7UwNDdh5c';

//you have to create an app component and render components inside.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'))
