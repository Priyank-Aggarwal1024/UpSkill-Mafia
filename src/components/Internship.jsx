import React from 'react';
import '../styles/internship.css'
import H1 from '../assets/h1.png'
import H2 from '../assets/h2.png'
import H3 from '../assets/h3.png'
import H4 from '../assets/h4.png'
import H5 from '../assets/h5.png'
import H6 from '../assets/h6.png'
import Frame from '../assets/Frame.png'
function Internship(props) {
    return (
        <>
            <section className="internship">
                <div className="internship-highlights">
                    <h3 className="internship-highlights-heading internship-heading">Key Highlights</h3>
                    <div className="internship-highlights-cards">
                        <div className="highlight-card highlight-card-1">
                            <h4 className="highlight-card-heading">Industry Standard Courses</h4>
                            <img src={H1} alt="Intern" />
                        </div>
                        <div className="highlight-card highlight-card-2">
                            <h4 className="highlight-card-heading">Guranteed Certification
                                on Completion</h4>
                            <img src={H2} alt="Icon" />
                        </div>
                        <div className="highlight-card highlight-card-3">
                            <h4 className="highlight-card-heading">Guranteed Internship</h4>
                            <img src={H3} alt="Suitcase" />
                        </div>
                        <div className="highlight-card highlight-card-4">
                            <h4 className="highlight-card-heading">Personal Mentor</h4>
                            <img src={H4} alt="Mentorship" />
                        </div>
                        <div className="highlight-card highlight-card-5">
                            <h4 className="highlight-card-heading">Industry Standard
                                Projects</h4>
                            <img src={H5} alt="Skill" />
                        </div>
                        <div className="highlight-card highlight-card-6">
                            <h4 className="highlight-card-heading">24x7 Support
                                Over Chat</h4>
                            <img src={H6} alt="Chat" />
                        </div>
                    </div>
                </div>
                <div className="internship-process">
                    <h3 className="internship-process-heading internship-heading">How does the Internship Program works ?</h3>
                    <div className="internship-process-cards">
                        <div className="process-card process-card-1">
                            <img src={Frame} alt="Frame" className="process-icon" />
                            <div className="process-line" id="process-line"></div>
                            <div className="process-about">Learn from our structured pre recorded courses made by experts to meet industry needs</div>
                        </div>
                        <div className="process-card process-card-2">
                            <img src={Frame} alt="Frame" className="process-icon" />
                            <div className="process-line" id="process-line"></div>
                            <div className="process-about">1:1 live doubt solving support available throughout the day to clear your doubts instantly</div>
                        </div>
                        <div className="process-card process-card-3">
                            <img src={Frame} alt="Frame" className="process-icon" />
                            <div className="process-line" id="process-line"></div>
                            <div className="process-about">Personal mentors to guide and help you throughout your journey as a friend</div>
                        </div>
                        <div className="process-card process-card-4">
                            <img src={Frame} alt="Frame" className="process-icon" />
                            <div className="process-line" id="process-line"></div>
                            <div className="process-about">Build major projects which makes your resume stand apart</div>
                        </div>
                        <div className="process-card process-card-5">
                            <img src={Frame} alt="Frame" className="process-icon" />
                            <div className="process-line" id="process-line"></div>
                            <div className="process-about">Get guaranteed paid internships after completion of the program along with course completion certificates</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Internship;