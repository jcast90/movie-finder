const defaultState = {
  titles: []
};

export default function(state = defaultState, { type, payload }) {
  switch (type) {
    case 'FETCH_MOVIES':
      return { ...state, titles: payload };
    default:
      return state;
  }
}
