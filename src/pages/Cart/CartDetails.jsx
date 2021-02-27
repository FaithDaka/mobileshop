/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import CurrencyFormat from 'react-currency-format';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CartDetails = ({ cart, total, checkout }) => {

    const [quantity, setQuantity] = useState(1)

    const increaseQuantity = (e, id) => {
        setQuantity(quantity + 1)

        const one = cart.map(one => one.id);
        let index = one.findIndex(id => id == id);
        cart[index].count = quantity + 1
        cart[index].price = cart[index].price * quantity
        console.log(cart[index].count)
        localStorage.setItem('cart', JSON.stringify(cart));

    }

    const decreaseQuantity = (e, id) => {
        if (quantity > 1) {
            setQuantity(quantity - 1)

            const one = cart.map(one => one.id);
            let index = one.findIndex(id => id == id);
            cart[index].count = quantity - 1
            cart[index].price = cart[index].price * quantity
            console.log(cart[index].count)
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        else {
            return;
        }
    }

    const removeItem = (e, ido) => {
        console.log(cart)
        console.log(ido)

        const one = cart.map(one => one.id);
        let index = one.findIndex(id => id == ido);
        console.log(index)

        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        toast.success("product successfuly removed from cart");

    }

    return (
        <section class="mb-4" id="cart-summary">
            <div class="container">
                <div class="row">
                    <div class="col-xxl-8 col-xl-10 mx-auto">
                        <div class="shadow-sm bg-white p-3 p-lg-4 rounded text-left">
                            <div class="mb-4">
                                <div class="row gutters-5 d-none d-lg-flex border-bottom mb-3 pb-3">
                                    <div class="col-md-5 fw-600">Product</div>
                                    <div class="col fw-600">Price</div>
                                    <div class="col fw-600">Discount</div>
                                    <div class="col fw-600">Quantity</div>
                                    <div class="col fw-600">Total</div>
                                    <div class="col-auto fw-600">Remove</div>
                                </div>
                                <ul class="list-group list-group-flush">

                                    {
                                        cart.map((item, i) =>
                                            <li class="list-group-item px-0 px-lg-3">
                                                <div class="row gutters-5">
                                                    <div class="col-lg-5 d-flex">
                                                        <span class="mr-2 ml-0">
                                                            {
                                                                <LazyLoadImage src={item.images} alt="cart images" width="60" />
                                                            }
                                                        </span>
                                                        <span class="fs-14 opacity-60">
                                                            {item.title}
                                                        </span>
                                                    </div>

                                                    <div class="col-lg col-4 order-1 order-lg-0 my-3 my-lg-0">
                                                        <span class="opacity-60 fs-12 d-block d-lg-none">Price</span>
                                                        <span class="fw-600 fs-16">
                                                            {item.discount ? <CurrencyFormat
                                                                value={item.discountprice}
                                                                displayType="text"
                                                                thousandSeparator
                                                            /> : <CurrencyFormat
                                                                    value={item.price}
                                                                    displayType="text"
                                                                    thousandSeparator
                                                                />}</span>
                                                    </div>
                                                    <div class="col-lg col-4 order-2 order-lg-0 my-3 my-lg-0">
                                                        <span class="opacity-60 fs-12 d-block d-lg-none">Discount</span>
                                                        <span class="fw-600 fs-16">{item.discount ? item.discount : 0} %</span>
                                                    </div>

                                                    <div class="col-lg col-6 order-4 order-lg-0">
                                                        <div class="row no-gutters align-items-center aiz-plus-minus mr-2 ml-0">
                                                            <button class="btn col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="minus" data-field="quantity[0]" key={item.id} onClick={((e) => decreaseQuantity(e, item.id))}>
                                                                <i class="las la-minus"></i>
                                                            </button>
                                                            <label>{quantity}</label>
                                                            <button class="btn col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="plus" data-field="quantity[0]" key={item.id} onClick={((e) => increaseQuantity(e, item.id))}>
                                                                <i class="las la-plus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg col-4 order-3 order-lg-0 my-3 my-lg-0">
                                                        <span class="opacity-60 fs-12 d-block d-lg-none">Total</span>
                                                        <span class="fw-600 fs-16 text-primary">{item.discount ? <CurrencyFormat
                                                            value={item.discountprice * quantity}
                                                            displayType="text"
                                                            thousandSeparator
                                                        /> : <CurrencyFormat
                                                                value={item.price * quantity}
                                                                displayType="text"
                                                                thousandSeparator
                                                            />}</span>
                                                    </div>
                                                    <div class="col-lg-auto col-6 order-5 order-lg-0 text-right">
                                                        <a href="#" class="btn btn-icon btn-sm btn-soft-primary btn-circle" key={item.id} onClick={((e) => removeItem(e, item.id))}>
                                                            <i class="las la-trash"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>

                                        )
                                    }
                                </ul>
                            </div>

                            <div class="px-3 py-2 mb-4 border-top d-flex justify-content-between">
                                <span class="opacity-60 fs-15">Subtotal</span>
                                <span class="fw-600 fs-17">UGX <CurrencyFormat
                                    value={total}
                                    displayType="text"
                                    thousandSeparator
                                /></span>
                            </div>
                            <div class="row align-items-center">
                                <div class="col-md-6 text-center text-md-left order-1 order-md-0">
                                    <Link to="/" class="btn btn-link">
                                        <i class="las la-arrow-left"></i>
                                    Return to shop
                                </Link>
                                </div>
                                <div class="col-md-6 text-center text-md-right">
                                    <button class="btn btn-primary fw-600" onClick={checkout}>Continue to Shipping</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartDetails
