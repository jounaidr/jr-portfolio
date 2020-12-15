import React, { Component } from 'react';

export default class Portfolio extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="portfolio">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Check Out Some of My Projects And Hobbies.</h1>
                            {/* portfolio-wrapper */}
                            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-01" title>
                                            <img alt="My Cryptocurrency Icon (Image Unavailable)" src="images/portfolio/irl_btc_pic.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Cryptocurrency</h5>
                                                    <p>My Dissertation</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-02" title>
                                            <img alt="https://github.com/jounaidr/warlock-runner" src="images/portfolio/console.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Warlock Runner</h5>
                                                    <p>Android Game</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-03" title>
                                            <img alt="" src="images/portfolio/JRpeg_test_img.bmp" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>JRpeg</h5>
                                                    <p>Python Image Compression Codec</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-04" title>
                                            <img alt="" src="images/portfolio/sailing-check.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Sailing</h5>
                                                    <p>Coate Water</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                            </div> {/* portfolio-wrapper end */}
                        </div> {/* twelve columns end */}
                        {/* Modal Popup
	      --------------------------------------------------------------- */}
                        <div id="modal-01" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-irl_btc_pic.jpg" alt="My Cryptocurrency Icon (Image Unavailable)" />
                            <div className="description-box">
                                <h4>My Dissertation</h4>
                                <p>I am currently working on the cryptocurrency node application called jrc-node, click details to get a view of my current progress!</p>
                                <span className="categories"><i className="fa fa-tag" />Dissertation, Blockchain, Cryptocurrency, Java, Web-client</span>
                            </div>
                            <div className="link-box">
                                <a href="https://github.com/users/jounaidr/projects/1">Details</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-01 End */}
                        <div id="modal-02" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-warlock-runner.jpg" alt="https://github.com/jounaidr/warlock-runner/blob/master/DocResources/fig_2.png" />
                            <div className="description-box">
                                <h4>Warlock Runner</h4>
                                <p>Second year Java project where I made an android side scrolling shooting game. Click details to check out the repo!</p>
                                <span className="categories"><i className="fa fa-tag" />Android Studio, Java, Mobile Application, Game Optimization</span>
                            </div>
                            <div className="link-box">
                                <a href="https://github.com/jounaidr/warlock-runner">Details</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-02 End */}
                        <div id="modal-03" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-JRpeg_gui.PNG" alt="" />
                            <div className="description-box">
                                <h4>JRpeg</h4>
                                <p>An image compression codec based on JPEG implemented in python</p>
                                <span className="categories"><i className="fa fa-tag" />Python, OpenCV, Image Compression</span>
                            </div>
                            <div className="link-box">
                                <a href="https://github.com/jounaidr/JRpeg">Details</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-03 End */}
                        <div id="modal-04" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-sailing.jpg" alt="https://www.facebook.com/774662735926920/photos/a.875012535891939/875035552556304" />
                            <div className="description-box">
                                <h4>Sailing</h4>
                                <p>I completed up to level 3 RYA sailing at Coate Water Sailing Trust in Swindon. Check out this video of the lake!</p>
                                <span className="categories"><i className="fa fa-tag" />Sailing, Water Sports</span>
                            </div>
                            <div className="link-box">
                                <a href="https://www.facebook.com/Coate-Water-Sailing-Trust-774662735926920/?ref=page_internal">Details</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-04 End */}
                    </div> {/* row End */}
                </section>
            </React.Fragment>
        );
    }
}