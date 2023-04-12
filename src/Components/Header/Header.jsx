import React from 'react';
import './Header.css'
import { Button } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className='header d-md-flex justify-content-between align-items-center text-center text-md-left'>
                <div className='jobBD'>JobsBD</div>
                <div className='d-flex flex flex-column flex-md-row'>
                    <Link to="/">Home</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/applied_jobs">Applied Jobs</Link>
                    <Link to="/blogs">Blogs</Link>
                </div>

                <div><Button variant="primary" className='btn btn-primary px-3 py-2'>Start Applying</Button></div>


            </nav>
            <Outlet></Outlet>
        </>

    );
};

export default Header;