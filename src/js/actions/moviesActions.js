import axios from 'axios';
// Action Creators

export const updateMovies = movieName => {
  return function(dispatch) {
    dispatch({
      type: 'FETCH_MOVIES'
    });
    axios
      .get('http://www.omdbapi.com', {
        params: {
          s: movieName,
          apikey: '8730e0e'
        }
      })
      .then(res => {
        dispatch({
          type: 'FETCH_MOVIES_SUCCESS',
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: 'FETCH_MOVIES_FAIL',
          payload: err
        });
      });
  };
};
export const updateDetails = movieId => {
  return function(dispatch) {
    dispatch({
      type: 'FETCH_MOVIE'
    });
    axios
      .get('http://www.omdbapi.com', {
        params: {
          i: movieId,
          apikey: '8730e0e',
          plot: 'full'
        }
      })
      .then(res => {
        dispatch({
          type: 'FETCH_MOVIE_SUCCESS',
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: 'FETCH_MOVIE_FAIL',
          payload: err
        });
      });
  };
};
export const shortPlot = movieName => {
  return function(dispatch) {
    dispatch({
      type: 'FETCH_MOVIE'
    });
    axios
      .get('http://www.omdbapi.com', {
        params: {
          t: movieName,
          apikey: '8730e0e',
          plot: 'short'
        }
      })
      .then(res => {
        dispatch({
          type: 'FETCH_MOVIE_SUCCESS',
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: 'FETCH_MOVIE_FAIL',
          payload: err
        });
      });
  };
};
