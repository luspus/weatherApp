const initialState = {
    forecastList: [],
    citiesList: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_FORECAST':
            return {
                ...state,
                forecastList: [action.payload, ...state.forecastList].slice(0,5)
            }

        case 'DELETE_CITY_FORECAST':
            state.forecastList.splice(+action.payload, 1 )
            return {
                ...state,
               forecastList: [...state.forecastList]
            }

        case 'UPDATE_CURRENT_TEMP_FOR_CITY':
            state.forecastList[action.payload[1]] = action.payload[0]
            return {
                ...state,
               forecastList: [...state.forecastList]
            }

        case 'UPDATE_FORECAST_LIST':
            return {
                ...state,
               forecastList: action.payload
            }

        case 'SAVE_CITIES_LIST':
            return {
                ...state,
               citiesList: action.payload
            }

        default:
            return state
    }
}