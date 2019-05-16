import * as React from 'react';
import '../css/footer.css';

class Footer extends React.Component {
  public render() {
    return (
      <div className="footer">
      <div className="link-cl">
      <a>Privacy Policy</a> |
      <a>Cookies Policy</a> |
      <a>Terms of Service</a>
      </div>
      <p>&copy; Copyright 2019 flipr.com. All rights reserved</p>
      </div>
    );
  }
}

export default Footer;
