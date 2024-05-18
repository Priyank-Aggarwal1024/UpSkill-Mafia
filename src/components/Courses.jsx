import React from 'react';
import '../styles/courses.css'
function Courses(props) {
    return (
        <>
            <section className="courses">
                <div className="course-1 courses-card">
                    <div className="course-card-left"><h3 className="section-heading">Enroll for DataScience Bundle @₹1,499 <span className="price-change">₹2,600</span></h3>
                        <p className="course-about">Become an Expert in the data science field by enrolling into 6 Extensive courses!</p>
                        <p className="course-enroll"><img className="va-middle" src="/price_tag.png" alt="Price Tag" />&nbsp; Enroll Now</p></div>
                    <div className="course-card-right">
                        <div className="courses-right-top"><p>Total number of courses</p><b>6</b></div>
                        <div className="courses-right-middle"><p>Total number of Certificates</p><b>6</b></div>
                        <div className="courses-right-bottom"><p>Access to Courses</p><b>Lifetime</b></div>
                    </div>
                </div>
                <div className="course-2 courses-card">
                    <div className="course-card-left"><h3 className="section-heading">Enroll for DataScience Bundle @₹1,499 <span className="price-change">₹2,600</span></h3>
                        <p className="course-about">Become an Expert in the data science field by enrolling into 6 Extensive courses!</p>
                        <p className="course-enroll"><img className="va-middle" src="/price_tag.png" alt="Price Tag" />&nbsp; Enroll Now</p></div>
                    <div className="course-card-right">
                        <div className="course-design"></div>
                        <div className="courses-right-top"><p>Total number of courses</p><b>6</b></div>
                        <div className="courses-right-middle"><p>Total number of Certificates</p><b>6</b></div>
                        <div className="courses-right-bottom"><p>Access to Courses</p><b>Lifetime</b></div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Courses;