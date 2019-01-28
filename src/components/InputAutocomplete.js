import React, { Component }  from 'react'
import { connect } from 'react-redux'
import ACTIONS from '../actions/index'
import Script from 'react-load-script'

/* global google */

class InputAutocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        }
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this)
    }
    handleChange(e) {
        this.setState({ city: e.target.value })
    }
    handlePlaceSelect () {
        let addressObject = this.autocomplete.getPlace(),
            address = addressObject.address_components
        if (address) {
            this.setState({ city: addressObject.formatted_address })
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=bede7e2252f7c2536f37e5273ba92b71&units=metric`)
            .then(response => response.json())
            .then(data => {
                if(data.cod === '404') {
                    alert(data.cod + ':' + data.message)
                } else {
                    this.props.addNewForecast(data)
                }
            })
            .catch(errors => {
                alert(errors)
            })
        } else {
            alert('adress invalid')
        }
        this.setState({ сity: '' })
    }
    handleScriptLoad() {
        let options = {
            types: ['(cities)']
        }
        this.autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('autocomplete'),
            options,
        )
        this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
    } 
    render() {
        return (
            <div>
                <Script
                    url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAi93aP6F83tObVvD8v6D196PZII-nxbec&libraries=places"
                    onLoad={this.handleScriptLoad.bind(this)} />
                <input id="autocomplete" placeholder="Search city" onChange={(e) => this.handleChange(e)} value={this.state.city} />
              </div>
        )
    }
}
const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    addNewForecast: (data) => dispatch(ACTIONS.addNewForecast(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(InputAutocomplete)