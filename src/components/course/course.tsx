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
            <div className="col-md-4">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src={Fullstack} alt="Avatar" className="courseimage-cl"/>
                  <div className="course-header-cl">
                  <h3>FullStack Development</h3>
                    <div className="card-details">
                      <ul>
                        <li>3 day tours</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flip-card-back fullstack">
                <h3>&#8377; 120 </h3>
                  <div className="enroll-btn">
                  <button type="button" className="btn">Enroll Now</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="col-md-4">
              <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src={Frontend} alt="Avatar" className="courseimage-cl"/>
                  <div className="course-header-cl">
                  <h3>Frontend Development</h3>
                    <div className="card-details">
                      <ul>
                        <li>3 day tours</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flip-card-back fullstack">
                <h3>&#8377; 120 </h3>
                  <div className="enroll-btn">
                  <button type="button" className="btn">Enroll Now</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="col-md-4">
             <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src={Backend} alt="Avatar" className="courseimage-cl"/>
                  <div className="course-header-cl">
                  <h3>Backend Development</h3>
                    <div className="card-details">
                      <ul>
                        <li>3 day tours</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flip-card-back fullstack">
                <h3>&#8377; 120 </h3>
                  <div className="enroll-btn">
                  <button type="button" className="btn">Enroll Now</button>
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
