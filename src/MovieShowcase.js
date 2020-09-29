import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
<<<<<<< HEAD
    return movieData.map((data, index) => <MovieCard key={index} {...data} />);
  };
=======
    // return movieData.map(data, index) => <MovieCard key={index} {...data}/>
  }
>>>>>>> 7958f8716b5bfa598c949d62f11f117098d89dc0

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
