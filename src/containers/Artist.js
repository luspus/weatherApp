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
      console.log('MOUNTED', console.log(this.props))
      this.props.getInfo('radiohead')
    }
    render () {
      const { artistInfo } = this.props;
      console.log('RENDER', this.props)
      return(
        <div>  ARTIIIIIIIIIIIIIIIIIIIST</div>
        )
    }
}

const mapStateToProps = state => {
  console.log(state)
    return {
        artistInfo: state.artistInfo
    }
}

const mapDispatchToProps = dispatch => ({
    getInfo: (artist) => dispatch(ACTIONS.getInfo(artist))
})

export default connect(mapStateToProps, mapDispatchToProps) (Artist)
