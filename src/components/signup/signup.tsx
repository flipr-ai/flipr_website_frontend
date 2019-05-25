import * as React from 'react';
import '../css/signup.css';

class Signup extends React.Component {
  public render() {
    return (
      <div>
      <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Enroll for Training</h4>
        </div>
        <div className="modal-body">
<form>
<div className="form-group">
<label>Your Name *</label>
<input type="text" className="form-control" id="name" placeholder="Enter Name" name="name"/>
</div>
<div className="form-group">
<label>Email *</label>
<input type="email" className="form-control" id="email" placeholder="Enter Email" name="email"/>
</div>
<div className="form-group">
<label>Contact Number *</label>
<input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
</div>
<div className="form-group">
<label>Choose Program *</label>
<select className="form-control select" id="sel1">
    <option>Full Stack Development</option>
    <option>Frontend Development</option>
    <option>Backend Development</option>
  </select>
</div>
<div className="form-group">
<label>Payment Amount</label>
<input type="text" className="form-control" id="amount" value="INR 25,000/-" name="amount"/>
</div>
<div className="paybutton">
<button type="submit" className="btn btn-default">Proceed to Pay</button>
</div>
</form>
        </div>
      </div>
    </div>
  </div>

      </div>
    );
  }
}

export default Signup;
