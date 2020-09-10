import React, { Component } from 'react';

export default class References extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="testimonials">
                    <div className="text-container">
                        <div className="row">
                            <div className="two columns header-col">
                                <h1><span>References</span></h1>
                            </div>
                            <div className="ten columns flex-container">
                                <div className="flexslider">
                                    <ul className="slides">
                                        <li>
                                            <blockquote>
                                                <p>Jounaid had a great year working with my team at Clearswift. He got a wide range of experience of work life, as the company was sold, had new owners, products released and celebrated, redundancies in the department and team re-organisations.
                                                    Jounaid played an active role in my team, taking the lead in researching and including a 3rd party database high availability application into the product that we develop, helping the team to achieve one of its key goals for a release.
                                                    He is often quite in meetings, but listens well and asks questions as, when he needs to. He has been keen to learn new technologies and has completed all that we asked of him.
                                                </p>
                                                <cite>Stephen Greenslade (Team Leader)</cite>
                                            </blockquote>
                                        </li> {/* slide ends */}
                                        {/*<li>*/}
                                        {/*    <blockquote>*/}
                                        {/*        <p>He's a good kid</p>*/}
                                        {/*        <cite>My Mum</cite>*/}
                                        {/*    </blockquote>*/}
                                        {/*</li> /!* slide ends *!/*/}
                                    </ul>
                                </div> {/* div.flexslider ends */}
                            </div> {/* div.flex-container ends */}
                        </div> {/* row ends */}
                    </div>  {/* text-container ends */}
                    {/*<a href="https://en.wikipedia.org/wiki/Hubble_Deep_Field">What is this image?</a> TODO: Implement this link hidden*/}
                </section>
            </React.Fragment>
        );
    }
}