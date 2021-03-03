import React, { useEffect } from 'react'
import CurrencyFormat from 'react-currency-format';
import moment from "moment";
import Footer from '../../components/Layout/Footer/index';
import BottomFooter from '../../components/Layout/Footer/BottomFooter'

const Receipt = ({ location }) => {
    const orderInfo = location.state;

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section class="py-4">
            <div class="container text-left">
                <div class="row">
                    <div class="col-xl-8 mx-auto">
                        <div class="card shadow-sm border-0 rounded">
                            <div class="card-body">
                                <div class="text-center py-4 mb-4">
                                    <i class="la la-check-circle la-3x text-success mb-3"></i>
                                    <h1 class="h3 mb-3 fw-600">Thank You for Your Order!</h1>
                                    <h2 class="h5">Order Code: <span class="fw-700 text-primary">{orderInfo.state._id}</span></h2>
                                    <p class="opacity-70 font-italic">A copy or your order summary has been sent to {orderInfo.state.email}</p>
                                </div>
                                <div class="mb-4">
                                    <h5 class="fw-600 mb-3 fs-17 pb-2">Order Summary</h5>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <table class="table">
                                                <tbody><tr>
                                                    <td class="w-50 fw-600">Order:</td>
                                                    <td>{orderInfo.state._id}</td>
                                                </tr>
                                                    <tr>
                                                        <td class="w-50 fw-600">Name:</td>
                                                        <td>{orderInfo.state.name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="w-50 fw-600">Email:</td>
                                                        <td>{orderInfo.state.email}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="w-50 fw-600">Shipping address:</td>
                                                        <td>{orderInfo.state.address}, Kampala, Uganda</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                        <div class="col-md-6">
                                            <table class="table">
                                                <tbody><tr>
                                                    <td class="w-50 fw-600">Order date:</td>
                                                    <td>{moment(orderInfo.state.createdAt).format('ll')}
                                                    </td>
                                                </tr>
                                                    <tr>
                                                        <td class="w-50 fw-600">Order status:</td>
                                                        <td>Processing</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="w-50 fw-600">Total order amount:</td>
                                                        <td>UGX
                                                        <CurrencyFormat
                                                                value={orderInfo.state.totalPrice && orderInfo.state.totalPrice}
                                                                displayType="text"
                                                                thousandSeparator
                                                                style={{ fontWeight: '500' }}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="w-50 fw-600">Payment Method:</td>
                                                        <td>Cash on delivery</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h5 class="fw-600 mb-3 fs-17 pb-2">Order Details</h5>
                                    <div>
                                        <table class="table table-responsive-md">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orderInfo.state.orderItems.map((product) => (
                                                    <tr >
                                                        <td>
                                                            <img
                                                                src={product.images}
                                                                alt="product-img"
                                                                width="50"
                                                            />

                                                            <td>{product.title}</td>
                                                        </td>
                                                        <td class="text-right">
                                                            UGX{' '}
                                                            <CurrencyFormat
                                                                value={product.price}
                                                                displayType="text"
                                                                thousandSeparator
                                                                style={{ fontWeight: '500' }}
                                                            />
                                                        </td>
                                                    </tr>

                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-5 col-md-6 ml-auto mr-0">
                                            <table class="table ">
                                                <tbody>
                                                    <tr>
                                                        <th>Subtotal</th>
                                                        <td class="text-right">
                                                            <span class="fw-600">UGX <CurrencyFormat
                                                                value={orderInfo.state.totalPrice && orderInfo.state.totalPrice}
                                                                displayType="text"
                                                                thousandSeparator
                                                                style={{ fontWeight: '700', color: "#ff9900" }}
                                                            /></span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Total Quantity</th>
                                                        <td class="text-right">
                                                        <span class="font-italic">{orderInfo.state.totalquantity}</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Shipping</th>
                                                        <td class="text-right">
                                                            <span class="font-italic">Free</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th><span class="fw-600">Total</span></th>
                                                        <td class="text-right">
                                                            <strong><span>UGX <CurrencyFormat
                                                                value={orderInfo.state.totalPrice && orderInfo.state.totalPrice}
                                                                displayType="text"
                                                                thousandSeparator
                                                                style={{ fontWeight: '700', color: "#ff9900" }}
                                                            /></span></strong>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <BottomFooter />
        </section>
    )
}

export default Receipt
