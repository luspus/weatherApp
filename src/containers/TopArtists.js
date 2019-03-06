import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import Artist from './Artist'
import ACTIONS from "../actions/index";

class TopArtists extends Component {
    componentDidMount () {
       this.props.getTopArtists()
    }
    handlePageClick = (e) => {
      console.log(e)
    }
    render () {
      const { topArtists, getInfo, artistInfo } = this.props;
      console.log(this.props)
      return(
          <ul>
              {topArtists.map((item, id) => {
                  const i = item.image[4];
                  const val = Object.values(i)[0];
                  return  <li key={id} >
                          <div rank="1">
                            <Link to={`/${item.name.toLowerCase()}`}>
                                {item.name}
                            </Link>
                            <div></div>
                            <img size="medium" src={val} alt={item.name} />
                          </div>
                  </li>
              })}

          </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        topArtists: state.topArtists,
    }
}

const mapDispatchToProps = dispatch => ({
    getTopArtists: () => dispatch(ACTIONS.getTopArtists()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TopArtists)
