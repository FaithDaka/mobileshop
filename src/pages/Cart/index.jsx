import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import CartHeader from './CartHeader'
import CartDetails from './CartDetails'
import LoginModal from "../../components/Modal/cart-modal";

const Cart = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const history = useHistory();
    const {cartItems } = useSelector(state => state.cart);
    const auth = useSelector(state => state.auth);

    const getTotal = () => {
        return cartItems.reduce((currentValue, nextValue) => {
            return nextValue.discount ? currentValue + nextValue.quantity * nextValue.discountprice : currentValue + nextValue.quantity * nextValue.price
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
            <CartDetails cart={cartItems} total={getTotal()} checkout={goToCheckout} />
            <LoginModal modalIsOpen={modalIsOpen} close={closeModal} />
        </>
    )
}

export default Cart
