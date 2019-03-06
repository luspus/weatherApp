import React, { Component }  from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ACTIONS from '../actions/'

class Artist extends Component {
    componentDidMount () {
        this.props.getInfo(this.props.match.params.artist);
    }
    render () {
        const { artistInfo } = this.props;
        return(
          <div>{artistInfo.name}</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        artistInfo: state.artistInfo
    }
}

const mapDispatchToProps = dispatch => ({
    getInfo: (artist) => dispatch(ACTIONS.getInfo(artist))
})

export default connect(mapStateToProps, mapDispatchToProps)(Artist)
