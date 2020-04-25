import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRecipeDetail, setLoading } from '../actions/recipesactions';
import Spinner from './Spinner';
import BasicDetail from './BasicDetail';
import Ingredients from './Ingredients';

class Detail extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.setLoading();
        this.props.getRecipeDetail(this.props.match.params.id);
    }

    render() {
        const { detailerror, loading, detail } = this.props;
        return (
            <div className="container">
                {loading && <Spinner />}
                {!loading && detailerror && <p className="text-center text-white">Oops we could not retrieve you recipe information. Please Try again later</p>}
                {!loading && (
                    <Link to="/search" className="btn btn-sm btn-dark my-2">
                        <i className="fa fa-chevron-circle-left"></i>&nbsp;Back
                    </Link>
                )}
                {!loading && !detailerror && detail.data && (
                    <div id="recipe-container" className="card shadow bg-none">
                        <img className="recipe-image img-fluid" src={detail.data.image} />
                        <div id="recipe-text" className="text-center text-white">
                            {detail.data.title}
                        </div>
                    </div>
                )}
                <div className="d-flex justify-content-between flex-wrap">
                    {!loading && !detailerror && detail.data && (
                        <div className="d-flex justify-content-center">
                            <p className="m-1">
                                <i className="fa fa-heart text-danger"></i>&nbsp;{detail.data.aggregateLikes}
                            </p>
                            <p className="m-1">
                                <i className="fa fa-star">&nbsp;Credit :&nbsp;{detail.data.creditsText}</i>
                            </p>
                        </div>
                    )}
                    <div className="d-flex flex-wrap">
                        {!loading &&
                            !detailerror &&
                            detail.data &&
                            detail.data.dishTypes.map((d, i) => (
                                <div key={i} className="alert alert-secondary m-1 py-0 px-1" role="alert">
                                    {d}
                                </div>
                            ))}
                    </div>
                </div>
                {!loading && !detailerror && detail.data && (
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card shadow my-2">
                                <h6 className="card-title text-dark text-center my-2">INSTRUCTIONS</h6>
                                <p className="text-dark p-1">{detail.data.instructions}</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Ingredients detail={detail} />
                        </div>
                        <div className="col-md-6">
                            <BasicDetail detail={detail} />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    detail: state.items.detail,
    detailerror: state.items.detailerror,
    loading: state.items.loading
});

const mapDispatchToProps = dispatch => ({
    getRecipeDetail: id => dispatch(getRecipeDetail(id)),
    setLoading: () => dispatch(setLoading())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail);
