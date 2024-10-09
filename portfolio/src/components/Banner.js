import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg'

export const Banner = () =>{
    const toRotate  = [
        "Web Developer",
        "Web Designer",
        "UI/UX Designer" 
    ];

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const period = 2000; 
 
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm webbed`}<span className="wrap">web developer</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img scr={headerImg} alt="Header" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}