import React from 'react';
import './Title.css'

const Title = () => {
    return (
        <div className='home d-md-flex align-items-center justify-content-between text-center text-md-start '>
            <section className="articles">
                <h1 className='mb-4'>One Step <br /> Closer To Your <br /> <span>Dream Job</span></h1>
                <p className="mb-4">Explore thousands of job opportunities with all <br /> the information you need. Its your future. <br /> Come find it. Manage all your job application from start to finish.</p>
                <button className='btn btn-primary px-3 py-2'>Get Started</button>
            </section>
            <section><img className='img-fluid' src="/public/All Images/P3OLGJ1 copy 1.png" alt="image" /></section>

        </div>
    );
};

export default Title;