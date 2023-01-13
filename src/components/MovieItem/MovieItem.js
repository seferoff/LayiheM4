import React, { Component } from "react";
import "./MovieItem.css";
import {connect} from 'react-redux';

class MovieItem extends Component {

    addFavMovie = (e) => {
        this.props.movies.map((movie) => {
                if (e.target.value === movie.imdbID) {
                    const clone = this.props.favMovies
                    clone.push(movie)
                    console.log(this.props.favMovies);
                }
                return this.props.favMovies
        })
    }

  render() {
    const { Title, Year, Poster, imdbID } = this.props;
    return (
      <article className="movie-item">
        <img className="movie-item__poster" src={Poster} alt={Title} />
        <div className="movie-item__info">
          <h3 className="movie-item__title">
            {Title}&nbsp;({Year})
          </h3>
          <button
            type="button"
            className="movie-item__add-button"
            value={imdbID}
            onClick={this.addFavMovie}
          >
            Добавить в список
          </button>
        </div>
      </article>
    );
  }
}

const mapStateToProps = store => ({
    movies: store.movies,
    favMovies: store.favMovies
})


export default connect(mapStateToProps)(MovieItem);
