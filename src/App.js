import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import TMDB from './TMDB';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing films={TMDB.films}/>
          <FilmDetails films={TMDB.films}/>
        </div>
      </div>
    );
  }
}