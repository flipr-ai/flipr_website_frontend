import * as React from 'react';
import '../css/technology.css';
import Bigbasket from '../images/bigbasket.png';
import Curefit from '../images/curefit.png';
import Flipkart from '../images/flipkart.png';
import Grofers from '../images/grofers-logo.png';
import Hike from '../images/Hike.png';
import Inmobi from '../images/inmobi.png';
import Ola from '../images/ola.png';
import Paytm from '../images/Paytm.png';
import Policybazar from '../images/Policybazar.png';
import Practo from '../images/practo.png';
import Rivigo from '../images/Rivigo.png';
import Zomato from '../images/Zomato.png';

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
          <div className="row technology">
            <div className="col-md-3">
              <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={Bigbasket} alt="Bigbasket" className="technologyimage-cl"/>
                    </div>
                      <div className="flip-card-back fullstack">
                        <div className="card-details">
                          <ul>
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                          </ul>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={Curefit} alt="Curefit" className="technologyimage-cl"/>
                    </div>
                      <div className="flip-card-back fullstack">
                        <div className="card-details">
                          <ul>
                            <li>JavaScript</li>
                            <li>NodeJS</li>
                          </ul>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={Flipkart} alt="Flipkart" className="technologyimage-cl"/>
                    </div>
                      <div className="flip-card-back fullstack">
                        <div className="card-details">
                          <ul>
                            <li>Reactjs</li>
                            <li>NodeJS</li>
                          </ul>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
              <div className="col-md-3">
                  <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                          <img src={Grofers} alt="Grofers" className="technologyimage-cl"/>
                          </div>
                              <div className="flip-card-back fullstack">
                                  <div className="card-details">
                                    <ul>
                                      <li>Reactjs</li>
                                      <li>JavaScript</li>
                                    </ul>
                                  </div>
                              </div>
                            </div>
                  </div>
              </div>
          </div>
          <div className="row technology">
            <div className="col-md-3">
              <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={Hike} alt="Hike" className="technologyimage-cl"/>
                    </div>
                      <div className="flip-card-back fullstack">
                        <div className="card-details">
                          <ul>
                            <li>MongoDB</li>
                          </ul>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={Inmobi} alt="Inmobi" className="technologyimage-cl"/>
                    </div>
                      <div className="flip-card-back fullstack">
                        <div className="card-details">
                          <ul>
                            <li>JavaScript</li>
                            <li>Reactjs</li>
                          </ul>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={Ola} alt="Ola" className="technologyimage-cl"/>
                    </div>
                      <div className="flip-card-back fullstack">
                        <div className="card-details">
                          <ul>
                            <li>JavaScript</li>
                            <li>NodeJS</li>
                          </ul>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
              <div className="col-md-3">
                  <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                          <img src={Paytm} alt="Grofers" className="technologyimage-cl"/>
                          </div>
                              <div className="flip-card-back fullstack">
                                  <div className="card-details">
                                    <ul>
                                      <li>NodeJS</li>
                                      <li>JavaScript</li>
                                    </ul>
                                  </div>
                                </div>
                            </div>
                      </div>
                </div>
          </div>
          <div className="row technology">
            <div className="col-md-3">
              <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={Policybazar} alt="Policybazar" className="technologyimage-cl"/>
                    </div>
                      <div className="flip-card-back fullstack">
                        <div className="card-details">
                          <ul>
                            <li>JavaScript</li>
                            <li>Reactjs</li>
                          </ul>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={Practo} alt="Practo" className="technologyimage-cl"/>
                    </div>
                      <div className="flip-card-back fullstack">
                        <div className="card-details">
                          <ul>
                            <li>JavaScript</li>
                            <li>BootStrap</li>
                            <li>MongoDB</li>
                          </ul>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={Rivigo} alt="Rivigo" className="technologyimage-cl"/>
                    </div>
                      <div className="flip-card-back fullstack">
                        <div className="card-details">
                          <ul>
                            <li>JavaScript</li>
                            <li>Reactjs</li>
                          </ul>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
              <div className="col-md-3">
                  <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                          <img src={Zomato} alt="Zomato" className="technologyimage-cl"/>
                          </div>
                              <div className="flip-card-back fullstack">
                                  <div className="card-details">
                                    <ul>
                                      <li>NodeJS</li>
                                      <li>JavaScript</li>
                                    </ul>
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

export default Technology;
