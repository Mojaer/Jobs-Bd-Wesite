import React from 'react';
import './Home.css'
import Title from './Title/Title';
import CategoryList from './JobCatergoryList/CategoryList';
import FeaturedJobs from './FeaturedJobs/FeaturedJobs';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <div className='home'>
            <Title className='title'></Title>
            <CategoryList className='categoryList'></CategoryList>
            <FeaturedJobs></FeaturedJobs>
            <Footer></Footer>
        </div>
    );
};

export default Home;
