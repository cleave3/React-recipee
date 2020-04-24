import React from 'react';

const Ingredients = ({ detail }) => {
    return (
        <div className="card shadow my-2">
            <div className="card-body">
                <h6 className="card-title text-dark text-center">INGREDIENTS</h6>
                <ul className="list-group list-group-flush">
                    {detail.data.extendedIngredients.map((ingredient, i) => (
                        <li key={i} className="list-group-item py-1 text-dark d-flex justify-content-between" style={{ fontSize: '14px' }}>
                            <div>
                                <b>{ingredient.name}</b>
                            </div>{' '}
                            <div>
                                {ingredient.measures.metric.amount}
                                {ingredient.measures.metric.unitShort}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Ingredients;
