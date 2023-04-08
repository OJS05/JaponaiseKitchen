import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slideshow.css'
import one from './slide_images/1.webp'
import two from './slide_images/2.webp'
import three from './slide_images/3.webp'
import four from './slide_images/4.webp'
import five from './slide_images/5.webp'
import six from './slide_images/6.webp'
    
    
const slideImages = [
    one,
    two,
    three,
    four,
    five,
    six,
];

const responsiveSettings = [
    {
        breakpoint: 1500,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];

const Slideshow = () => {
    return (
        <div className="slide-container" id="gallery">
            <Slide arrows={false} duration={2000} responsive={responsiveSettings}>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}></div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}></div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}></div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[3]})` }}></div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[4]})` }}></div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[5]})` }}></div>
                </div>
            </Slide>
        </div>
    );   
}

export default Slideshow;
