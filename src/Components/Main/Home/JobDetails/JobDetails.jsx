import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './JobDetails.css'
import { addToDb } from '../../../../../public/fakedb';
import Footer from '../../../Footer/Footer';

const JobDetails = () => {
    const jobID = useLoaderData()
    const [featuredJob, setFeaturedJob] = useState([])

    useEffect(() => {
        const dataFetch = async () => {
            try {
                const response = await fetch('/FeaturedJobs.json');
                const data = await response.json();
                setFeaturedJob(data)
            }
            catch (err) {
                console.error(err)
            }

        }
        dataFetch()
    }, [])



    let JobDetails = featuredJob.find(job => job.id === jobID.id)

    // let { id, companyLogo, companyName, jobTitle, location, salary, remoteOrOnsite, fulltimeOrPartTime, jobDescription, jobResponsibility, educationalRequirements, experiences, contactInformation } = JobDetails

    return (
        <div className='jobDetails'>
            <section className='d-flex justify-content-between'>
                <img className='img-fluid' src="/All Images/Vector.png" alt="" />
                <h1 >Job Details</h1>
                <img className='img-fluid' src="/All Images/Vector-1.png" alt="" />
            </section>
            <div className='details d-md-flex text-center text-md-start'>
                <div className='w-75 mb-5 mb-md-auto'>
                    <p className='w-75'><b>Job Description: <br /></b>{JobDetails ? JobDetails.jobDescription : 'no description'}</p>
                    <br /> <p><b>job Responsibility: <br /></b>{JobDetails ? JobDetails.jobResponsibility : 'no response'}</p>
                    <br /><p><b>Educational Requirements: <br /></b>{JobDetails ? JobDetails.educationalRequirements : 'no response'}</p>
                    <br /><p><b>Experiences: <br /></b>{JobDetails ? JobDetails.experiences : 'no response'}</p>
                </div>
                <div>
                    <div className='mb-5'>

                        <h4>Job Details</h4>
                        <hr />
                        <h5><img src='/Icons/Frame.png' alt="dollar" /> <b>Salary: </b>{JobDetails ? JobDetails.salary : 'no response'} </h5>
                        <h5><img src='/Icons/Frame-1.png' alt="dollar" /> <b>Job Title: </b>{JobDetails ? JobDetails.jobTitle : 'no response'} </h5>

                    </div>
                    <div> <h4>Contact Information</h4>
                        <hr />
                        <h5><img src='/Icons/Frame-2.png' alt="dollar" /> <b>Phone: </b>{JobDetails ? JobDetails.contactInformation.phone : 'no response'} </h5>
                        <h5><img src='/Icons/Frame-3.png' alt="dollar" /> <b>Email: </b>{JobDetails ? JobDetails.contactInformation.email : 'no response'} </h5>
                        <h5 className='mb-5'><img src='/Icons/Frame-4.png' alt="dollar" /> <b>Location: </b>{JobDetails ? JobDetails.location : 'no response'} </h5>

                        <button onClick={() => { addToDb(jobID.id) }} className='btn btn-primary w-100'>Apply Now</button>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default JobDetails;