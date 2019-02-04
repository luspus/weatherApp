import React, { Component }  from 'react'
import { connect } from 'react-redux'
import ACTIONS from '../actions'

class ForecastList extends Component {
    render () {
        let forecastList = this.props.forecastList
        return(
            <div>
                {forecastList.length > 0 &&
                    <ul className='forecastList'>
                        {forecastList.map((i, id) => {
                            return (
                                <li className='forecastList_item' key={id}>
                                    <div>
                                        <b>
                                            <div>{i.name}, {i.sys.country}</div>
                                        </b> 
                                        <img alt='icon' src={`http://openweathermap.org/img/w/${i.weather[0].icon}.png`} />
                                        <b><i>{i.weather[0].description}</i></b>
                                        <p>
                                            <span className="badge badge-info"> {i.main.temp} °С </span> temperature from {i.main.temp_min} to {i.main.temp_max} °С, wind {i.wind.speed} m/s. clouds {i.clouds.all} %, {i.main.pressure} hpa
                                        </p>
                                        <p>Geo coords: 
                                            <span>[{i.coord.lat}, {i.coord.lon}]</span>
                                        </p>
                                        <button onClick={() => this.props.updateCurrentTempForCity([id, i.name])}>Update temperature</button>
                                        <button onClick={() => this.props.deleteCityForecast(id)}>Delete city forecast</button>
                                    </div>
                                </li> 
                            )})
                        }
                    </ul>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
     forecastList: state.forecastList
    }
}

const mapDispatchToProps = dispatch => ({
    deleteCityForecast: (id) => dispatch(ACTIONS.deleteCityForecast(id)),
    updateCurrentTempForCity: (data) => dispatch(ACTIONS.updateCurrentTempForCity(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ForecastList)
