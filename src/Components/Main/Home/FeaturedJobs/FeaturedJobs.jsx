import React, { useEffect, useState } from 'react';
import './FeaturedJobs.css'
import FeaturedJob from './FeaturedJob/FeaturedJob.jsx';

const FeaturedJobs = () => {

    const [featuredJobs, setFeaturedJobs] = useState([])

    useEffect(() => {
        const dataFetch = async () => {
            const response = await fetch('/public/FeaturedJobs.json');
            const data = await response.json();
            setFeaturedJobs(data)
        }
        dataFetch()
    }, [])

    const featuredJobs4 = featuredJobs.slice(0, 4)

    return (
        <div className='featured_jobs text-center mt-5'>
            <h1>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='row'>
                {
                    featuredJobs4.map(job =>
                        <FeaturedJob featuredJob={job} key={job.id}></FeaturedJob>
                    )
                }

            </div>
        </div>
    );
};

export default FeaturedJobs;