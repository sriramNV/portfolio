"use client";

import Image from 'next/image';
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; 
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';
import colorSharp2 from '../assets/img/color-sharp2.png';

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industrys standard dummy text.</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className="item">
                                    <Image src={meter3} alt="image"/>
                                    <h5>Web Development</h5>
                                </div>    
                                <div className="item">
                                    <Image src={meter2} alt="image"/>
                                    <h5>Python Development</h5>
                                </div>    
                                <div className="item">
                                    <Image src={meter2} alt="image"/>
                                    <h5>React Native Development</h5>
                                </div>    
                                <div className="item">
                                    <Image src={meter3} alt="image"/>
                                    <h5>Mainframe/AS400 development</h5>
                                </div>   
                            </Carousel> 
                        </div>
                    </Col>
                </Row>
            </Container>
            <Image className="background-image-left" src={colorSharp} />
        </section>
      );

};