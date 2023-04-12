import { Button } from 'bootstrap';
import React from 'react';
import './FeaturedJob.css'

const FeaturedJob = ({ featuredJob }) => {
    const { companyLogo, companyName, jobTitle, location, salary, remoteOrOnsite, fulltimeOrPartTime } = featuredJob
    return (
        <>
            <div className=" featureJob ">
                <img className="w-25" src={companyLogo} alt="logo" />
                <h4>{jobTitle}</h4>
                <h5>{companyName}</h5>
                <div>
                    <button className='btn btn-outline-primary'>{remoteOrOnsite}</button>
                    <button className='btn btn-outline-primary ms-2'>{fulltimeOrPartTime}</button>
                </div>
                <div className='salary_location d-flex align-items-center justify-content-start'>
                    <div >
                        <img className="img-fluid" src='/public/Icons/Location Icon.png' alt="location" />
                        {location}
                    </div>
                    <div className='ms-2'>
                        <img className="img-fluid" src="/public/Icons/Frame.png" alt="" />
                        {salary}
                    </div>

                </div>
                <button className='btn btn-primary'>View Details</button>


            </div>

        </>
    );
};

export default FeaturedJob;