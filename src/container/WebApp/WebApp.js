import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/css/main.css';
import * as searchActions from '../../store/actions/index';
import Search from '../../components/Search/Search';

import ImageGrid from '../../components/ImageGrid/ImageGrid';
import Queries from '../../components/Queries/Queries';


class WebApp extends Component {

  componentDidMount() {
      this.props.onInitGetRandom();      
  } 
  
    render () {
        return (
          <div className="webapp">
            <div className="webapp-header">
                <Search/>           
            </div>           
            <div className="webapp-bottom">
                <ImageGrid />
                <Queries/>
            </div>
          </div>
        );
    }   
}

const mapDispatchToProps = dispatch => {
  return {
      onInitGetRandom: () => dispatch(searchActions.getRandom()),
      onInitGetResultsbySearch: (query) => dispatch(searchActions.getResultsBySearch(query))
  };
};

export default connect(null,mapDispatchToProps)(WebApp);