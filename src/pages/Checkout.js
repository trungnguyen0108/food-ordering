import React from 'react'
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/common-section/CommonSection"
import { Container, Row, Col } from 'reactstrap'
import { useSelector } from 'react-redux'
import "../styles/checkout.css"

const Checkout = () => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount)
    const shoppingCost = 30000

    const totalAmount = shoppingCost + cartTotalAmount
    return (
        <Helmet title="Checkout">
            <CommonSection title="Checkout" />

            <section>
                <Container>
                    <Row>
                        <Col lg="8" md="6">
                            <h6 className='mb-4'>Shipping Address</h6>
                            <form className='checkout__form'>
                                <div className='form__group'>
                                    <input type="text" placeholder='Enter your name'></input>
                                </div>
                                <div className='form__group'>
                                    <input type="email" placeholder='Enter your email'></input>
                                </div>
                                <div className='form__group'>
                                    <input type="number" placeholder='Phone Number'></input>
                                </div>
                                <div className='form__group'>
                                    <input type="text" placeholder='Address'></input>
                                </div>
                            </form>
                            <button className="addTOCart__btn">Payment</button>
                        </Col>

                        <Col lg="4" md="6">
                            <div className='checkout__bill'>
                                <h6 className='d-flex align-items-center justify-content-between mb-3'>Subtotal: <span>{cartTotalAmount} VNĐ</span></h6>
                                <h6 className='d-flex align-items-center justify-content-between'>Shipping: <span>{shoppingCost} VNĐ</span></h6>
                                <div className='checkout__total'>
                                    <h5 className='d-flex align-items-center justify-content-between'>Total: <span>{totalAmount}</span></h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Checkout