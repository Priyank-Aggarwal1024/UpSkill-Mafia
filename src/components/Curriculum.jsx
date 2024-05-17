import React, { useRef, useState } from 'react';
import '../styles/curriculum.css'
import CourseCard from './CourseCard';
function Curriculum(props) {
    const courses = [{ heading: "C++", about: "Learn C++ for strong programming fundamentals." },
    { heading: "MERN Stack", about: "Master the MERN stack for high-demand projects." },
    { heading: "Data Structure & Algorithm", about: "Excel in Data Structures and Algorithms for interview success." },
    { heading: "Competitve Programming", about: "Excel in Data Structures and Algorithms for interview success." }
    ]
    const [string1, setString1] = useState("DATASCIENCE")
    const [string2, setString2] = useState("Data Science ")
    const resize = (event) => {
        // console.log(event.target)
        if (window.innerWidth < "480") {
            setString1("Full Stack");
            setString2("Full Stack Developer")
        }
        else {
            setString1("DATASCIENCE");
            setString2("Data Science ");
        }
    }
    window.addEventListener('resize', resize)
    return (
        <>
            <section className="curriculum bg-light-pink">
                <div className="curriculum-top">
                    <p className="curriculum-top-button text-pink">{string1} COURSE LEARNING PATH</p>
                    <h2 className="curriculum-top-heading text-dark-gray"><span className="gradient">{string2}</span>&nbsp; Course Curriculum</h2>
                </div>
                <div className="curriculum-courses">
                    {courses.map((item, idx) => <CourseCard course={item} key={idx} />)}
                </div>
            </section>
        </>
    );
}

export default Curriculum;