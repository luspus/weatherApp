import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ACTIONS from '../actions/'

class SearchAutocomplete extends Component {
    render () {
        const { val, searchArtist } = this.props;
        return(
          <input className='todo-input'
                   autoFocus={true}
                   placeholder='Search artist' type='text'
                   onChange={(e) => searchArtist(e.target.value)}
                   />
        )
    }
}

const mapStateToProps = state => {

    return {
      val: state.val
    }
}

const mapDispatchToProps = dispatch => ({
    searchArtist: (artist) => dispatch(ACTIONS.searchArtist(artist))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchAutocomplete)
