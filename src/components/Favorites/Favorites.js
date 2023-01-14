import React, { Component } from "react";
import "./Favorites.css";
import { connect } from "react-redux";

class Favorites extends Component {
  state = {
    inputValue: "",
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const { inputValue } = this.state;
    const { favMovies } = this.props;

    return (
      <div className="favorites">
        <input
          value={inputValue}
          className="favorites__name"
          onChange={this.handleChange}
          placeholder="Новый список"
        />
        <ul className="favorites__list">
          {favMovies.map((movie) => {
            return (
              <li className="favMovie" key={movie.imdbID}>
                <div>
                  {movie.Title} {movie.Year}
                </div>
                <button
                  key={movie.imdbID}
                  data-index={movie.imdbID}
                  type="button"
                  onClick={(e) => this.props.deleteFavMovie(e.target.getAttribute("data-index"))}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          className="favorites__save"
          disabled={!inputValue}
        >
          Сохранить список
        </button>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  movies: store.movies,
  favMovies: store.favMovies,
});

const mapDispatchToProps = (dispatch) => ({
  deleteFavMovie: (favMovies) =>
    dispatch({ type: "DELETE_FAV_MOVIE", payload: favMovies }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
