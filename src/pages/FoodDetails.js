import React, { useEffect, useState } from 'react'
import products from "../assets/fake-data/data"
import { useParams } from "react-router-dom"
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/common-section/CommonSection"
import { Container, Row, Col } from 'reactstrap'
import "../styles/product-details.css"
import ProductCard from "../components/UI/product-card/ProductCard"
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/shopping-cart/cartSlice'

const FoodDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const product = products.find(product => product.id === id)
    const [previewImg, setPreviewImg] = useState(product.image01)

    const { title, price, category, image01 } = product

    const relatedProduct = products.filter(item => category === item.category)
    const addItem = () => {
        dispatch(
            cartActions.addItem({
                id, title, price, image01
            })
        )
    }
    useEffect(() => {
        setPreviewImg(product.image01)
    }, [product])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])



    return (
        <Helmet title="Product-details">
            <CommonSection title={title} />
            <section>
                <Container>
                    <Row>
                        <Col lg="2" md="2">
                            <div className='product__images'>
                                <div className='img__item' onClick={() => setPreviewImg(product.image01)}>
                                    <img src={product.image01} className="w-100"></img>
                                </div>
                                <div className='img__item' onClick={() => setPreviewImg(product.image02)}>
                                    <img src={product.image02} className="w-100"></img>
                                </div>
                                <div className='img__item' onClick={() => setPreviewImg(product.image03)}>
                                    <img src={product.image03} className="w-100"></img>
                                </div>
                            </div>
                        </Col>

                        <Col lg="4" md="4">
                            <div className='product__main-img'>
                                <img src={previewImg} className="w-100"></img>
                            </div>
                        </Col>

                        <Col lg="6" md="6">
                            <div className='single__product-content'>
                                <h2 className='product__title mb-3'>{title}</h2>
                                <p className='product__price'>Price: <span>{price}VNĐ</span></p>
                                <button
                                    className='addTOCart__btn'
                                    onClick={addItem}
                                >Add to Cart
                                </button>
                            </div>
                        </Col>

                        <Col lg="12" className='mb-5 mt-5'>
                            <h3>You might also like</h3>
                        </Col>

                        {
                            relatedProduct.map(item => (
                                <Col lg="3" md="4" key={item.id}>
                                    <ProductCard item={item} />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default FoodDetails