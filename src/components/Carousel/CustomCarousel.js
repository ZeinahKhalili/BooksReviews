import React, { Component, useEffect, useState } from 'react';
import './CustomCarousel.css'
import "bootstrap/dist/css/bootstrap.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
import CarouselItem from '../CarouselItem/CarouselItem'
import { Container, Col } from 'react-bootstrap';
import Loader from '../Loader/Loader'
class CustomCarousel extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
      const {dataa} = this.props;
      let settings = 
      {
          infinite: false,
          speed: 1000,
          arrows: true,
          slidesToShow: 5,
          slidesToScroll: 4,
          responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ],
      }

      return (
        <div className="carousel"
             style={{backgroundImage: this.props.backgroundImg, backgroundColor: this.props.backgroundcolor}}>
          <p className="carousel-title-section"
             style={{color: this.props.color}}>
               {this.props.title}
          </p>
          { !dataa ? 
            <Loader/>
            :
              <Slider {...settings}>
                {dataa.map((data) => (
                  <Col>
                    <CarouselItem
                      key={data.id}
                      img={data.image}
                      imgname={data.image}
                      title={data.title}
                      color={this.props.color}
                      author={data.author}
                      reviewdBy={data.reviewedBy}
                    />
                  </Col>  
                ))}
               </Slider>
          }
        </div>
    );
  }
}

export default CustomCarousel;
