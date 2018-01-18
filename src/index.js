//create a new component. This component should produce some html.
// put the component HTML and put it on page. In the DOM.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list';
 //declare a variable to hold Youtube API key
const API_KEY = 'AIzaSyC80D-KKhajH2HVkaDYiJqt7_7UwNDdh5c';


//you have to create an app component and render components inside.
// constructor always called with props.
class App extends Component {
  constructor(props) {
    super(props);

      this.state = { videos: [] };

      YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
        //update state with new list
        // key and values are identical = use ES6 syntax
        // so instead of {videos:videos} just do {videos}
        this.setState({videos});
      });
  }

  render () {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
//passing props - the data that were passing is refered to as a prop.
//where to render the app.
ReactDOM.render(<App />, document.querySelector('.container'))
