import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../img/spinner.gif';
import Recipe from '../layout/Recipe';
import { fetchRecipes } from '../../actions/getRecipes';

class Recipes extends Component {
    componentDidMount() {
        this.props.fetchRecipes();
    }
    render() {
        const { data } = this.props.recipes;
        console.log(data);
        return (
            <div>
                <Recipe />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    recipes: state.recipes.items
});

export default connect(
    mapStateToProps,
    { fetchRecipes }
)(Recipes);
