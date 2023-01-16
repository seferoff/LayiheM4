import React, { Component } from 'react';
import './SearchBox.css';
import {connect} from 'react-redux';

class SearchBox extends Component {
    state = {
        searchLine: ''
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }
    searchBoxSubmitHandler = async (e) => {
        e.preventDefault();
        await fetch(`http://www.omdbapi.com/?s=${this.state.searchLine}&apikey=6368aebf`)
        .then(response => response.json())
        .then(data => this.props.addMovie(data.Search))
        .catch(error => {throw(error)})
    }
    render() {
        const { searchLine } = this.state;

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Search by name:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Example, Shawshank Redemption"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Search
                    </button>
                </form>
            </div>
        );
    }
}
 
const mapStateToProps = state => ({
    movies: state.movies
})
const mapDispatchToProps = dispatch => ({
addMovie: (movies) => dispatch({type: "ADD_MOVIE", payload: movies})
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);