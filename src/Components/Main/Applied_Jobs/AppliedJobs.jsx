import React, { useEffect, useState } from 'react';
import { getAppliedJob } from '../../../../public/fakedb';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from './Applied_Job/AppliedJob';

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
        <div>
            {
                appliedJob.map(job => <AppliedJob appliedJob={job[0]} key={job[0].id}></AppliedJob>)
            }

        </div>
    );
};

export default AppliedJobs;