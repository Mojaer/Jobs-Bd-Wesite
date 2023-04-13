import React, { useEffect, useState } from 'react';
import { getAppliedJob } from '../../../../public/fakedb';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from './Applied_Job/AppliedJob';
import './AppliedJobs.css'

const AppliedJobs = () => {

    const allJobs = useLoaderData()

    const [appliedJobId, setAppliedJobId] = useState([])

    useEffect(() => {
        const response = getAppliedJob()
        setAppliedJobId(response)
    }, [])



    const appliedJob = []

    for (const jobId in appliedJobId) {
        appliedJob.push(allJobs.filter(jobs => jobs.id === jobId))
    }

    return (
        <div className='appliedJobs'>
            <section className='d-flex justify-content-between'>
                <img src="/All Images/Vector.png" alt="" />
                <h1 >Applied Jobs</h1>
                <img src="/All Images/Vector-1.png" alt="" />
            </section>
            <div className='section'>
                {/* <div>filter</div> */}
                {
                    appliedJob.map(job => <AppliedJob appliedJob={job[0]} key={job[0].id}></AppliedJob>)
                }</div>


        </div>
    );
};

export default AppliedJobs;