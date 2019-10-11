import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchRecipes } from '../../actions/getRecipes';

class Search extends Component {
    state = {
        query: ''
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.searchRecipes(this.state.query);
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    render() {
        return (
            <div className="card-panel deep-orange accent-2">
                <h3 className="center-align white-text">Search for A Recipe</h3>
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="input-field center-align col s6">
                        <input
                            name="query"
                            type="search"
                            placeholder="Search Recipes"
                            value={this.state.query}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button
                        className="btn waves-effect waves-light red"
                        type="submit"
                    >
                        Search Recipes
                        <i className="material-icons right">search</i>
                    </button>
                </form>
            </div>
        );
    }
}

export default connect(
    null,
    { searchRecipes }
)(Search);
