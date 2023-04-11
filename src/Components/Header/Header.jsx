import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header d-flex '>
            <div>JobsBD</div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/applied_jobs">Applied Jobs</Link>
                <Link to="/blogs">Blogs</Link>
            </div>

            <div></div>

            <Outlet></Outlet>
        </nav>
    );
};

export default Header;