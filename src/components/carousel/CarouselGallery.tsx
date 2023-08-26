
import React from "react";
import { Carousel } from "react-bootstrap"
import { ImgCarousel, Container } from "./CarouselGallery.css";
// import {GalleryItem} from "*.png"

export const Gallery = () => {

  return (
    <Container>
        <Carousel  data-bs-theme="dark">
            
            <Carousel.Item>
                <ImgCarousel src={process.env.PUBLIC_URL + '/imgs/galleryImgs/galleryItem-1.png'} alt="bild-1" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <ImgCarousel src={process.env.PUBLIC_URL + '/imgs/galleryImgs/galleryItem-1.png'} alt="bild-2" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <ImgCarousel src={process.env.PUBLIC_URL + '/imgs/galleryImgs/galleryItem-1.png'} alt="bild-3" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    </Container>
  );
};