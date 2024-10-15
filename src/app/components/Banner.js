"use client";

import Image from 'next/image';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import TrackVisibility from 'react-on-screen';

export const Banner = () =>{
    const toRotate  = [
        "Web Developer",
        "Python Developer",
        "React Native Developer",
        "Mainframe/AS400 developer",
    ];

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const period = 2000; 
    const [delta,setDelta] = useState(300 - Math.random() * 100);



    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => {clearInterval(ticker)}
    },[text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1): fullText.substring(0, text.length+1);

        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }

    }
 
    const conn = "Let's connect";

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Sriram`}<span className="wrap"><br/>{text}</span></h1>
                        <p>As a versatile software engineer with three years of experience, I architect high-performance web applications using Next.js while simultaneously maintaining critical mainframe infrastructure. I leverage React, GraphQL, and SEO optimization techniques to craft engaging user experiences, while harnessing COBOL and JCL to modernize legacy systems. By seamlessly integrating cutting-edge web technologies with robust enterprise systems, I deliver efficient, scalable solutions that drive business innovation. Beyond coding, I actively contribute to open-source projects and mentor aspiring developers, continuously striving to revolutionize the digital landscape.
                        </p>
                        <button onClick={() => console.log('connect')}>{conn} <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <TrackVisibility>
                     {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                         <Image src={headerImg} alt="Header Img"/>
                        </div>}
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}