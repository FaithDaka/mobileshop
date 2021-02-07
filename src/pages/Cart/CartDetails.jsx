import React from 'react'
import { Link } from 'react-router-dom'

const CartDetails = () => {
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
                                    <li class="list-group-item px-0 px-lg-3">
                                        <div class="row gutters-5">
                                            <div class="col-lg-5 d-flex">
                                                <span class="mr-2 ml-0">
                                                    <img src="images/phones/1612434188404-apple-12-a.jpeg" class="size-60px rounded" alt="OnePlus 8T (128GB/256GB storage, no card slot)" />
                                                </span>
                                                <span class="fs-14 opacity-60">OnePlus 8T (128GB/256GB storage, no card slot) - Aqua</span>
                                            </div>

                                            <div class="col-lg col-4 order-1 order-lg-0 my-3 my-lg-0">
                                                <span class="opacity-60 fs-12 d-block d-lg-none">Price</span>
                                                <span class="fw-600 fs-16">2,000,000</span>
                                            </div>
                                            <div class="col-lg col-4 order-2 order-lg-0 my-3 my-lg-0">
                                                <span class="opacity-60 fs-12 d-block d-lg-none">Discount</span>
                                                <span class="fw-600 fs-16">10%</span>
                                            </div>

                                            <div class="col-lg col-6 order-4 order-lg-0">
                                                <div class="row no-gutters align-items-center aiz-plus-minus mr-2 ml-0">
                                                    <button class="btn col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="minus" data-field="quantity[0]">
                                                        <i class="las la-minus"></i>
                                                    </button>
                                                    <input type="text" name="quantity[0]" class="col border-0 text-center flex-grow-1 fs-16 input-number" placeholder="1" value="1" min="1" max="10" readonly="" onchange="updateQuantity(0, this)" />
                                                    <button class="btn col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="plus" data-field="quantity[0]">
                                                        <i class="las la-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-lg col-4 order-3 order-lg-0 my-3 my-lg-0">
                                                <span class="opacity-60 fs-12 d-block d-lg-none">Total</span>
                                                <span class="fw-600 fs-16 text-primary">2,000,000</span>
                                            </div>
                                            <div class="col-lg-auto col-6 order-5 order-lg-0 text-right">
                                                <a href="#"  class="btn btn-icon btn-sm btn-soft-primary btn-circle">
                                                    <i class="las la-trash"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item px-0 px-lg-3">
                                        <div class="row gutters-5">
                                            <div class="col-lg-5 d-flex">
                                                <span class="mr-2 ml-0">
                                                    <img src="images/phones/1612431654138-apple4.jpeg" class="size-60px rounded" alt="AirPods Max" />
                                                </span>
                                                <span class="fs-14 opacity-60">AirPods Max - LightPink</span>
                                            </div>

                                            <div class="col-lg col-4 order-1 order-lg-0 my-3 my-lg-0">
                                                <span class="opacity-60 fs-12 d-block d-lg-none">Price</span>
                                                <span class="fw-600 fs-16">800,000</span>
                                            </div>
                                            <div class="col-lg col-4 order-2 order-lg-0 my-3 my-lg-0">
                                                <span class="opacity-60 fs-12 d-block d-lg-none">Discount</span>
                                                <span class="fw-600 fs-16">5%</span>
                                            </div>

                                            <div class="col-lg col-6 order-4 order-lg-0">
                                                <div class="row no-gutters align-items-center aiz-plus-minus mr-2 ml-0">
                                                    <button class="btn col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="minus" data-field="quantity[1]">
                                                        <i class="las la-minus"></i>
                                                    </button>
                                                    <input type="text" name="quantity[1]" class="col border-0 text-center flex-grow-1 fs-16 input-number" placeholder="1" value="1" min="1" max="10" readonly="" onchange="updateQuantity(1, this)" />
                                                    <button class="btn col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="plus" data-field="quantity[1]">
                                                        <i class="las la-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-lg col-4 order-3 order-lg-0 my-3 my-lg-0">
                                                <span class="opacity-60 fs-12 d-block d-lg-none">Total</span>
                                                <span class="fw-600 fs-16 text-primary">800,000</span>
                                            </div>
                                            <div class="col-lg-auto col-6 order-5 order-lg-0 text-right">
                                                <a href="#"  class="btn btn-icon btn-sm btn-soft-primary btn-circle">
                                                    <i class="las la-trash"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div class="px-3 py-2 mb-4 border-top d-flex justify-content-between">
                                <span class="opacity-60 fs-15">Subtotal</span>
                                <span class="fw-600 fs-17">UGX 2,800,000</span>
                            </div>
                            <div class="row align-items-center">
                                <div class="col-md-6 text-center text-md-left order-1 order-md-0">
                                    <a href="https://demo.activeitzone.com/ecommerce" class="btn btn-link">
                                        <i class="las la-arrow-left"></i>
                                    Return to shop
                                </a>
                                </div>
                                <Link to="/checkout">
                                <div class="col-md-6 text-center text-md-right">
                                    <button class="btn btn-primary fw-600" onclick="showCheckoutModal()">Continue to Shipping</button>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartDetails
