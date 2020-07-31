import React from 'react';

const SearchBar = ({ handleChange, handleSubmit, query, offset, number }) => {
    return (
        <div id="searchbar-container" className="bg-transparent mt-5">
            <h3 className="text-center text-white"> Enter Search Term</h3>
            <input className="search-input my-1 w-100" onChange={handleChange('query')} placeholder="Search Recipies..." required />
            <div className="d-flex justify-content-center m-1">
                <button className="btn btn-sm btn-danger text-white w-50" onClick={() => handleSubmit(query, offset, number)}>
                    <i className="fa fa-search"></i>&nbsp;search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
