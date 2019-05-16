import * as React from 'react';
import '../css/header.css';
import Logo from '../images/logo.jpg';

class Header extends React.Component {
  public render() {
    return (
      <div>
      <header className="App-header">
      <nav className="navbar navbar-default">
  <div className="container-fluid header-top-cl">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"/>
        <span className="icon-bar"/>
        <span className="icon-bar"/>
      </button>
      <a className="navbar-brand" href="#">
      <img src={Logo} alt="logo" className="logo-cl"/></a>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
      <li><a href="#">What you get</a></li>
      <li><a href="#">Why Us</a></li>
      <li><a href="#">Our Story</a></li>
        <li><a href="#">Get Touch</a></li>
      </ul>
    </div>
  </div>
</nav>
      </header>
      </div>
    );
  }
}

export default Header;
