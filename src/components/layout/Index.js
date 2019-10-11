import React from 'react';
import Search from '../recipes/search';
import Recipes from '../layout/Recipes';

const Index = () => {
    return (
        <React.Fragment>
            <Search />
            <Recipes />
        </React.Fragment>
    );
};

export default Index;
