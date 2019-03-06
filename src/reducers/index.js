const initialState = {
    topArtists: [],
    artistInfo: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TOP_ARTISTS':
        //console.log(action)
            return {
                ...state,
                topArtists: [...action.data]
            }

        case 'GET_INFO':
                console.log('artistInfo reducer', action.data.artist)
                return {
                    ...state,
                    artistInfo: [...action.data.artist]
                }

        default:
            return state
    }
}
