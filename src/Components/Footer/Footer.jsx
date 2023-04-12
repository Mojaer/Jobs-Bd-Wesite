import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer d-md-flex justify-content-between '>
                <div><h1>CareerHub</h1>
                    <p>There are many variations of passages of Lorem Ipsum ,<br /> but the majority have suffered alteration in some form.</p>
                    <img src="/public/Icons/Group 9969.png" alt="" />
                </div>
                <div>
                    <h3>Company</h3>
                    <p>
                        About Us<br />
                        Work<br />
                        Latest News<br />
                        Careers<br />
                    </p>
                </div>
                <div><h3>Product</h3>
                    <p>
                        Prototype<br />
                        Plans & Pricing<br />
                        Customers<br />
                        Integrations<br />
                    </p>
                </div>
                <div><h3>Support</h3>
                    <p>
                        Help Desk <br />
                        Sales <br />
                        Become a Partner<br />
                        Developers<br />
                    </p>
                </div>
                <div><h3>Contact</h3>
                    <p>
                        524 Broadway , NYC <br />
                        +1 777 - 978 - 5570
                    </p>
                </div>
            </div>
        </>

    );
};

export default Footer;