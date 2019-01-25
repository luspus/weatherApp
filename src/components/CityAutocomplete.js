import React, { Component }  from 'react'
import { connect } from 'react-redux'
import ACTIONS from "../actions/index"

class CityAutocomplete extends Component {
	constructor(props) {
		super(props)
		this.state = {
			city: ''
		}
	}
	saveCityName(e) {
		this.setState({
			city: e.target.value
		})
	}
	getWeather() {
		fetch('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + this.state.city + '&types=(cities)&key=AIzaSyBKZHdtPgJUXjlZ5ytgggPFi3SJXYo1VU8', 
		{ mode: 'no-cors', cache: 'no-cache'}
		).then(resp => resp.json().then(parsedResp => {
			const cities = parsedResp.predictions.map(pred=>pred.description)
			this.props.saveCitiesList(cities)
		}))
	}
	onCitySelect(name) {
		fetch('http://api.openweathermap.org/data/2.5/weather?q=' + name.substr(0, name.indexOf(',')) + '&APPID=bede7e2252f7c2536f37e5273ba92b71&units=metric')
		.then(response => response.json())
		.then(data => {
			this.props.addNewForecast(data)
		})
	}
	render () {
		const cities = this.props.citiesList
		return(
			<div>
				<input type='text' name='city' value={ this.state.city } onChange={(e) => this.saveCityName(e)} />
				<button onClick={ this.getWeather.bind(this) }>Get Weather </button>
				{cities.map(i => {
					return <div className='option' key={Math.random()} onClick={() => this.onCitySelect(i)}>{i}</div>
				})}
			</div>
		)
	}
}
const mapStateToProps = state => ({
	...state
})

const mapDispatchToProps = dispatch => ({
	addNewForecast: (data) => dispatch(ACTIONS.addNewForecast(data)),
	saveCitiesList: (data) => dispatch(ACTIONS.saveCitiesList(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CityAutocomplete)