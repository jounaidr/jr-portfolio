import React, { Component } from 'react';

export default class Resume extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="resume">
                    {/* Work
      ----------------------------------------------- */}
                    <div className="row work">
                        <div className="three columns header-col">
                            <h1><span>Work</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Clearswift</h3>
                                    <p className="info">R&D Software Development Placement <span>•</span> <em className="date">July 2019 - July 2020</em></p>
                                    <p>
                                        As part of an agile development team, I was responsible for: the development and maintenance of
                                        the Information Governance Platform server backend; the development of client-side features for
                                        the Secure Email Gateway; the creation and maintenance of CI pipelines (Jenkins); the design and
                                        implementation of high-availability for the PostgreSQL databases; the development of automated
                                        client-side tests (Cucumber) and the completion of manual regression testing (Qtest).
                                    </p>
                                </div>
                            </div> {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>JD Sports PLC</h3>
                                    <p className="info">Sales Adviser <span>•</span> <em className="date">August 2016 - July 2017</em></p>
                                    <p>
                                        My responsibilities included being part of a small team that would efficiently run the footwear
                                        department of a busy high-street store whilst providing excellent and personalized customer service
                                        in order to secure sales.
                                    </p>
                                </div>
                            </div> {/* item end */}
                        </div> {/* main-col end */}
                    </div> {/* End Work */}
                    {/* Education
      ----------------------------------------------- */}
                    <div className="row education">
                        <div className="three columns header-col">
                            <h1><span>Education</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>University of Reading</h3>
                                    <p className="info">BSc Computer Science <span>•</span> <em className="date">July 2021</em></p>
                                    <p>
                                        <h5>Third Year Modules (TBC):</h5>
                                        Artificial Intelligence, Blockchain Computing, Data Science Algorithms and Tools, Image Analysis,
                                        Text Mining and Natural Language Processing, Visual Intelligence, Virtual Reality, Development of
                                        Transferable Skills through a School Placement.
                                        <h5>Second Year Modules (1st):</h5>
                                        Algorithms and Operating Systems, Computer Architecture, Compilers, Databases and Information
                                        Security, Human Computer Interaction, Java, Neural Networks and System Design.
                                        <h5>First Year Modules (1st):</h5>
                                        Applications of Computer Science, Fundamentals of Computer Science, Mathematics for Computer
                                        Science, Programming, Software Engineering, Codes and Code Breaking.
                                    </p>
                                </div>
                            </div> {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>New College Swindon</h3>
                                    <p className="info">Computer Science, Mathematics, Physics (A-level) <span>•</span> <em className="date">May 2017</em></p>
                                </div>
                            </div> {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Lydiard Park Academy</h3>
                                    <p className="info">11 GCSEs from grade B to A* (Including A* Computer Science) <span>•</span> <em className="date">July 2015</em></p>
                                </div>
                            </div> {/* item end */}
                        </div> {/* main-col end */}
                    </div> {/* End Education */}
                    {/* Skills
      ----------------------------------------------- */}
                    <div className="row skill">
                        <div className="three columns header-col">
                            <h1><span>Skills</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="bars">
                                <ul className="skills">
                                    <li><span className="bar-expand Java" /><em>Java</em></li>
                                    <li><span className="bar-expand Bash" /><em>Bash/Unix</em></li>
                                    <li><span className="bar-expand SQL" /><em>SQL</em></li>
                                    <li><span className="bar-expand Groovy" /><em>Groovy</em></li>
                                    <li><span className="bar-expand React" /><em>React</em></li>
                                </ul>
                            </div>{/* end skill-bars */}
                        </div> {/* main-col end */}
                    </div> {/* End skills */}
                </section>
            </React.Fragment>
        );
    }
}