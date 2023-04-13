import React from 'react';
import './AppliedJob.css'
import { Link } from 'react-router-dom';

const AppliedJob = ({ appliedJob }) => {

    let { id, companyLogo, companyName, jobTitle, location, salary, remoteOrOnsite, fulltimeOrPartTime } = appliedJob
    console.log(appliedJob)


    return (
        <div className='appliedJob d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center justify-content-start'>
                <div className='d-flex align-items-center justify-content-start companyLogo'>
                    <img src={companyLogo} alt="" />
                </div>

                <article>
                    <h4>{jobTitle}</h4>
                    <h5>{companyName}</h5>
                    <div>
                        <button className='btn btn-outline-primary '>{remoteOrOnsite}</button>
                        <button className='btn btn-outline-primary ms-2'>{fulltimeOrPartTime}</button>
                    </div>
                    <div className='salary_location d-flex align-items-center justify-content-start'>
                        <div >
                            <img className="img-fluid" src='/public/Icons/Location Icon.png' alt="location" />
                            {location}
                        </div>
                        <div className='ms-3'>
                            <img className="img-fluid" src="/public/Icons/Frame.png" alt="" />
                            {salary}
                        </div>

                    </div>
                </article>
            </div>
            <div>
                <Link className=' btn btn-primary' to={`/${id}`}>View details</Link>
            </div>




        </div>
    );
};

export default AppliedJob;