"use client";

import Image from 'next/image';
import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import logo from '../assets/img/logo.svg';


export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align=item-center">
                    <Col sm={6}>
                        <Image src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><Image src={navIcon1}/></a>
                            <a href=""><Image src={navIcon2}/></a>
                            <a href=""><Image src={navIcon3}/></a>
                        </div>
                        <p>CopyRight 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};