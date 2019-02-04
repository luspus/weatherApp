const addNewForecast = (arr) => dispatch => {
    const inputAutocomplete = () => {
        return dispatch => {
            let addressObject = arr[0].autocomplete.getPlace(),
                address = addressObject.address_components,
                city = arr[1]
            if (address) {
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=bede7e2252f7c2536f37e5273ba92b71&units=metric`)
                    .then(response => response.json())
                    .then(data => {
                        if(data.cod === '404') {
                            alert(data.cod + ':' + data.message)
                        } else {
                            dispatch({ type: 'ADD_NEW_FORECAST', payload: data })
                        }
                    })
                    .catch(errors => {
                        alert(errors)
                    })
            } else {
                alert('adress invalid')
            }
        }
    }
    dispatch(inputAutocomplete())
}

const deleteCityForecast = (obj) => dispatch => {
    dispatch({
        type: 'DELETE_CITY_FORECAST',
        payload: obj
    })
}

const setForecastList = (arr) => dispatch => {
    const asyncGetForecast = () => {
        return dispatch => {
            fetch(`http://api.openweathermap.org/data/2.5/group?id=${arr}&APPID=bede7e2252f7c2536f37e5273ba92b71&units=metric`,
                { cors: 'no-cors' })
                .then(response => response.json())
                .then(data => {
                    dispatch({ type: 'SET_FORECAST_LIST', payload: data.list })
                })
                .catch(error => {
                    alert('There has been a problem with your fetch operation: ' + error.message);
                })
        }
   }
    dispatch(asyncGetForecast());
}

const updateCurrentTempForCity = (arr) => dispatch => {
    const getCityForecast = () => {
        const city = arr[1]
        return dispatch => {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=bede7e2252f7c2536f37e5273ba92b71&units=metric`)
                .then(response => response.json())
                .then(data => {
                    dispatch({ type: 'UPDATE_CURRENT_TEMP_FOR_CITY', payload: arr });
                })
                .catch(error => {
                    alert('There has been a problem with your fetch operation: ' + error.message);
                })
        }
    }
    dispatch(getCityForecast());
}

export default {
    addNewForecast,
    deleteCityForecast,
    updateCurrentTempForCity,
    setForecastList
};