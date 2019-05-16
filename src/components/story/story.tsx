import * as React from 'react';
import '../css/story.css';

class Story extends React.Component {
  public render() {
    return (
    <div className="story-cl">
        <div className="container story-header">
          <div className="row">
            <div className="col-md-1 gift-img">
            <i className="fa fa-gift" aria-hidden="true"/>
            </div>
            <div className="col-md-11 header-text">
            <h3>Our Story</h3>
            <p>We bring in trainers with hands on experience and unmatched expertise.</p>
            </div>
          </div>
          </div>
    </div>
    );
  }
}

export default Story;
