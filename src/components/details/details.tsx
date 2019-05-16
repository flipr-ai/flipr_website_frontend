import * as React from 'react';
import '../css/details.css';
import Image1 from '../images/image1.jpg';


class Details extends React.Component {
  public render() {
    return (
    <div className="">
      <div className="container detail-header">
        <div className="row">
          <div className="col-md-1 gift-img">
          <i className="fa fa-gift" aria-hidden="true"/>
          </div>
          <div className="col-md-11 header-text">
          <h3>Get prepared to face the world</h3>
          <p>Learn the latest programming languges widely</p>
          </div>
        </div>
        <div className="container detail-cl">
          <div className="row">
            <div className="col-md-4">
            <img src={Image1} alt="image1"/>
            <h3>Keep up with trend</h3>
            <p>Learn the latest programming languages widely</p>
            </div>
            <div className="col-md-4">
            <img src={Image1} alt="image1"/>
            <h3>Keep up with trend</h3>
            <p>Learn the latest programming languages widely</p>
            </div>
            <div className="col-md-4">
            <img src={Image1} alt="image1"/>
            <h3>Keep up with trend</h3>
            <p>Learn the latest programming languages widely</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Details;
