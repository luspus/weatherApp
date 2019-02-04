import React, { Component }  from 'react'
import { connect } from 'react-redux'
import ACTIONS from "../actions/index"
import ForecastList from './ForecastList'
import InputAutocomplete from './InputAutocomplete'

class WeatherApp extends Component {
    render () {
        const group = [],
              temperatures = [],
              forecastList = this.props.forecastList,
              reducer = (accumulator, currentValue) => accumulator + currentValue

        forecastList.map(i => group.push(i.id) )
        forecastList.map(i => temperatures.push(i.main.temp) )
        return(
            <div>
                <header className="header">
                    <InputAutocomplete />
                    {forecastList.length > 0 &&
                        <div>
                            <button className='btn_update' onClick={() => this.props.setForecastList(group)}>Update forecast list</button>
                            <div>Average temperature: { temperatures.reduce(reducer) / temperatures.length }</div>
                        </div>
                    }
                </header>
                {forecastList.length > 0 &&
                    <ForecastList />
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
    setForecastList: (arr) => dispatch(ACTIONS.setForecastList(arr))
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp)