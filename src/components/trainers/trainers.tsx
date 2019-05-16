import * as React from 'react';
import '../css/trainers.css';
import Image1 from '../images/image1.jpg';


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
              <div className="col-md-3">
              <div className="card">
              <img src={Image1} alt="Avatar" className="avatar-cl"/>
              <div className="bottom-cl">
              <h4><b>Trainer Name</b></h4>
              <p><a href="#">View Bio</a></p>
              </div>
              </div>
              </div>
              <div className="col-md-3">
              <div className="card">
              <img src={Image1} alt="Avatar" className="avatar-cl"/>
              <div className="bottom-cl">
              <h4><b>Trainer Name</b></h4>
              <p><a href="#">View Bio</a></p>
              </div>
              </div>
              </div>
              <div className="col-md-3">
              <div className="card">
              <img src={Image1} alt="Avatar" className="avatar-cl"/>
              <div className="bottom-cl">
              <h4><b>Trainer Name</b></h4>
              <p><a href="#">View Bio</a></p>
              </div>
              </div>
              </div>
              <div className="col-md-3">
              <div className="card">
              <img src={Image1} alt="Avatar" className="avatar-cl"/>
              <div className="bottom-cl">
              <h4><b>Trainer Name</b></h4>
              <p><a href="#">View Bio</a></p>
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
