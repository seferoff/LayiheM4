import React, { Component } from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";
import { connect } from "react-redux";

class Movies extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {(() => {
          if (movies === undefined) {
            return (
              <>
                <div className="noMovie">There is no movie for this search.</div>
                <div>Please try again!</div>
              </>
            );
          } else {
            return (
              <ul className="movies">
                {movies.map((movie) => (
                  <li className="movies__item" key={movie.imdbID}>
                    <MovieItem {...movie} />
                  </li>
                ))}
              </ul>
            );
          }
        })()}
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  movies: store.movies,
  favMovies: store.favMovies,
});

export default connect(mapStateToProps)(Movies);
