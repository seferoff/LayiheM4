import React, { Component } from "react";
import "./Favorites.css";
import {connect} from 'react-redux';
import MovieItem from "../MovieItem/MovieItem";

class Favorites extends Component {
  state = {
    title: "Новый список",
    favMovies: [
      // { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
    ],
    inputValue: "",
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className="favorites">
        <input
          value={inputValue}
          className="favorites__name"
          onChange={this.handleChange}
          placeholder="Новый список"
        />
        <ul className="favorites__list">
          {this.props.favMovies.map((item) => {
            return (
              <li key={item.id}>
                {item.title} ({item.year})
              </li>
            );
          })}
        </ul>
        <button
          type="submit"
          className="favorites__save"
          disabled={!inputValue}
        >
          Сохранить список
        </button>
      </div>
    );
  }
}

const mapStateToProps = store => ({
    movies: store.movies,
    favMovies: store.favMovies
})


export default connect(mapStateToProps)(Favorites);
