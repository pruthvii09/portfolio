import React from "react";

const Services = () => {
    return (
        <section className="services section" id="services">

            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil services__icon"></i>
                        <h3 className="services__title">Frontend <br />Development</h3>
                    </div>

                    <span className="services__button">View More <i className="uil uil-arrow-right services__buton-icon"></i></span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title"></h3>
                            <p className="services__modal-description">Learning HTML since 2 years and still in a learning phase</p>

                            <ul className="services__modal-services">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-player">I develop the UI</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-player">Webpage Developement</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-player">Design Websites</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">UI/UX <br /> Designer</h3>
                    </div>

                    <span className="services__button">View More{''} <i className="uil uil-arrow-right services__buton-icon"></i></span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title"></h3>
                            <p className="services__modal-description">Learning HTML since 2 years and still in a learning phase</p>

                            <ul className="services__modal-services">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-player">I develop the UI</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-player">Webpage Developement</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-player">Design Websites</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">UI/UX<br />Designer</h3>
                    </div>

                    <span className="services__button">View More{''} <i className="uil uil-arrow-right services__buton-icon"></i></span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title"></h3>
                            <p className="services__modal-description">Learning HTML since 2 years and still in a learning phase</p>

                            <ul className="services__modal-services">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-player">I develop the UI</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-player">Webpage Developement</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-player">Design Websites</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Services;