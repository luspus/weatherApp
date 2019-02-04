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
            const newArr = state.forecastList,
                  id = +action.payload
            newArr.splice(id, 1 )
            return {
                ...state,
                forecastList: [...newArr]
            }

        case 'UPDATE_CURRENT_TEMP_FOR_CITY':
            const newArray = state.forecastList,
                  index = +action.payload[1],
                  obj = action.payload[0]
            newArray[index] = obj
            return {
                ...state,
                forecastList: [...newArray]
            }

        case 'SET_FORECAST_LIST':
            return {
                ...state,
                forecastList: action.payload
            }

        default:
            return state
    }
}