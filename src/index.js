//create a new component. This component should produce some html.
// put the component HTML and put it on page. In the DOM.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
 //declare a variable to hold Youtube API key
const API_KEY = 'AIzaSyC80D-KKhajH2HVkaDYiJqt7_7UwNDdh5c';

YTSearch({key: API_KEY, term: 'Surfboards'}, function(data) {
  console.log(data);
});

//you have to create an app component and render components inside.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//where to render the app.
ReactDOM.render(<App />, document.querySelector('.container'))
