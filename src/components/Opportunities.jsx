import React from 'react';
import '../styles/opportunities.css'
function Opportunities(props) {
    return (
        <>
            <section className="opportunities">
                <h3 className="opportunity-heading section-heading text-gray">Unlock <span className="text-pink">6 Certificates</span> & <span className="text-pink"> Internship Opportunities!</span></h3>
                <div className="opportunity-card">
                    <div className="opportunity-card-1 bg-light-pink b-dark-pink">
                        <h3 className="sub-heading text-dark-pink">Get 6 Industry Recognized Certificates!</h3>
                        {/* <img className="opportunity-card-img-1" src="./new-certiciate-design.png" alt="certificate" /> */}
                    </div>
                    <div className="opportunity-card-2 bg-light-yellow b-light-yellow">
                        <h3 className="sub-heading text-dark-pink">Bag Internship Opportunities!</h3>
                        <p className="opportunity-card-2-about">With every course, we make you not only industry-ready but also help you crack your first internship.</p>
                        {/* <div className="opportunity-card-img-2"></div> */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Opportunities;