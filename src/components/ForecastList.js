import React, { Component }  from 'react'
import { connect } from 'react-redux'
import ACTIONS from "../actions/index"

class ForecastList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			city: ''
		}
		this.update = ''
	}
	updateCurrentTempForCity(id, city) {
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=bede7e2252f7c2536f37e5273ba92b71&units=metric`)
		.then(response => response.json())
		.then(data => {
			this.props.updateCurrentTempForCity([data, id])
		})
		.catch(error => {
		  alert('There has been a problem with your fetch operation: ' + error.message);
		})
	}
	render () {
		let arr = this.props.forecastList
		return(
			<div>
				{arr.length > 0 && 
					<ul className='forecastList'>
						{arr.map((i, id) => {
							return <li className='forecastList_item' key={id}>
								<div>
									<b>
										<div>{i.name}, {i.sys.country}</div>
									</b> 
									<img alt='icon' src={`http://openweathermap.org/img/w/${i.weather[0].icon}.png`} />
									<b><i>{i.weather[0].description}</i></b>
									<p>
										<span className="badge badge-info"> { Math.round(i.main.temp) } °С </span> temperature from { Math.round(i.main.temp_min) } to { Math.round(i.main.temp_max) } °С, wind {i.wind.speed} m/s. clouds {i.clouds.all} %, {i.main.pressure} hpa
									</p>
									<p>Geo coords: 
										<span>[{i.coord.lat}, {i.coord.lon}]</span>
									</p>
									<button onClick={() => this.updateCurrentTempForCity(id,i.name)}>Update temperature</button>
									<button onClick={() => this.props.deleteCityForecast(id)}>Delete city forecast</button>
									</div>
								</li> 
							})
						}
					</ul>
				}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	...state
})

const mapDispatchToProps = dispatch => ({
	addNewForecast: (data) => dispatch(ACTIONS.addNewForecast(data)),
	deleteCityForecast: (data) => dispatch(ACTIONS.deleteCityForecast(data)),
	updateCurrentTempForCity: (data) => dispatch(ACTIONS.updateCurrentTempForCity(data))

})

export default connect(mapStateToProps, mapDispatchToProps)(ForecastList)
