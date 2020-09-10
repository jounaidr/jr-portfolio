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
                                I have just finished my placement year at Clearswift (July), where I gained a lot of Java and general software development knowledge, and am currently looking for a part time opportunity to fit around my studies.
                                I am also working on my dissertation, where I plan to create a peer to peer blockchain network with a web client application in Java. See my resume <a href="https://media-exp1.licdn.com/dms/document/C4D1FAQHvl6H222sPnQ/feedshare-document-pdf-analyzed/0?e=1599616800&v=beta&t=cIlvto61sVOkKseDyiLpogLZ0CEzDefyE6vQdYt0TEM" >here </a>
                                and <a className="smoothscroll" href="#portfolio">scroll down</a> to check out some of my projects!
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
                                        <a style={{display: "table-cell"}} target="_blank" href="https://media-exp1.licdn.com/dms/document/C4D1FAQHvl6H222sPnQ/feedshare-document-pdf-analyzed/0?e=1599616800&v=beta&t=cIlvto61sVOkKseDyiLpogLZ0CEzDefyE6vQdYt0TEM" className="button"><i className="fa fa-download" />Download Resume</a>
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
