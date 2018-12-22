import React, { Component } from 'react';
import { connect } from 'react-redux';
import LiItems from './LiItems/LiItems';

class Queries extends Component {

   render() {
       return (
        <div className="webapp-bottom-queries">
            <ul>
                {this.props.savedQueries.map(queries => (
                <LiItems key={queries.id} query={queries.query} delId={queries.id}/>))}           
            </ul>
        </div>
       );
   };
}

const mapStateToProps = state => {
    return {
        savedQueries: state.savedQuery
    };
};

export default connect(mapStateToProps)(Queries);