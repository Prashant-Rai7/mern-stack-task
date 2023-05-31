import React from 'react';

export default function Footer(){
    return(
        
        <footer className="text-center text-lg-start text-muted" id="footer">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
            </div>
            <div>
            <a href="/" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="me-4 text-reset">
                <i className="fab fa-google"></i>
            </a>
            <a href="/" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="me-4 text-reset">
                <i className="fab fa-github"></i>
            </a>
            </div>
        </section>
        <section className="">
            <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>Elluminati INC
                </h6>
                <p>
                    Elluminati provides diverse mobility solutions helping SMBs, enterprises, government, and startups bestow tech stacks, rendering innovative touch to the business.
                </p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    Products
                </h6>
                <p>
                    <a href="#!" className="text-reset">Eber Taxi</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">EDelivery</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">ESuper</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Enance</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Eswap</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">EServices</a>
                </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                </h6>
                <p>
                    <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Help</a>
                </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i>
                    After Cosmoplex Cinema,
                    Beside Shivam-Jemin Party Plot,
                    Opposite Anmol Heights,
                    Kalawad Road, Rajkot-360 005.
                    Gujarat, India.</i></p>
                <p>
                    <br/>
                    <i className="fas fa-envelope me-3"></i>
                    https://www.elluminatiinc.com/
                </p>
                <p><i className="fas fa-phone me-3"></i> +1 415-547-0560</p>
                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                </div>
            </div>
            </div>
        </section>
        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            All Rights Reserved © 2023 Copyright:
            <a className="text-reset fw-bold" href="https://www.linkedin.com/in/prashantrrai">prashantrai.com</a>
        </div>
        </footer>

    )
}