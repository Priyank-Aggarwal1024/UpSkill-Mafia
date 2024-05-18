import React from 'react';
import '../styles/opportunities.css'
import Star from '/AwardStarPink.png'
import Internship from '../assets/Internship.png'
function Opportunities(props) {
    return (
        <>
            <section className="opportunities">
                <h3 className="opportunity-heading section-heading text-gray">Unlock <span className="text-pink">6 Certificates</span> & <span className="text-pink"> Internship Opportunities!</span></h3>
                <div className="opportunity-card">
                    <div className="opportunity-card-1 bg-light-pink b-dark-pink">
                        <h3 className="sub-heading text-dark-pink">Get 6 Industry Recognized Certificates!</h3>
                        <div className="certificate">
                            <div className="certificate-left">
                                <div className="certificate-left-top">
                                    <p>Certificate-ID: <b>TD-UIUX-2023-234</b></p>
                                    <p>DatE of issue: <b>September 6, 2023</b></p>
                                </div>
                                <div className="certificate-left-middle">
                                    <p className="ui-ux">UI UX DESIGINING</p>
                                    <p className="text-white">CERTIFICATE OF Completion</p>
                                </div>
                                <div className="certificate-left-bottom">
                                    <b className="text-white" style={{ fontSize: "6px" }}>WWW.LOGO.COM</b>
                                </div>
                            </div>
                            <div className="certificate-right">
                                <div className="certificate-right-top">
                                    <img src="/Tutedude 1.png" alt="Brand Logo" />
                                    <span>Verify at www.LOGO.com/verify-certificate</span>
                                </div>
                                <div className="certificate-right-middle">
                                    <p className="presented">This Certificate is proudly presented to</p>
                                    <p className="certificate-name f-20">John Doe</p>
                                    <p className="certificate-about">This certifies that John Doe completed the UI UX Designing course on September 22, 2023. All coursework and assessments were successfully finished to meet LOGO's standards. LOGO wishes you the best in all your future endeavors.</p>
                                </div>
                                <div className="certificate-right-bottom">
                                    <div className="signature">
                                        <span className="sample">Sample</span>
                                        <span className="sign-name">
                                            Shivam Goyal
                                        </span>
                                        <span className="co-founder">Co Founder</span>
                                    </div>
                                    <div className="signature">
                                        <span className="sample">Sample</span>

                                        <span className="sign-name">
                                            Abishek Gangwar
                                        </span>
                                        <span className="co-founder">Co Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opportunity-button flex">
                            <p className=" text-pink"><img className="va-middle" src={Star} alt="Star" /> Personal Mentorship</p>
                            <p className=" text-pink"><img className="va-middle" src={Star} alt="Star" /> Internship Assistance</p>

                        </div>
                    </div>
                    <div className="opportunity-card-2 bg-light-yellow b-light-yellow">
                        <h3 className="sub-heading text-dark-pink">Bag Internship Opportunities!</h3>
                        <p className="opportunity-card-2-about">With every course, we make you not only industry-ready but also help you crack your first internship.</p>
                        {/* <div className="opportunity-card-img-2"></div> */}
                        <img src={Internship} className="opportunity-card-img-2" alt="Internship" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Opportunities;