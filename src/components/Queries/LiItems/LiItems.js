import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import RemoveButton from '../../Button/RemoveButton/RemoveButton';

class LiItems extends Component {

    render () {
        return (
            <li onClick={() => this.props.onSearchByQuery(this.props.query)} key={this.props.key}>{this.props.query}<RemoveButton onClick={() => this.props.onDeleteQuery(this.props.delId)}/></li>
        );
    };

   
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteQuery: (delId) => dispatch(actions.deleteQuery(delId)),
        onSearchByQuery: (query) => dispatch(actions.getResultsBySearch(query))
    }
}

export default connect(null,mapDispatchToProps)(LiItems);