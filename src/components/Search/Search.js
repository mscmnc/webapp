import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../Input/Input';
import Button from '../../components/Button/Button/Button'
import * as searchActions from '../../store/actions/index'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };  
        this.searchChange = this.searchChange.bind(this);       
    } 

    searchChange(event) {
        this.setState({search: event.target.value});
        this.setState({ emptyValue: true })
    }

    search = (event) => {
        event.preventDefault();      
        this.props.onInitGetResultsBySearch(this.state.search);
        this.setState({search: ''});
    } 

    saveQuery = () => {
        this.props.onSaveQuery(this.state.search);
        this.setState({search: ''}); 
    } 

    render () {
        return (
            <form>
            <div className="webapp-header--search" >
                <Input
                type="text"
                placeholder="Search" 
                id="SearchInput"
                value={this.state.search}
                changed={this.searchChange}/>
            </div>
            <div className="webapp-header--buttons">
                <div className="buttons-search">
                    <Button title="Search" type="submit" disabled={!this.state.search} onClick={this.search}/>
                </div> 
                <div className="buttons-save">
                    <Button title="Save" type="button" disabled={!this.state.search} onClick={this.saveQuery}/>      
                </div> 
            </div>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitGetResultsBySearch: (query) => dispatch(searchActions.getResultsBySearch(query)),
        onSaveQuery: (savedQuery) => dispatch(searchActions.savedQuery(savedQuery))
    };
  };

export default connect(null, mapDispatchToProps)(Search);