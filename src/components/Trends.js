import React, { useEffect, Component } from 'react';
import { connect } from 'react-redux';
import { getRandom, setLoading } from '../actions/recipesactions';
import Recipe from './Recipe';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

class Trends extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        this.getData();
    }

    getData = async () => {
        await this.props.setLoading();
        this.props.getRandom();
    };
    render() {
        const { random, error, loading } = this.props;
        return (
            <React.Fragment>
                <div className="mt-3">
                    <div className="d-flex justify-content-start">
                        <Link to="/search" id="explore-btn" className="btn btn-dark btn-sm">
                            <i className="fa fa-search"></i>&nbsp;Explore
                        </Link>
                    </div>
                    {error && <p className="text-center text-dark">Please check your internet connection</p>}
                    {loading && <Spinner />}
                    {!error && !loading && <h3 className="text-center text-dark">TRENDING RECIPES</h3>}
                    <div className="row my-2">
                        {!loading &&
                            random.data &&
                            random.data.recipes.map((random, i) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 m-2 mx-auto" key={i}>
                                    <Recipe baseuri="" recipe={random} />
                                </div>
                            ))}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    random: state.items.random,
    loading: state.items.loading,
    error: state.items.randomerror
});

const mapDispatchToProps = dispatch => ({
    getRandom: () => dispatch(getRandom()),
    setLoading: () => dispatch(setLoading())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Trends);
