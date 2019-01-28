const addNewForecast = (obj) => dispatch => {
    dispatch({
        type: 'ADD_NEW_FORECAST',
        payload: obj
    })
}

const deleteCityForecast = (obj) => dispatch => {
    dispatch({
        type: 'DELETE_CITY_FORECAST',
        payload: obj
    })
}

const updateForecastList = (arr) => dispatch => {
    dispatch({
        type: 'UPDATE_FORECAST_LIST',
        payload: arr
    })
}

const updateCurrentTempForCity = (obj) => dispatch => {
    dispatch({
        type: 'UPDATE_CURRENT_TEMP_FOR_CITY',
        payload: obj
    })
}

export default {
    addNewForecast,
    deleteCityForecast,
    updateCurrentTempForCity,
    updateForecastList
};