import React, { Component }  from 'react'
import { connect } from 'react-redux'
import ACTIONS from "../actions/index"
import ForecastList from '../components/ForecastList'
import InputAutocomplete from '../components/InputAutocomplete'

class WeatherApp extends Component {
    updateForecastList () {
        const group = []
        this.props.forecastList.map(i => { return group.push(i.id) } )
        fetch(`http://api.openweathermap.org/data/2.5/group?id=${group}&APPID=bede7e2252f7c2536f37e5273ba92b71&units=metric`)
        .then(response => response.json())
        .then(data => {
            this.props.updateForecastList(data.list)
        })
        .catch(error => {
            alert('There has been a problem with your fetch operation: ' + error.message);
        })
    }
    render () {
        const forecastList = this.props.forecastList
        const temperatures = []
        this.props.forecastList.map(i => {
           return temperatures.push(i.main.temp)    
        })
        const reducer = (accumulator, currentValue) => accumulator + currentValue
        return(
            <div>
                <header className="header">
                    <InputAutocomplete />
                    {forecastList.length > 0 &&
                        <div>
                            <button className='btn_update' onClick={this.updateForecastList.bind(this)}>Update forecast list</button>
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

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    updateForecastList: (data) => dispatch(ACTIONS.updateForecastList(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp)