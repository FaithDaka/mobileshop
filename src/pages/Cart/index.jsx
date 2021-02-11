import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import CartHeader from './CartHeader'
import CartDetails from './CartDetails'
import LoginModal from "../../components/Modal/login-modal";

const Cart = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const history = useHistory();
    const cart = useSelector((state) => state.cart)
    const auth = useSelector(state => state.auth);

    const getTotal = () => {
        return cart.reduce((currentValue, nextValue) => {
            return nextValue.discount ? currentValue + nextValue.count * nextValue.discountprice : currentValue + nextValue.count * nextValue.price
        }, 0);
    };

    const goToCheckout = (e) => {
        e.preventDefault()
        if (auth.authenticate) {
            history.push("/checkout");
        } else {
            openModal()
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <CartHeader />
            <CartDetails cart={cart} total={getTotal()} checkout={goToCheckout} />
            <LoginModal modalIsOpen={modalIsOpen} close={closeModal} />
        </>
    )
}

export default Cart
