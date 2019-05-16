import * as React from 'react';
import '../css/course.css';
import Backend from '../images/backend.png';
import Frontend from '../images/frontend.jpg';
import Fullstack from '../images/fullstack.jpg';

class Course extends React.Component {
  public render() {
    return (
    <div className="course-back-cl">
    <div className="container course-header">
        <div className="row">
          <div className="col-md-1 gift-img">
          <i className="fa fa-gift" aria-hidden="true"/>
          </div>
          <div className="col-md-11 header-text">
          <h3>Curriculum</h3>
          <p>Our currriculum is tailored to help you learn skills that will help you succeed</p>
          </div>
        </div>
          <div className="container course-detail">
          <div className="row">
            <div className="col-md-4 background-cl">
            <h3>Full Stack Development</h3>
            <img src={Fullstack} alt="fullstack"/>
            <div className="enroll-btn">
            <button type="button" className="btn">Enroll Now</button>
            </div>
            </div>
            <div className="col-md-4 background-cl">
            <h3>FrontEnd Development</h3>
            <img src={Frontend} alt="fullstack"/>
            <div className="enroll-btn">
            <button type="button" className="btn">Enroll Now</button>
            </div>
            </div>
            <div className="col-md-4 background-cl">
            <h3>BackEnd Development</h3>
            <img src={Backend} alt="fullstack"/>
            <div className="enroll-btn">
            <button type="button" className="btn">Enroll Now</button>
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
