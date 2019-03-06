import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopArtists from './TopArtists';
import SearchAutocomplete from './SearchAutocomplete';
import Artist from './Artist';

const App = () => {
    return(
        <div>
          <SearchAutocomplete />
          <Router>
            <div>
                  <Route exact path="/" component={TopArtists} />
                  <Route exact path='/:artist' component={Artist} />
            </div>
          </Router>
      </div>
      )
}

export default App
