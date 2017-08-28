import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import Movie from '../containers/movie';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Movie />
      </div>
    );
  }
}
