import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        };
    }

    nextSlide = () => {
        this.setState(previousState => ({
            currentIndex: (previousState.currentIndex + 1) % images.length
        }));
    };

    previousSlide = () => {
        this.setState(previousState => ({
            currentIndex: (previousState.currentIndex - 1 + images.length) % images.length
        }));
    };

    render() {
        return (
            <div className="imageCarousel">
                <div id="arrow"><ArrowBackIosIcon onClick={this.previousSlide} /></div>
                
                <div id="imgs">
                    <h1 className="title">{images[this.state.currentIndex].title}</h1>
                    <img src={images[this.state.currentIndex].img} alt={`Slide ${this.state.currentIndex}`} />
                    <h3 className="subtitle">{images[this.state.currentIndex].subtitle}</h3>
                </div>

                <div id="arrow"><ArrowForwardIosIcon onClick={this.nextSlide} /></div>
            </div>
        );
    }
}

export default Carousel;
