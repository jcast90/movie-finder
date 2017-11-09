import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  updateMovies,
  updateDetails,
  shortPlot
} from '../actions/moviesActions';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    this.setState({
      titles: e.target.value
    });
  }
  handleSubmit() {
    this.props.updateMovies(this.state.titles);
    this.props.shortPlot(this.state.titles);
  }

  render() {
    const movies = this.props.movies.titles;
    const shortPlot = this.props.movies.single;

    return (
      <div className="container">
        <h1>Movie Finder</h1>

        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for..."
            onChange={this.handleInput}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={this.handleSubmit}
            >
              Go!
            </button>
          </span>
        </div>
        <div className="movies">
          {movies.Search &&
            movies.Search.length &&
            movies.Search.map(movie => (
              <div className="card">
                <div className="row">
                  <div className="col-md-3">
                    <img
                      className="img-fluid img-thumbnail"
                      src={`${movie.Poster}`}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <div className="card-title">{movie.Title}</div>
                      <div className="card-text">{movie.Year}</div>
                      <div className="card-text">{shortPlot.Plot}</div>
                      <Link to={`/movie/${movie.imdbID}`}>More Info</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStoreToProps = ({ movies }) => ({
  movies
});
export default connect(mapStoreToProps, {
  updateMovies,
  updateDetails,
  shortPlot
})(MovieSearchContainer);
