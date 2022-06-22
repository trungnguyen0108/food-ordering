import React from 'react'
import CommonSection from '../components/UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import "../styles/cart-page.css"
import { cartActions } from '../store/shopping-cart/cartSlice'
import { Link } from 'react-router-dom'


const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    return (
        <Helmet title="Cart">
            <CommonSection title="Your Cart" />
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            {
                                cartItems.length === 0
                                    ? <h5 className='text-center'>Your cart is empty</h5>
                                    : <table className='table table-bordered'>
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Product Title</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartItems.map(item => <Tr item={item}></Tr>)
                                            }
                                        </tbody>
                                    </table>
                            }
                            <div>
                                <h6 className='cart__subtotal mt-5 mb-3'>Subtotal: <span>{totalAmount} VNĐ</span></h6>
                                <div className='cart__page-btn'>
                                    <button className='addTOCart__btn me-3'>
                                        <Link to="/foods">Continue Shopping</Link>
                                    </button>
                                    <button className='addTOCart__btn'>
                                        <Link to="/checkout">Proceed to checkout</Link>
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

const Tr = (props) => {
    const { id, image01, title, price, quantity } = props.item

    const dispatch = useDispatch()
    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id))
    }
    return (
        <tr>
            <td className='text-center cart__img-box'>
                <img src={image01}></img>
            </td>
            <td className='text-center'>{title}</td>
            <td className='text-center'>{price}</td>
            <td className='text-center'>{quantity}</td>
            <td className='text-center cart__item-delete' onClick={deleteItem}>
                <i class="ri-delete-bin-line"></i>
            </td>
        </tr >
    )
}

export default Cart