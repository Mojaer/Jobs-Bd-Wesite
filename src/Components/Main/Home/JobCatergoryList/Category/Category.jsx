import React from 'react';
import './category.css'

const Category = ({ category }) => {
    const { icon, name, available_jobs } = category;
    return (
        <div className='category text-center text-md-start mt-3 mt-md-auto '>
            <img src={icon} alt="icon" />
            <h4>{name}</h4>
            <p>{available_jobs}</p>

        </div>
    );
};

export default Category;