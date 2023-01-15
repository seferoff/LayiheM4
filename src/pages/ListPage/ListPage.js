import React, { Component } from "react";
import "./ListPage.css";
import { connect } from "react-redux";

class ListPage extends Component {
    
  componentDidMount() {
    this.setState({id: this.props.match.params.id})
  }

  render() {
    return (
      <div className="list-page">
        <h1 className="list-page__title">My list</h1>
        <ul>
          {this.props.favMovies.map((movie) => {
            return (
              <li key={movie.imdbID}>
                <a
                  href={`https://www.imdb.com/title/${movie.imdbID}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {movie.Title} {movie.Year}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = store => ({
    movies: store.movies,
    favMovies: store.favMovies,
  });
  
  export default connect(mapStateToProps)(ListPage);
