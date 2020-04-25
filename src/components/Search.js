import React, { Component } from 'react';
import SearchBar from './Searchbar';
import { connect } from 'react-redux';
import { searchRecipes, setLoading, setPage } from '../actions/recipesactions';
import Recipe from './Recipe';
import Spinner from './Spinner';
import Pagination from './Pagination';

class Search extends Component {
    state = {
        query: '',
        offset: 0,
        number: 24,
        searchterm: ''
    };
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    handleSubmit = (query, offset, number) => {
        if (query.trim() === '') return;
        window.scrollTo(0, 0);
        this.setState({ searchterm: query });
        this.props.setLoading();
        this.props.searchRecipes(query, offset, number);
    };

    handlePaginationClick = page => {
        const { searchterm, offset, number } = this.state;
        window.scrollTo(0, 0);
        this.setState({ offset: (page - 1) * number });
        this.props.setLoading();
        this.props.setPage(page);
        this.handleSubmit(searchterm, offset, number);
    };

    render() {
        const { query, offset, number, searchterm } = this.state;
        const { recipes, error, loading, page } = this.props;
        return (
            <React.Fragment>
                <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} query={query} offset={offset} number={number} />
                <div id="wrapper">
                    {error && <p className="text-center text-dark">Please check your internet connection</p>}
                    {loading && <Spinner />}
                    {!loading && recipes.data && <h3 className="text-center text-dark mt-5 mb-2">Search Found Results for {searchterm}</h3>}
                    <div className="row my-2">
                        {!loading &&
                            recipes.data &&
                            recipes.data.results.map((recipe, i) => (
                                <div className="col-lg-4 col-md-6 col-sm-12 m-2 mx-auto" key={i}>
                                    <Recipe baseuri={recipes.data.baseUri} recipe={recipe} />
                                </div>
                            ))}
                    </div>
                    {recipes.data && recipes.data.results.length === 0 && <p className="text-center">No Match Found for {searchterm}.. Please check your spellings and try again</p>}
                    {!loading && recipes.data && recipes.data.results.length !== 0 && (
                        <Pagination currentPage={page} handlePaginationClick={this.handlePaginationClick} totalpages={Math.ceil(recipes.data.totalResults / number)} />
                    )}
                </div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    searchRecipes: (term, offset, number) => dispatch(searchRecipes(term, offset, number)),
    setLoading: () => dispatch(setLoading()),
    setPage: page => dispatch(setPage(page))
});

const mapStateToProps = state => ({
    recipes: state.items.recipies,
    error: state.items.searcherror,
    loading: state.items.loading,
    page: state.items.page
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
