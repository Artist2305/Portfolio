import React from 'react';
import '../css/ContactMe.css';
import post from '../svg/envelope.svg';

const ContactMe = () => {

        return (
            <div className="contact-me-container">
                <div className="col" data-aos="fade-up">
                    <div className="contact-title">
                        <div className="row">
                            <h2>LET'S WORK TOGETHER</h2>
                        </div>
                        <div className="row">
                            <div className="line-1"></div>
                            <div className="line-2"></div>
                            <div className="line-3"></div>
                        </div>
                    </div>
                </div>
                <div className="form-social-container" >
                    <div className="col">
                        <div className="col" data-aos="fade-up">
                            <h3>FEEL FREE TO CONTACT ME</h3>
                            <p>Proin laoreet turpis ut euismod fringilla. Quisque viverra ultricies pharetra. Maecenas semper luctus urna. Praesent dolor sem, consectetur id vulputate at, iaculis et nisi. </p>
                        </div>
                        <div className="row">
                            <form action="" className="contact-form">
                                <div className="col" data-aos="fade-up">
                                    <label >Your Name</label>
                                    <input type="text" id="name" name="name" placeholder="What's Your name?"></input>
                                </div>
                                <div className="col" data-aos="fade-up">
                                    <label >Your email address</label>
                                    <input type="text" id="emailAddress" name="emailAddress" placeholder="What's Your email address?"></input>
                                </div>
                                <div className="col" data-aos="fade-up">
                                    <label >Message</label>
                                    <textarea name="message" placeholder="What's Your message?"></textarea>
                                    <button className="send-button row center-horz">
                                        <div><img src={post}></img></div>
                                        <div><span>SEND MESSAGE</span></div>
                                        <div className="button-background"></div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col social-media center-all" data-aos="fade-up">
                        <div className="square-social-background">
                            <div className="sq-s-1"></div>
                            <div className="sq-s-2"></div>
                            <div className="sq-s-3"></div>
                        </div>
                        <h3>CHECK MY PROFILES ON</h3>
                        <span>Facebook</span>
                        <span>Instagram</span>
                        <span>GraphicRiver</span>
                        <span>LinkeedIn</span>
                    </div>
                </div>
            </div>
        );
}

export default ContactMe