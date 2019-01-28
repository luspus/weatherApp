const initialState = {
    forecastList: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_FORECAST':
            return {
                ...state,
                forecastList: [action.payload, ...state.forecastList].slice(0,5)
            }

        case 'DELETE_CITY_FORECAST':
            const newArr = state.forecastList
            newArr.splice(+action.payload, 1 )
            return {
                ...state,
               forecastList: [...newArr]
            }

        case 'UPDATE_CURRENT_TEMP_FOR_CITY':
            const newArray = state.forecastList
            newArray[+action.payload[1]] = action.payload[0]
            return {
                ...state,
               forecastList: [...newArray]
            }

        case 'UPDATE_FORECAST_LIST':
            return {
                ...state,
               forecastList: action.payload
            }

        default:
            return state
    }
}