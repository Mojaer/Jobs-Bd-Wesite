import React, { useEffect, useState } from 'react';
import './FeaturedJobs.css'
import FeaturedJob from './FeaturedJob/FeaturedJob.jsx';

const FeaturedJobs = () => {

    const [featuredJobs, setFeaturedJobs] = useState([])
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        const dataFetch = async () => {
            const response = await fetch('/FeaturedJobs.json');
            const data = await response.json();
            setFeaturedJobs(data)
        }
        dataFetch()
    }, [])

    const renderAll = (condition) => {
        setShowAll(!condition)
    }

    return (
        <div className='featured_jobs text-center mt-5'>
            <h1>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='row row-cols-md-2 align-items-center '>

                {
                    showAll === true ?
                        featuredJobs.map(job => <FeaturedJob featuredJob={job} key={job.id}></FeaturedJob>
                        ) : featuredJobs.slice(0, 4).map(job => <FeaturedJob featuredJob={job} key={job.id}></FeaturedJob>
                        )
                }
            </div>
            {
                showAll === false ? <button onClick={() => renderAll(showAll)} className='btn btn-primary mb-5'>See all jobs</button> : ''
            }


        </div>
    );
};

export default FeaturedJobs;