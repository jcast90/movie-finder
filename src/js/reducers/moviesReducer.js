const defaultState = {
  fetching: false,
  titles: [],
  single: {}
};

export default function(state = defaultState, { type, payload }) {
  switch (type) {
    case 'FETCH_MOVIES':
      return { ...state, fecthing: true };

    case 'FETCH_MOVIES_SUCCESS': {
      return {
        ...state,
        titles: payload,
        fetching: false
      };
    }

    case 'FETCH_MOVIES_FAIL':
      return {
        ...state,
        err: payload,
        fetching: false
      };
    case 'FETCH_MOVIE':
      return { ...state, fecthing: true };
    case 'FETCH_MOVIE_SUCCESS': {
      return {
        ...state,
        single: payload,
        fetching: false
      };
    }

    case 'FETCH_MOVIE_FAIL': {
      return {
        ...state,
        err: payload,
        fetching: false
      };
    }
    default:
      return state;
  }
}
