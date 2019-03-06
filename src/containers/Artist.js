import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ACTIONS from '../actions/'

class Artist extends Component {
    componentDidMount () {
        this.props.getInfo(this.props.match.params.artist);
    }
    render () {
        const { artistInfo } = this.props;
        console.log(artistInfo)
        return(
          <div>
          <Link to='/'> Return </Link>
          {artistInfo[0] != undefined &&
            <div>{artistInfo[0].bio.summary}</div>
          }
          </div>
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
