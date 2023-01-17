import React, { Component } from "react";
import "./MovieItem.css";
import { connect } from "react-redux";

class MovieItem extends Component {
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
            onClick={() => this.props.addFavMovie(this.props)}
          >
            Add to the list
          </button>
        </div>
      </article>
    );
  }
}

const mapStateToProps = (store) => ({
  movies: store.movies,
  favMovies: store.favMovies,
});

const mapDispatchToProps = (dispatch) => ({
  addFavMovie: (favMovies) =>
    dispatch({ type: "ADD_FAV_MOVIE", payload: favMovies }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);
