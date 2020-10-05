import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="about">
                    <div className="row">
                        <div className="three columns">
                            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                        </div>
                        <div className="nine columns main-col">
                            <h2>About Me</h2>
                            <p>
                                I have just finished my placement year at Clearswift (July), where I gained a lot of Java and general software development knowledge,
                                and am currently looking for a part time opportunity to fit around my studies, and graduate opportunities starting at the end of this academic year.
                                I am also working on my dissertation, where I am creating a peer to peer blockchain network with a web client application in Java.
                                Check out my resume and scroll down to check out some of my projects!
                            </p>
                            <div className="row">
                                <div className="columns contact-details">
                                    <h2>Contact Details</h2>
                                    <p className="address">
                                        <span>Jounaid Ruhomaun</span><br />
                                        <span>07904 001710</span><br />
                                        <span>jounaidruhomaun@googlemail.com</span>
                                    </p>
                                </div>
                                <div className="columns download">
                                    <p>
                                        <a style={{display: "table-cell"}} target="_blank" href="https://drive.google.com/file/d/1tSp8h3VINTkCv_WMj_IbbQQ-N9kGRzla/view?usp=sharing" className="button"><i className="fa fa-download" />Download Resume</a>
                                    </p>
                                </div>
                            </div> {/* end row */}
                        </div> {/* end .main-col */}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
