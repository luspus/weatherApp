import React, { Component }  from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import TopArtists from './TopArtists'
import Artist from './Artist'
import ACTIONS from '../actions/'

class App extends Component {
    render () {
      const { artistInfo } = this.props;
      console.log(99999999999, this.props, artistInfo.name)
      return(
          <Router>
            <div>
                  <Route exact path="/" component={TopArtists} />
                  <Route exact path='/radiohead' ololo={'3'} component={Artist} />
            </div>
          </Router>
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
})

export default connect(mapStateToProps, mapDispatchToProps) (App)
