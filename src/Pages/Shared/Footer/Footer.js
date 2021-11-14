import React from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-contact mt-5 p-5">

                <div className="about w-25">
                    <h3>Drona : A website for Drone Lovers</h3>
                    <p>Drona is a drone selling shop where we provide the best drones in the market with the reasonable price for our customers.</p>
                </div>
                {/* contact section  */}
                <div className="contact">
                    <h5>Subscribe to get monthly newsletters</h5>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control className="me-auto" placeholder="your email" />
                        <Button className="regular-btn">Subscribe</Button>
                    </Stack>
                    {/* social links section  */}
                    <div className="social-link mt-5">
                        <h5 className=" mb-3">Connect with us on social medias</h5>
                        <Stack className=" social-icons" direction="horizontal" gap={3}>
                            <NavLink to="#">
                                <i className="fa fa-facebook-square fa-3x"></i>
                            </NavLink>
                            <NavLink to="#" >
                                <i className="fa fa-twitter-square fa-3x"></i>
                            </NavLink>
                            <NavLink to="#">
                                <i className="fab fa-google-plus-g fa-3x"></i>
                            </NavLink>
                            <NavLink to="#">
                                <i className="fab fa-youtube-square fa-3x"></i>
                            </NavLink>
                        </Stack>
                    </div>

                </div>

                <div className="pages p-5">
                    <h4>Explore</h4>
                    <Stack gap={4}>
                        <NavLink className="route" to="/home">
                            Home
                        </NavLink>
                        <NavLink className="route" to="/explore" >
                            Explore
                        </NavLink>
                        <NavLink className="route" to="/reviews">
                            Reviews
                        </NavLink>
                        <NavLink className="route" to="/blog">
                            Blog
                        </NavLink>
                    </Stack>
                </div>
            </div>

            {/* copyright section  */}
            <div className="copyright-section">
                <p>Drona <i className="fa fa-copyright" aria-hidden="true">All Rights Reserved - 2021 |  Made With <i className="fas fa-heart"></i> by Sadman Sakib</i></p>
            </div>
        </div>
    );
};

export default Footer;