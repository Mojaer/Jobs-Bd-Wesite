import React from 'react';
import './Home.css'
import Title from './Title/Title';
import CategoryList from './JobCatergoryList/CategoryList';
import FeaturedJobs from './FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Title className='title'></Title>
            <CategoryList className='categoryList'></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;
