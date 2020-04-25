import React from 'react';

const Pagination = ({ currentPage, totalpages, handlePaginationClick }) => {
    return (
        <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-end mx-4">
                    <li className="page-item">
                        <button className="page-link text-success" onClick={() => (Number(currentPage) === 1 ? null : handlePaginationClick(Number(currentPage) - 1))}>
                            <i className="fa fa-chevron-left"></i>
                        </button>
                    </li>
                    <p className="m-1">
                        {currentPage} of {totalpages}
                    </p>
                    <li className="page-item">
                        <button className="page-link text-success" onClick={() => (Number(currentPage) === totalpages ? null : handlePaginationClick(Number(currentPage) + 1))}>
                            <i className="fa fa-chevron-right"></i>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
