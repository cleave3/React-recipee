import React from 'react';
import { connect } from 'react-redux';

const Pagination = ({ page, totalpages, handlePaginationClick }) => {
    return (
        <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-end mx-4">
                    <li className="page-item">
                        <button className="page-link text-success" onClick={() => (Number(page) === 1 ? null : handlePaginationClick(Number(page) - 1))}>
                            <i className="fa fa-chevron-left"></i>
                        </button>
                    </li>
                    <p className="m-1">
                        {page} of {totalpages}
                    </p>
                    <li className="page-item">
                        <button className="page-link text-success" onClick={() => (Number(page) === totalpages ? null : handlePaginationClick(Number(page) + 1))}>
                            <i className="fa fa-chevron-right"></i>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

const mapStateToProps = state => ({
    page: state.items.page
});

export default connect(mapStateToProps)(Pagination);
