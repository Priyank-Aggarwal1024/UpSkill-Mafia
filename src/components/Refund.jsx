import React, { useEffect, useState } from 'react';
import '../styles/refund.css'
function Refund(props) {
    const [value, setValue] = useState(25)
    const [string2, setString2] = useState("Data Scientist")

    const slider = (event) => {
        setValue(event.target.value)
    }
    const [step, setStep] = useState(true)
    useEffect(() => {
        if (window.innerWidth < 780) {
            setStep(false)

        }
        if (window.innerWidth < 480) {
            setString2("Full Stack Developers")
        }
    })
    const resize1 = (event) => {
        // console.log(event.target)
        if (window.innerWidth < 780) {
            setStep(false);
        }
        else {
            setStep(true);
        }
        if (window.innerWidth < 480) {
            setString2("Full Stack Developers")

        }
        else {
            setString2("Data Scientist")
        }
    }

    window.addEventListener('resize', resize1)
    return (
        <>
            <section className="refund">
                <h3 className="refund-heading section-heading text-gray">Don't miss out on this <span className="text-pink">limited-time opportunity</span> to learn for <span className="text-pink">Free!</span></h3>
                <div className="refund-card">
                    <h4 className="refund-offer text-white">100% Refund Offer 😎<div className="refund-design"></div></h4>
                    <div className="input">
                        <p className="seats">{value} Seats Left</p>
                        <div className="range">
                            <input type="range" min={0} max={100} defaultValue={25} id="range2" onChange={slider} className="range-input" style={{ background: `linear-gradient(to right, #FFC41B ${value}%, #9849FF 0%)` }} />
                        </div>

                    </div>
                    <p className="offer-end text-white f-20"><img src="./bx_time-five.png" alt="Clock" style={{ verticalAlign: "middle", marginRight: "10px" }} />Offer ends in 10:00Mins</p>
                </div>
                <div className="refund-step">
                    <h3 className="text-dark-pink refund-step-heading">How does it work?</h3>
                    <div className="refund-steps-list">
                        <div className="step-card">
                            <div className="step-button"><div className="strip-1"></div><div className="step-shape bg-pink">{step == true ? "Step" : null} 1</div></div>
                            <div className="step-box b-dark-pink">
                                <h3 className="step-card-heading f-20">
                                    Step 1 : Enroll into your favorite course for only ₹1,499
                                </h3>
                                <img src="./image 533.png" alt="Courses" />
                                <p className="card-bottom-text">Start Learning with <b>Lifetime Course Access.</b></p>
                            </div>
                        </div>
                        <div className="step-card">
                            <div className="step-button"><div className="strip-2"></div><div className="step-shape bg-pink">{step == true ? "Step" : null} 2</div></div>
                            <div className="step-box b-dark-pink">
                                <h3 className="step-card-heading f-20">
                                    Step 2: Complete Course & Assignments within 2 Years!
                                </h3>
                                <p className="card-badge flex"><span className="card-badge-value f-40">2</span><span className="badge-text text-dark-gray">years time from the date of enrollment</span></p>
                                <p className="card-bottom-text">Finish the course within <b>2 Years</b> to Qualify for Refund.</p>
                            </div>
                        </div>
                        <div className="step-card">
                            <div className="step-button"><div className="strip-3"></div><div className="step-shape bg-pink">{step == true ? "Step" : null} 3</div></div>
                            <div className="step-box b-dark-pink">
                                <h3 className="step-card-heading f-20">
                                    Step 3: Receive 100% Refund upon completion
                                </h3>
                                <p className="card-badge flex"><span className="card-badge-value f-40">100%</span><span className="badge-text text-dark-gray">Enrollment Fee is refunded</span></p>
                                <p className="card-bottom-text">Upon Course Completion within <b>2 Years,</b> Get Your <b>₹1,499 Back.</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="companies-hiring bg-light-yellow">
                <h3 className="section-heading">Top Companier Hiring <span className="gradient">{string2}</span></h3>
                <div className="company-hiring-grid">
                    <div className="company-hiring-box">Logo</div>
                    <div className="company-hiring-box">Logo</div>
                    <div className="company-hiring-box">Logo</div>
                    <div className="company-hiring-box">Logo</div>
                    <div className="company-hiring-box">Logo</div>
                </div>
            </section>
        </>
    );
}

export default Refund;