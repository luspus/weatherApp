const initialState = {
    topArtists: [],
    artistInfo: [],
    val: '',
    resultOfSearching: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TOP_ARTISTS':
            return {
                ...state,
                topArtists: [...action.data]
            }

        case 'GET_INFO':
                return {
                    ...state,
                    artistInfo: [action.data.artist]
                }

          case 'SEARCH_ARTIST':
                  console.log('artistInfo reducer', action)
                  return {
                      ...state,
                      resultOfSearching: []
                  }

        default:
            return state
    }
}
