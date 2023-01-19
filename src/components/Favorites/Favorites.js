import React, { Component } from "react";
import "./Favorites.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Favorites extends Component {
  state = {
    id: "",
    inputValue: "",
    buttonClick: false,
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  saveToList = async () => {
    this.setState({ buttonClick: true });

    const info = {
      title: this.state.inputValue,
      movies: this.props.favMovies.map(
        (movie) =>
          `${movie.Title} ${
            movie.Year
          } (Imdb: ${`https://www.imdb.com/title/${movie.imdbID}/`})`
      ),
    };
    await fetch("https://acb-api.algoritmika.org/api/movies/list", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((res) => this.setState({ id: res.id }));
  };

  render() {
    const { inputValue, buttonClick, id } = this.state;
    const { favMovies } = this.props;

    return (
      <div className="favorites">
        <input
          value={inputValue}
          className="favorites__name"
          onChange={this.handleChange}
          placeholder="New list"
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
                  onClick={(e) =>
                    this.props.deleteFavMovie(
                      e.target.getAttribute("data-index")
                    )
                  }
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
        <div>
          {(() => {
            if (buttonClick === true) {
              return (
                <div>
                  <Link to={`/list/${id}`}>Go to the list</Link>
                  <div className="to_api">
                    <a
                      href={`https://acb-api.algoritmika.org/api/movies/list/${id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      My "{inputValue}" list info
                    </a>
                  </div>
                </div>
              );
            } else {
              return (
                <button
                  type="button"
                  className="favorites__save"
                  disabled={!inputValue}
                  onClick={this.saveToList}
                >
                  Save the list
                </button>
              );
            }
          })()}
        </div>
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
