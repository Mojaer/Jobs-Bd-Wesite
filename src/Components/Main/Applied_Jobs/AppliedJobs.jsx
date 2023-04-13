import React, { useEffect, useState } from 'react';
import { getAppliedJob } from '../../../../public/fakedb';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from './Applied_Job/AppliedJob';
import './AppliedJobs.css'
import Footer from '../../Footer/Footer';

const AppliedJobs = () => {

    const allJobs = useLoaderData()

    const [appliedJobId, setAppliedJobId] = useState([])

    useEffect(() => {
        const response = getAppliedJob()
        setAppliedJobId(Object.keys(response))
    }, [])


    const appliedJob = []

    for (const jobId of appliedJobId) {
        appliedJob.push(allJobs.filter(jobs => jobs.id === jobId))
    }

    const remoteJobs = () => {
        let newJobIds = []
        const filteredJobs = appliedJob.filter(jobs => jobs[0].remoteOrOnsite === "Remote")
        filteredJobs.map(job => newJobIds.push(job[0].id))
        setAppliedJobId(newJobIds)

    }
    const onSiteJobs = () => {
        let newJobIds = []
        const filteredJobs = appliedJob.filter(jobs => jobs[0].remoteOrOnsite === "Onsite")
        filteredJobs.map(job => newJobIds.push(job[0].id))
        setAppliedJobId(newJobIds)

    }

    return (
        <>
            <div className='appliedJobs'>
                <section className='d-flex justify-content-between'>
                    <img src="/All Images/Vector.png" alt="" />
                    <h1 >Applied Jobs</h1>
                    <img src="/All Images/Vector-1.png" alt="" />
                </section>
                <div className='section'>
                    <div className='filter d-flex justify-content-end '>
                        <button onClick={() => remoteJobs()} className='btn btn-outline-primary fw-bolder'>remote jobs</button>
                        <button onClick={() => onSiteJobs()} className='btn btn-outline-primary ms-2 fw-bolder'>on-site jobs</button>
                    </div>
                    <div>
                        {
                            appliedJob.map(job => <AppliedJob appliedJob={job[0]} key={job[0].id}></AppliedJob>)
                        }
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </>

    );
};

export default AppliedJobs;