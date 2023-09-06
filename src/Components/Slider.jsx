import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import style from 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Slider = () => {
  return (
  <div className='w-screen'>
    <AutoplaySlider 
    cssModule={style}
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={3000}
  >
    <div data-src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />
    <div data-src="https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg" />  
    </AutoplaySlider>
  </div>
  );
};

export default Slider;
