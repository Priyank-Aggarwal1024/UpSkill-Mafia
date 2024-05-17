import React from 'react';
import '../styles/home.css'
import Overview from './Overview';
import Curriculum from './Curriculum';
import Refund from './Refund';
import Testimonials from './Testimonials';
function Home(props) {
    return (
        <>
            <Overview />
            <Curriculum />
            <Refund />
            <Testimonials />
        </>
    );
}

export default Home;