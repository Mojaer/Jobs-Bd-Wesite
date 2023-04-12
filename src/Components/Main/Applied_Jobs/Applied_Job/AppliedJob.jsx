import React from 'react';
import './AppliedJob.css'

const AppliedJob = ({ appliedJob }) => {

    let { id, companyLogo, companyName, jobTitle, location, salary, remoteOrOnsite, fulltimeOrPartTime } = appliedJob


    return (
        <div className='appliedJob'>
            <section className='d-flex justify-content-between'>
                <img src="/All Images/Vector.png" alt="" />
                <h1 >Applied Jobs</h1>
                <img src="/All Images/Vector-1.png" alt="" />
            </section>

        </div>
    );
};

export default AppliedJob;