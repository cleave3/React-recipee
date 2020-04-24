import React from 'react';

const SearchBar = ({ handleChange, handleSubmit, query, offset, number }) => {
    return (
        <div id="searchbar-container" className="bg-dark card shadow">
            <div className="row m-0">
                <div className="bg-dark p-3 col-lg-6 col-md-8 col-sm-11 mx-auto">
                    <h3 className="text-center text-white"> Enter Search Term</h3>
                    <div className="input-group-append m-1">
                        <input className="form-control" onChange={handleChange('query')} placeholder="Search Recipies..." required />
                        <button className="btn btn-sm btn-outline-danger text-white" onClick={() => handleSubmit(query, offset, number)}>
                            search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
