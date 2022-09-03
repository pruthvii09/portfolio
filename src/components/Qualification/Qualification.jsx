import React from "react";
import './Qualification.css';

const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification-icon"></i>Education
                    </div>

                    <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt qualification-icon"></i>{""} Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className="qualification__content qualification__content-active">
                        <div className="qualifictaion__data">
                            <div>
                                <h3 className="qualification__title">ABC</h3>
                                <span className="qualification__subtitle">PES Modern College of Engineering</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
                        </div>

                        <div className="qualifictaion__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Graduation</h3>
                                <span className="qualification__subtitle">SpringDale Jr. College Aurangabad</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2019-2021
                                </div>
                            </div>
                        </div>


                        <div className="qualifictaion__data">
                            <div>
                                <h3 className="qualification__title">XYZ</h3>
                                <span className="qualification__subtitle">School</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 20XX- 20XX
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
                        </div>

                        <div className="qualifictaion__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">PQR</h3>
                                <span className="qualification__subtitle">Jr. School</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2010-2012
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="education__content">
                        <div className="qualifictaion__data">
                            <div>
                                <h3 className="qualification__title">Graduation</h3>
                                <span className="qualification__subtitle">PES Modern College of Engineering</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        <div className="qualifictaion__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">HSC</h3>
                                <span className="qualification__subtitle">SpringDale Jr. College Aurangabad</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2019-2021
                                </div>
                            </div>
                        </div>


                        <div className="qualifictaion__data">
                            <div>
                                <h3 className="qualification__title">Schooling</h3>
                                <span className="qualification__subtitle">Podar International School Jalna</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2010- 2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualification;