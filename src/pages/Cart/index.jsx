import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useSelector } from "react-redux";
// import LoginModal from "../../components/Modal/login-modal";
import CartHeader from './CartHeader'
import CartDetails from './CartDetails'

const Cart = (props) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const { cart, user } = useSelector((state) => ({ ...state }));

    const getTotal = () => {
        return cart.reduce((currentValue, nextValue) => {
            return nextValue.discount ? currentValue + nextValue.count * nextValue.discountprice : currentValue + nextValue.count * nextValue.price
        }, 0);
    };

    const removeFromCart = () => { };

    const goToCheckout = (e) => {
        e.preventDefault()
        if (!user.isAuthenticated) {
            openModal()
        } else {
            props.history.push("/shop/checkout");
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
        {/* <LoginModal modalIsOpen={modalIsOpen} close={closeModal} /> */}
            <CartHeader />
            <CartDetails cart={cart} total={getTotal()} />
        </>
    )
}

export default Cart
