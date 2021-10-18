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
                                                <p>
                                                    Molecules expand, molecules exist
                                                    I'm a molecule, but I stand in the mist
                                                </p>
                                                <cite>Yung Lean</cite>
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