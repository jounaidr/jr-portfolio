import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="row">
                        <div className="twelve columns">
                            <ul className="social-links">
                                <li><a style={{display: "table-cell"}} target="_blank" href="https://github.com/jounaidr"><i className="fa fa-github" /></a></li>
                                <li><a style={{display: "table-cell"}} target="_blank" href="https://www.linkedin.com/in/jounaid-ruhomaun-b38960aa"><i className="fa fa-linkedin" /></a></li>
                                <li><a style={{display: "table-cell"}} target="_blank" href="https://github.com/jounaidr/JR-portfolio-react/tree/master/jr-portfolio"><i className="fa fa-dribbble" /></a></li>
                            </ul>
                        </div>
                        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}