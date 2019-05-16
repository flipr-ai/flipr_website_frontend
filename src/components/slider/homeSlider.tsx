import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/slider.css';
import SliderImage1 from '../images/slider1.jpg';
import SliderImage2 from '../images/slider2.jpg';

class Slider extends React.Component {
  public render() {
    return (
      <Carousel className="">
                  <div>
                      <img src={SliderImage1} alt="Slider Image" />
                  </div>
                  <div>
                      <img src={SliderImage2} alt="Slider Image" />
                  </div>
              </Carousel>
    );
  }
}

export default Slider;
