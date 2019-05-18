import * as React from 'react';
import '../css/trainers.css';
import Image1 from '../images/AnubSir.jpg';
import Image2 from '../images/ArvindPandey.jpg';
import Image3 from '../images/AshishGoyal.jpg';
import Image4 from '../images/MayankMittal.jpg';
import Image5 from '../images/Neeraj.jpg';
import Image6 from '../images/Pankaj.jpg';
import Image7 from '../images/RevtiRamanSingh.jpg';
import Image8 from '../images/Sanjeev.jpg';
import Image9 from '../images/VipulGupta.jpg';


class Course extends React.Component {
  public render() {
    return (
      <div className="trainer-cl">
      <div className="container trainer-header">
        <div className="row">
          <div className="col-md-1 gift-img">
          <i className="fa fa-gift" aria-hidden="true"/>
          </div>
          <div className="col-md-11 header-text">
          <h3>Our Trainers</h3>
          <p>We bring in trainers with hands on experience and unmatched expertise.</p>
          </div>
        </div>
        </div>
<div className="container">
    <div className="row">
        <div className="row">
            <div className="col-md-9"/>
            <div className="col-md-3">
                <div className="controls pull-right hidden-xs">
                    <a className="left fa fa-chevron-left btn btn-success" href="#carousel-example"
                        data-slide="prev"/>
                        <a className="right fa fa-chevron-right btn btn-success" href="#carousel-example"
                            data-slide="next"/>
                </div>
            </div>
        </div>
        <div id="carousel-example" className="carousel slide hidden-xs" data-ride="carousel">
            <div className="carousel-inner">
                <div className="item active">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="col-item">
                                <div className="photo">
                                    <img src={Image1} className="img-responsive" alt="a" />
                                </div>
                                <div className="info">
                                    <div className="row">
                                        <div className="biocard col-md-12">
                                            <h5>
                                              Anub Sir
                                            </h5>
                                            <h6>Founder (Opscale.io)</h6>
                                          <a href="#">View Bio</a>
                                        </div>
                                    </div>
                                    <div className="clearfix"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="col-item">
                                <div className="photo">
                                    <img src={Image2} className="img-responsive" alt="a" />
                                </div>
                                <div className="info">
                                    <div className="row">
                                        <div className="biocard col-md-12">
                                            <h5>
                                              Arvind Pandey</h5>
                                              <h6>Amazon, India</h6>
                                            <a href="#">View Bio</a>
                                        </div>
                                        <div className="rating hidden-sm col-md-6"/>
                                    </div>
                                    <div className="clearfix"/>
                                  </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="col-item">
                                <div className="photo">
                                    <img src={Image3} className="img-responsive" alt="a" />
                                </div>
                                <div className="info">
                                    <div className="row">
                                        <div className="biocard col-md-12">
                                            <h5>
                                            AshishGoyal
                                            </h5>
                                            <h6>Amazon, India</h6>
                                            <a href="#">View Bio</a>
                                        </div>
                                    </div>
                                    <div className="clearfix"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="col-item">
                                <div className="photo">
                                    <img src={Image4} className="img-responsive" alt="a" />
                                </div>
                                <div className="info">
                                    <div className="row">
                                        <div className="biocard col-md-12">
                                            <h5>
                                                Mayank Mittal
                                            </h5>
                                            <h6>Tech Lead intugine Technology</h6>
                                            <a href="#">View Bio</a>
                                        </div>
                                    </div>
                                    <div className="clearfix"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="col-item">
                                <div className="photo">
                                    <img src={Image5} className="img-responsive" alt="a" />
                                </div>
                                <div className="info">
                                    <div className="row">
                                        <div className="biocard col-md-12">
                                            <h5>Neeraj</h5>
                                            <h6>Founder</h6>
                                            <a href="#">View Bio</a>
                                        </div>
                                    </div>
                                    <div className="clearfix"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="col-item">
                                <div className="photo">
                                    <img src={Image6} className="img-responsive" alt="a" />
                                </div>
                                <div className="info">
                                    <div className="row">
                                        <div className="biocard col-md-12">
                                            <h5>
                                            Pankaj
                                            </h5>
                                            <h6>Tester</h6>
                                            <a href="#">View Bio</a>
                                        </div>
                                        <div className="rating hidden-sm col-md-6"/>
                                    </div>
                                    <div className="clearfix"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="col-item">
                                <div className="photo">
                                    <img src={Image7} className="img-responsive" alt="a" />
                                </div>
                                <div className="info">
                                    <div className="row">
                                        <div className="biocard col-md-12">
                                            <h5>
                                            Revti RamanSingh
                                            </h5>
                                            <h6>AWS Seattla</h6>
                                            <a href="#">View Bio</a>
                                        </div>
                                    </div>
                                    <div className="clearfix"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="col-item">
                                <div className="photo">
                                    <img src={Image8} className="img-responsive" alt="a" />
                                </div>
                                <div className="info">
                                    <div className="row">
                                        <div className="biocard col-md-12">
                                            <h5>
                                                Sanjeev
                                            </h5>
                                            <h6>Ola, India</h6>
                                            <a href="#">View Bio</a>
                                        </div>
                                    </div>
                                    <div className="clearfix"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="col-item">
                            <div className="photo">
                                <img src={Image9} className="img-responsive" alt="a" />
                            </div>
                            <div className="info">
                                <div className="row">
                                    <div className="biocard col-md-12">
                                        <h5>
                                            Vipul Gupta
                                        </h5>
                                        <h6>IIT Kanpur, University of Berkely</h6>
                                        <a href="#">
                                            View Bio</a>
                                    </div>
                                </div>
                                <div className="clearfix"/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    </div>

    );
  }
}

export default Course;
