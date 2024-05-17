import React from 'react';
import { GoEye } from "react-icons/go";

function CourseCard({ course }) {
    return (
        <>
            <div className="curriculum-course-card">
                <div className="curriculum-card-left">
                    <h3 className="card-heading text-dark-gray">{course.heading}</h3>
                    <p className="curriculum-card-about text-light-gray">{course.about}</p>
                </div>
                <p className="curriculum-card-right bg-light-pink b-dark-pink"><GoEye className="unhide" /> View Curriculum</p>
            </div>
        </>
    );
}

export default CourseCard;