import React from 'react';
import '../styles/refund.css'
function Refund(props) {
    return (
        <>
            <section className="refund">
                <h3 className="refund-heading text-gray">Don't miss out on this <span className="text-pink">limited-time opportunity</span> to learn for <span className="text-pink">Free!</span></h3>
                <div className="refund-card">
                    <h4 className="refund-offer text-white">100% Refund Offer </h4>
                </div>
            </section>
        </>
    );
}

export default Refund;