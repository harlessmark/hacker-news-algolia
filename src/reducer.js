export default function reducer(state = [], action){
  if (action.type === 'add') {
    return [
      ...state,
      {
        dateSearched: Date.now(),
        searchQueries: action.payload.searchQueries
      }
    ] 
  }
  return state
}