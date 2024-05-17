import React from 'react';
import '../styles/overview.css'
import Navbar from './Navbar';
import Hat from '../assets/Graduation hat.png'
import Star from '../assets/award_star.png'
import Interrogation from '../assets/fi-br-interrogation.png'
import Vector from '../assets/Vector.png'
function Overview(props) {
    return (
        <>
            <section className="section overview">
                <Navbar />
                <div className="overview-hero">
                    <div className="hero-iit b-dark-yellow"><img className="va-middle" src={Hat} alt="Graduate Hat" />An <b>IIT Delhi</b> Alumni Initiative</div>
                    <h1>Become an Expert in the field of <span className="text-pink">Data Science with 6 courses</span></h1>
                    <p>A specially crafted Tech Kickstarter, with 5+ extensive online courses.</p>
                    <div className="hero-button flex">
                        <p className="b-light-yellow bg-light-yellow"><img className="va-middle" src={Star} alt="Star" /> Personal Mentorship</p>
                        <p className="b-light-yellow bg-light-yellow"><img className="va-middle" src={Star} alt="Star" /> Internship Assistance</p>
                        <p className="b-light-yellow bg-light-yellow"><img className="va-middle" src={Star} alt="Star" /> Industry Certified Courses</p>
                    </div>
                    <div className="hero-button-bottom flex">
                        <p className="text-white bg-pink enroll-now">Enroll Now <img className="va-middle" src={Vector} alt="Vector" /></p>
                        <p className="text-pink know-more">Know More <img className="va-middle" src={Interrogation} alt="Question mark" /></p>
                    </div>
                </div>
                <div className="overview-footer bg-gradient-pink">
                    <div className="overview-footer-card">
                        <img src="./Group.png" alt="Group" className="card-icon" />
                        <div className="card-about">
                            <p className="card-about-heading text-pink">24</p>
                            <p className="card-about-text text-gray">Courses</p>
                        </div>
                    </div>
                    <div className="overview-footer-card border-card">
                        <img src="./Graduated.png" alt="Graduated" className="card-icon" />
                        <div className="card-about">
                            <p className="card-about-heading text-pink">30k+</p>
                            <p className="card-about-text text-gray">Learners</p>
                        </div>
                    </div>
                    <div className="overview-footer-card border-card">
                        <img src="./Question mark.png" alt="Question Mark" className="card-icon" />
                        <div className="card-about">
                            <p className="card-about-heading text-pink">100k+</p>
                            <p className="card-about-text text-gray">Doubts Solved</p>
                        </div>
                    </div>
                    <div className="overview-footer-card border-card">
                        <img src="./Complete.png" alt="Complete" className="card-icon" />
                        <div className="card-about">
                            <p className="card-about-heading text-pink">10k+</p>
                            <p className="card-about-text text-gray">Student Projects</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Overview;