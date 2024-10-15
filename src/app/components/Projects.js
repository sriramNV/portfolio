"use client";

import Image from 'next/image';
import { Col, Container, Row, Tab } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';


export const Projects = () => {

    const projects = [
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgurl: projImg1,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgurl: projImg3,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgurl: projImg2,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgurl: projImg3,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgurl: projImg2,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgurl: projImg1,
        },
        

        
    ];





    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industrys standard dummy text.</p>

                        <Tab.Container id='project-tabs' defaultActiveKey='first'> 
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey='first'>Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey='first'>
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return(
                                                <ProjectCard 
                                                key={index}
                                                {...project} />
                                            );
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>
                                Lorem ipsum
                            </Tab.Pane>
                            <Tab.Pane eventKey='third'>
                                Lorem ipsum
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>

                    </Col>
                </Row>
            </Container>
            <Image className="background-image-right" src={colorSharp2} alt="asd"/>
        </section>
    );

};
