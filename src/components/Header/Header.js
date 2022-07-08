import React, { useEffect, useRef } from 'react'
import logo from "../../assets/images/logo.png"
import { Container } from "reactstrap"
import { NavLink, Link } from "react-router-dom"
import "../../styles/header.css"
import { useSelector, useDispatch } from 'react-redux'
import { cartUiActions } from '../../store/shopping-cart/cartUiSlice'

const nav__links = [
    {
        display: "Home",
        path: "./home"
    },
    {
        display: "Foods",
        path: "./foods"
    },
    {
        display: "Cart",
        path: "./cart"
    },
    {
        display: "Contact",
        path: "./contact"
    },
]

const Header = () => {
    const menuRef = useRef(null)
    const headerRef = useRef(null)
    const dispatch = useDispatch()
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    const toggleMenu = () => menuRef.current.classList.toggle("show__menu")
    const toggleCart = () => {
        dispatch(cartUiActions.toggle())
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                headerRef.current.classList.add("header__shrink")
            } else {
                headerRef.current.classList.remove("header__shrink")
            }
        })
    })

    return (
        <header className='header' ref={headerRef}>
            <Container>
                <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <img src={logo} alt="logo"></img>
                    </div>


                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <div className="menu d-flex align-items-center gap-4">
                            {nav__links.map((item, index) => (
                                <NavLink
                                    to={item.path}
                                    key={index}
                                    className={navClass => navClass.isActive ? "active__menu" : ""}

                                >{item.display}</NavLink>
                            ))}
                        </div>
                    </div>

                    <div className="nav__right d-flex align-items-center gap-3">
                        <span className="cart__icon" onClick={toggleCart}>
                            <i class="ri-shopping-bag-line"></i>
                            <span className="cart__badge">{totalQuantity}</span>
                        </span>

                        <span className="user">
                            <Link to="/login"><i class="ri-user-line"></i></Link>
                        </span>

                        <span className="mobile__menu" onClick={toggleMenu}>
                            <i class="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header