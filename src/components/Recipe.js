import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ baseuri, recipe }) => {
    return (
        <Link to={`/recipe/${recipe.id}`}>
            <div id="recipe-container" className="card shadow bg-none">
                <img className="recipe-image" width="100%" height="210px" src={baseuri + recipe.image} />
                <div id="recipe-text" className="text-center text-white">
                    {recipe.title}
                </div>
            </div>
        </Link>
    );
};

export default Recipe;
