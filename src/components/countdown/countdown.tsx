import * as React from 'react';
import FlipClock from 'x-react-flipclock';
import '../css/countdown.css';

class Countdown extends React.Component {

  public render() {
    return (
    <div className="count-top">
    <div className="countdown-cl">
    <FlipClock
	units = {[
				{
					sep: '',
					title: 'day',
					type: 'days',
				},
				{
					sep: ' ',
					title: 'hour',
					type: 'hours',
				},
				{
					sep: ':',
					title: 'minute',
					type: 'minutes',
				},
				{
					sep: ':',
					type: 'seconds',
				}
			]}
  	type = "clock"
 />
     </div>
      <div className="banner-text">
      <h2>Code Bootcamp 27 May 2019</h2>
      <h4><i className="fa fa-map-marker" aria-hidden="true"/> Koramangala, Bengaluru | Map
</h4>
          <div className="banner-button">
          <button type="button" className="btn">Find More</button>
          <button type="button" className="btn">Enroll Now</button>
          </div>
      </div>
     </div>
    );
  }
}

export default Countdown;
