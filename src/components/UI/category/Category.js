import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import categoryImg01 from "../../../assets/images/category-01.jpg"
import categoryImg02 from "../../../assets/images/category-02.jpg"
import categoryImg03 from "../../../assets/images/category-03.jpg"
import categoryImg04 from "../../../assets/images/category-04.jpg"

import "../../../styles/category.css"

const categoryData = [
    {
        display: 'Món chính',
        imgUrl: categoryImg01
    },
    {
        display: 'Món nước',
        imgUrl: categoryImg02
    },
    {
        display: 'Món phụ',
        imgUrl: categoryImg03
    },
    {
        display: 'Thức uống',
        imgUrl: categoryImg04
    },
]

const Category = () => {
    return (
        <Container>
            <Row>
                {
                    categoryData.map((item, index) => (
                        <Col lg="3" md="4" sm="6" xs="6" className='mb-3'>
                            <div className='category__item d-flex align-items-center gap-3'>
                                <div className='category__img'>
                                    <img src={item.imgUrl} alt=''></img>
                                </div>
                                <h6>{item.display}</h6>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Category