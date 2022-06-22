import React, { useState } from 'react'
import Helmet from "../components/Helmet/Helmet"
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import products from "../assets/fake-data/data"
import ProductCard from "../components/UI/product-card/ProductCard"
import ReactPaginate from "react-paginate"
import "../styles/all-foods.css"
import "../styles/pagination.css"

const AllFoods = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [pageNumber, setPageNumber] = useState(0)

    const searchedProduct = products.filter((item) => {
        if (searchTerm.value === "") return item
        if (item.title.toLowerCase().includes(searchTerm.toLowerCase()))
            return item
    })

    const productPerPage = 4
    const visitedPage = pageNumber * productPerPage
    const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage)

    const pageCount = Math.ceil(searchedProduct.length / productPerPage)

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }
    return (
        <Helmet title="All-Foods">
            <CommonSection title="All Foods"></CommonSection>
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="6">
                            <div className='search__widget d-flex align-items-center justify-content-between w-50'>
                                <input
                                    type="text"
                                    placeholder="I'm looling for..."
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                ></input>
                                <span><i class="ri-search-line"></i></span>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="6">
                            <div className='sorting__widget text-end'>
                                <select className='w-50'>
                                    <option>Default</option>
                                    <option value="ascending">Alphabetically, A-Z</option>
                                    <option value="descending">Alphabetically, Z-A</option>
                                    <option value="high-price">High Price</option>
                                    <option value="low-price">Low Price</option>
                                </select>
                            </div>
                        </Col>

                        {
                            displayPage
                                .map(item => (
                                    <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-4">
                                        < ProductCard item={item} />
                                    </Col>
                                ))
                        }

                        <div className='pagination__container'>
                            <ReactPaginate
                                pageCount={pageCount}
                                onPageChange={changePage}
                                previousLabel="Prev"
                                nextLabel="Next"
                                containerClassName="paginationBtns"
                            >
                            </ReactPaginate>
                        </div>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default AllFoods