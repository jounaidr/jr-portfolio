import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#resume">Resume</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
                            <li><a className="smoothscroll" href="#testimonials">References</a></li>
                        </ul> {/* end #nav */}
                    </nav> {/* end #nav-wrap */}
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">Hi, I'm Jounaid.</h1>
                            <h3><span>I'm a third year Computer Science student at the University of Reading. I am mainly into backend development and am currently working on my dissertation. <a style={{display: "table-cell"}} target="_blank" href="https://github.com/jounaidr/JR-portfolio-react/tree/master/jr-portfolio" >Click here</a> to view the repo!</span></h3>
                            <hr />
                            <ul className="social">
                                <li><a style={{display: "table-cell"}} target="_blank" href="https://github.com/jounaidr"><i className="fa fa-github" /></a></li>
                                <li><a style={{display: "table-cell"}} target="_blank" href="https://www.linkedin.com/in/jounaid-ruhomaun-b38960aa"><i className="fa fa-linkedin" /></a></li>
                                <li><a style={{display: "table-cell"}} target="_blank" href="https://github.com/jounaidr/JR-portfolio-react/tree/master/jr-portfolio"><i className="fa fa-dribbble" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                    </p>
                </header>
            </React.Fragment>
        );
    }
}