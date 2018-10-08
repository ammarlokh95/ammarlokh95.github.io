import React, { Component } from 'react';
import '../css/Carousel.css';
class Carousel extends Component {
    constructor (props) {
        super(props);
    
        this.state = {
          currentImageIndex: 0
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
        this.imgUrls = [
            "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg", 
            "https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg",
            "https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"    
        ]
    }

      previousSlide () {
        const lastIndex = this.imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
        this.setState({
          currentImageIndex: index
        });
      }
    
      nextSlide () {
        const lastIndex = this.imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    
        this.setState({
          currentImageIndex: index
        });
      }
    render() {
        return <div id="carousel-container" className="container">
            <Arrow
                direction="left"
                clickFunction={ this.previousSlide }
                glyph="&#9664;" />

            <ImageSlide url={ this.imgUrls[this.state.currentImageIndex] } />

            <Arrow
                direction="right"
                clickFunction={ this.nextSlide }
                glyph="&#9654;" />
            </div>
    }
}

const ImageSlide = ({ url }) => {
    const styles = {
      backgroundImage: `'url(${url})'`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
    return (
      <div className="image-slide" style={styles}>
      </div>
    );
  }

  const Arrow = ({ direction, clickFunction, glyph }) => (
    <div
      className={ `slide-arrow ${direction}` }
      onClick={ clickFunction }>
      { glyph }
    </div>
  );
export default Carousel;