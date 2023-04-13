import { Button } from 'bootstrap';
import React from 'react';
import './FeaturedJob.css'
import { Link } from 'react-router-dom';

const FeaturedJob = ({ featuredJob }) => {
    let { id, companyLogo, companyName, jobTitle, location, salary, remoteOrOnsite, fulltimeOrPartTime } = featuredJob
    return (
        <>
            <div className=" featureJob ">
                <img className="w-25" src={companyLogo} alt="logo" />
                <h4>{jobTitle}</h4>
                <h5>{companyName}</h5>
                <div>
                    <button className='btn btn-outline-primary '>{remoteOrOnsite}</button>
                    <button className='btn btn-outline-primary ms-2'>{fulltimeOrPartTime}</button>
                </div>
                <div className='salary_location d-flex align-items-center justify-content-start'>
                    <div >
                        <img className="img-fluid" src='/Icons/Location Icon.png' alt="location" />
                        {location}
                    </div>
                    <div className='ms-3'>
                        <img className="img-fluid" src="/Icons/Frame.png" alt="frame" />
                        {salary}
                    </div>

                </div>
                <Link className=' btn btn-primary' to={`/job/${id}`}>View details</Link>


            </div>

        </>
    );
};

export default FeaturedJob;