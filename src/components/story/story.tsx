import * as React from 'react';
import '../css/story.css';
import Dhruv from '../images/avatar.png';
import Sign from '../images/sign.png';


class Story extends React.Component {
  public render() {
    return (
    <div className="story-cl">
        <div className="container story-header">
          <div className="row">
            <div className="col-md-12 header-text">
            <h3>Our Story</h3>
            </div>
          </div>
          <div className="row story-details">
            <div className="col-md-3">
            <img src={Dhruv} alt="Dhruv Bansal"/>
            <div className="founder-cl">
            <p>Founder | Dhruv Bansal</p>
            </div>
            </div>
            <div className="col-md-9 story-text">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.</p>
              <div className="sign-img">
              <img src={Sign} alt="Sign"/>
              </div>
            </div>
          </div>
          </div>
    </div>
    );
  }
}

export default Story;
