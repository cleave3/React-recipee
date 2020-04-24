import React from 'react';

const SearchBar = ({ handleChange, handleSubmit, query, offset, number }) => {
    return (
        <div id="searchbar-container" className="row w-100 bg-white">
            <div className="col-lg-6 col-md-8 col-sm-11 mx-auto">
                <h3 className="text-center text-danger"> Enter Search Term</h3>
                <div className="input-group-append m-1">
                    <input className="form-control" onChange={handleChange('query')} placeholder="Search Recipies..." required />
                    <button className="btn btn-sm btn-danger text-white" onClick={() => handleSubmit(query, offset, number)}>
                        search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
