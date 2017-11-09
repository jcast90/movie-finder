import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { updateDetails } from '../actions/moviesActions';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.updateDetails(this.props.match.params.id);
  }

  render() {
    const movie = this.props.movies.single;
    console.log(movie);
    return (
      <div>
        <h1>Movie Detail Container</h1>
        <Link to="/" className="btn btn-primary">
          Back To Results
        </Link>
        <div className="row">
          <div className="col-md-6">
            <img src={`${movie.Poster}`} alt={`${movie.Title} poster image`} />
          </div>
          <div className="col-md-6">
            {movie.Title}
            <ul>
              <li>{movie.Title}</li>
              <li>{movie.Year}</li>
              <li>{movie.Runtime}</li>
              <li>{movie.Genre}</li>
              <li>{movie.Plot}</li>
              <li>{movie.Awards}</li>
              <li>{movie.Metascore}</li>
              <li>{movie.imdbRating}</li>
            </ul>
          </div>
        </div>
        <p>Viewing movie </p>
      </div>
    );
  }
}

const mapStoreToProps = ({ movies }) => ({
  movies
});
export default connect(mapStoreToProps, { updateDetails })(
  MovieDetailContainer
);
