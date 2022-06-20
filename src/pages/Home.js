import React, { useEffect, useState } from 'react'
import Helmet from "../components/Helmet/Helmet"
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero.png'
import '../styles/hero-section.css'
import { Link } from 'react-router-dom'
import Category from '../components/UI/category/Category'
import "../styles/home.css"

import products from '../assets/fake-data/data'
import ProductCard from "../components/UI/product-card/ProductCard"

const Home = () => {
    const [category, setCategory] = useState('all')
    const [allProducts, setAllProducts] = useState(products)

    useEffect(() => {
        if (category === "all") {
            setAllProducts(products)
        }

        if (category === "chicken-rice") {
            const filterProducts = products.filter(item => item.category === 'chicken-rice')
            setAllProducts(filterProducts)
        }

        if (category === "soup") {
            const filterProducts = products.filter(item => item.category === 'soup')
            setAllProducts(filterProducts)
        }

        if (category === "side-dish") {
            const filterProducts = products.filter(item => item.category === 'side-dish')
            setAllProducts(filterProducts)
        }

        if (category === "drinks") {
            const filterProducts = products.filter(item => item.category === 'drinks')
            setAllProducts(filterProducts)
        }
    }, [category])

    return (
        <Helmet title="Home">
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className='hero__content'>
                                <h5 className='mb-3'>Easy way to make an order</h5>
                                <h1 className='mb-4 hero__title'>
                                    <span>HUNGRY?</span> Just wait <br />food at<span> your door</span>
                                </h1>
                                <p></p>

                                <div className='hero__btns d-flex align-items-center gap-5 mt-4'>
                                    <button
                                        className='order__btn d-flex align-items-center justify-content-between'>
                                        Order now
                                        <i class="ri-arrow-right-s-line"></i>
                                    </button>

                                    <button className='all__foods-btn'>
                                        <Link to="/foods">See all foods</Link>
                                    </button>
                                </div>

                                <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                                    <p className='d-flex align-items-center gap-2'>
                                        <span className='shipping__icon'><i class="ri-car-line"></i></span>
                                        No shipping charge
                                    </p>

                                    <p className='d-flex align-items-center gap-2'>
                                        <span className='shipping__icon'><i class="ri-shield-check-line"></i></span>
                                        No shipping charge
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg="6" md="6">
                            <div className='hero__img'>
                                <img src={heroImg} alt='hero-img' className='w-100'></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='pt-0'>
                <Category />
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className='text-center'>
                            <h5 className='feature__subtitle mb-4'>What we serve</h5>
                            <h2 className='feature__title'>Just sit back at home</h2>
                            <h2 className='feature__title'>
                                we will <span>take care</span>
                            </h2>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className='text-center'>
                            <h2>Popular Foods</h2>
                        </Col>

                        <Col lg="12">
                            <div className='food__category'>
                                <button className={`all__btn ${category === 'all' ? 'foodBtnActive' : ''}`}
                                    onClick={() => setCategory("all")}
                                >Tất cả</button>
                                <button className={`all__btn ${category === 'chicken-rice' ? 'foodBtnActive' : ''}`}
                                    onClick={() => setCategory("chicken-rice")}
                                >Món chính</button>
                                <button className={`all__btn ${category === 'soup' ? 'foodBtnActive' : ''}`}
                                    onClick={() => setCategory("soup")}
                                >Món nước</button>
                                <button className={`all__btn ${category === 'side-dish' ? 'foodBtnActive' : ''}`}
                                    onClick={() => setCategory("side-dish")}
                                >Món phụ</button>
                                <button className={`all__btn ${category === 'drinks' ? 'foodBtnActive' : ''}`}
                                    onClick={() => setCategory("drinks")}
                                >Thức uống</button>
                            </div>
                        </Col>

                        {allProducts.map((item) => (
                            <Col lg="3" md="4" key={item.id} className="mt-5">
                                <ProductCard item={item} />
                            </Col>
                        ))}

                    </Row>
                </Container>
            </section>
        </Helmet >
    )
}

export default Home