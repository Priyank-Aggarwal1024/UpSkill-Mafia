import React from 'react';
import '../styles/home.css'
import Overview from './Overview';
import Curriculum from './Curriculum';
import Refund from './Refund';
import Testimonials from './Testimonials';
import Opportunities from './Opportunities';
import Courses from './Courses';
function Home(props) {
    return (
        <>
            <Overview />
            <Curriculum />
            <Refund />
            <Opportunities />
            <Courses />
            <Testimonials />
        </>
    );
}

export default Home;