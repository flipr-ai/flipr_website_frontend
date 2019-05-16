import * as React from 'react';
import '../css/socialmedia.css';

class SocialMedia extends React.Component {
  public render() {
    return (
    <div className="socialMedia-cl">
    <div className="container">
    <div className="row">
      <div className="col-md-1 gift-img">
      <i className="fa fa-gift" aria-hidden="true"/>
      </div>
      <div className="col-md-11 header-text">
      <h3>Get in Touch</h3>
      <p>We bring in trainers with hands on experience and unmatched expertise.</p>
      </div>
      </div>
    </div>
        <div className="container">
          <div className="row">
            <div className="col-md-1"/>
            <div className="col-md-11 socialmedia-link-cl">
            <i className="fa fa-envelope-o" aria-hidden="true"/>
            <i className="fa fa-twitter" aria-hidden="true"/>
            <i className="fa fa-google-plus" aria-hidden="true"/>
            <i className="fa fa-instagram" aria-hidden="true"/>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default SocialMedia;
