const initialState = {
  dateSearched: null,
  results: [],
};

export default function reducer(state = initialState, action) {
  const { type } = action;

  if (type === "add") {
    return {
      ...state,
      dateSearched: Date.now(),
      results: action.payload.results,
      searchQuery: action.payload.searchQuery,
    };
  }

  return state;
}
