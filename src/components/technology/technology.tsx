import * as React from 'react';
import '../css/technology.css';
import Bootstrap from '../images/bootstrap.png';
import Css3 from '../images/css3.png';
import Expressjs from '../images/expressjs.png';
import Html5 from '../images/html5.png';
import Mongodb from '../images/mongodb.jpg';
import Nodejs from '../images/nodejs.png';
import Reactjs from '../images/reactjs.png';
import Typescript from '../images/typescript.png';

class Technology extends React.Component {
  public render() {
    return (
    <div className="tech-cl">
        <div className="container tech-header">
          <div className="row">
            <div className="col-md-1 gift-img">
            <i className="fa fa-gift" aria-hidden="true"/>
            </div>
            <div className="col-md-11 header-text">
            <h3>Startups working with these technologies</h3>
            </div>
          </div>
          </div>
          <div className="container">
            <div className="row tech-list-cl">
              <div className="col-md-3">
              <img src={Reactjs} alt="reactjs"/>
              </div>
              <div className="col-md-3">
              <img src={Typescript} alt="typescript"/>
              </div>
              <div className="col-md-3">
              <img src={Html5} alt="Html5"/>
              </div>
              <div className="col-md-3">
              <img src={Css3} alt="css3"/>
              </div>
            </div>
            <div className="row tech-list-cl">
              <div className="col-md-3">
              <img src={Nodejs} alt="Nodejs"/>
              </div>
              <div className="col-md-3">
              <img src={Expressjs} alt="Expressjs"/>
              </div>
              <div className="col-md-3">
              <img src={Mongodb} alt="Mongodb"/>
              </div>
              <div className="col-md-3">
              <img src={Bootstrap} alt="Bootstarp"/>
              </div>
            </div>
          </div>

    </div>
    );
  }
}

export default Technology;
