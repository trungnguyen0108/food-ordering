import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from "../../assets/images/logo.png"
import "../../styles/footer.css"
const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="3" md="4" sm="6">
                        <div className="logo logo__footer text-start">
                            <img src={logo} alt="logo"></img>
                        </div>
                    </Col>

                    <Col lg="3" md="4" sm="6">
                        <h5 className='footer__title'>Delivery Time</h5>
                        <ListGroup className='delivery__time-list'>
                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Monday - Satuday</span>
                                <p>9:00am - 9:00pm</p>
                            </ListGroupItem>

                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Sunday</span>
                                <p>Off day</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg="3" md="4" sm="6">
                        <h5 className='footer__title'>Contact</h5>
                        <ListGroup className='delivery__time-list'>
                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Location: 576 Hùng Vương, Cam Ranh, Khánh Hòa</span>

                            </ListGroupItem>

                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Phone: (+84) 346417497</span>

                            </ListGroupItem>

                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Email: nguyentrung@gmail.com</span>

                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg="3" md="4" sm="6">
                        <h5 className='footer__title'>Newsletter</h5>
                        <p>Subscribe our newsletter</p>
                        <div className='newsletter'>
                            <input type="email" placeholder='Enter your email'></input>
                            <span><i class="ri-send-plane-line"></i></span>
                        </div>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col lg="6" md="6">
                        <p className='copyright__text'>
                            Copyright - 2022, website made by Trung Nguyen. All Rights Reserved
                        </p>
                    </Col>
                    <Col lg="6" md="6">
                        <div className='social__links d-flex align-items-center gap-4 justify-content-end'>
                            <p className='m-0'>Follow: </p>
                            <span>
                                <a href='https://www.facebook.com/trungnguyen182001/'><i class="ri-facebook-fill"></i></a>
                            </span>
                            <span>
                                <a href='https://github.dev/trungnguyen0108/'><i class="ri-github-fill"></i></a>
                            </span>
                            <span>
                                <a href='https://www.linkedin.com/in/nguy%E1%BB%85n-trung-6a5238243/'><i class="ri-linkedin-box-fill"></i></a>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer