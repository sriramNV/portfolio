import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from '../assets/img/contact-img.svg';

export const Contact = () => {

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [state, setState] = useState({});
    
    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                    <img src={contactImg} alt="contact us" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};