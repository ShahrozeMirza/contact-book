import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaSkype } from 'react-icons/fa';

function MainContent({ contact }) {

    return (
        <>
                    <div className="col-md-8">
                        <div className="main-content p-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card">
                                        <img className="card-img-top" src={contact.img} alt="ct-img" />
                                        <div className="card-body">
                                            <h4 className="card-title mb-0">{contact.fullname}</h4>
                                            <p className="card-text">{contact.num}</p>
                                            <div className="card-icons">
                                                <a href="#" className="social-icons mr-2">
                                                    <FaFacebookF />
                                                </a>
                                                <a href="#" className="social-icons">
                                                    <FaSkype />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="ct-complete-info p-3">
                                        <h3>Contact Details</h3>
                                        <div className="ct-info">
                                            <h6>FULL NAME</h6>
                                            <p>{contact.fullname}</p>
                                        </div>
                                        <div className="ct-info">
                                            <h6>AGE</h6>
                                            <p>{contact.age}</p>
                                        </div>
                                        <div className="ct-info">
                                            <h6>ADDRESS</h6>
                                            <p>{contact.address}</p>
                                        </div>
                                        <div className="ct-info">
                                            <h6>Mobile No.</h6>
                                            <p>{contact.num}</p>
                                        </div>
                                        <div className="ct-info">
                                            <h6>EMAIL ADDRESS</h6>
                                            <p>{contact.email}</p>
                                        </div>
                                        <div className="ct-info">
                                            <h6>JOB</h6>
                                            <p>{contact.job}</p>
                                        </div>
                                        <div className="ct-info">
                                            <h6>EXPERIENCE</h6>
                                            <p>{contact.experience}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
        </>
    )
}

export default MainContent;
