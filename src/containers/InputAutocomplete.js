import React, { Component }  from 'react'
import { connect } from 'react-redux'
import ACTIONS from '../actions'
import Script from 'react-load-script'

/* global google */

class InputAutocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        }
    }
    handleScriptLoad() {
        let options = { types: ['(cities)'] }
        this.autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('autocomplete'),
            options,
        )
        this.autocomplete.addListener('place_changed', () =>
            this.props.addNewForecast([this, this.state.city])
        )
    } 
    render() {
        const forecast = this.props.forecastList
        return (
            <div>
                <Script
                    url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAi93aP6F83tObVvD8v6D196PZII-nxbec&libraries=places"
                    onLoad={this.handleScriptLoad.bind(this)} />
                <input id="autocomplete" placeholder="Search city" onChange={(e) => this.setState({ city: e.target.value }) } value={forecast.name} />
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
    addNewForecast: (data) => dispatch(ACTIONS.addNewForecast(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(InputAutocomplete)