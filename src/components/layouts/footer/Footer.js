import React from 'react';
import './style.css'

const Footer = () => {
    return (
        <div>
            <div>
                <section className="footer">
                    <div className="box-container">
                        <div className='box'>
                            <h1>Dermatica</h1>
                        </div>
                        <div className="box">
                            <h1>quick links</h1>
                            <a href="#Home">Start consultation</a>
                            <a href='/'>Personalised formulas</a>
                            <a href="#segment">about us</a>
                            <a href="#review">Login</a>
                        </div>
                        <div className='box'>
                             <h1>information</h1>
                             <a>support centre</a>
                             <a>terms and conditions</a>
                             <a>privacy policy</a>
                             <a>refund policy</a>

                        </div>

                        <div className="box">
                            <h1>contact info</h1>
                            <a href="/">9080724529</a>
                            <a href="/">dermatica@gmail.com</a>
                            <a href="/">Chennai, india - 6000028</a>
                        </div>
                    </div>

                    <div className="credit">
                        {" "}
                        created by{" "}
                        <span>
                            <i className="copyright icon"></i>Hamza
                        </span>{" "}
                        | all rights reserved{" "}
                    </div>
                </section>
            </div>

        </div>
    );
}

export default Footer;
