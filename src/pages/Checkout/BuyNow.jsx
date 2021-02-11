import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import SweetAlert from 'react-bootstrap-sweetalert';
import CurrencyFormat from 'react-currency-format';
import CartHeader from '../Cart/CartHeader'
import Spinner from '../../components/Spinner'

const BuyNow = ({ history }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const hideAlert = () => setShowAlert(false);
    const cart = JSON.parse(localStorage.getItem("buynow"));

    const auth = useSelector(state => state.auth);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const placeOrder = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {
            const orderData = {
                orderItems: cart,
                name: name,
                email: email,
                address: address,
                paymentMethod: 'cash',
                shippingPrice: 0,
                taxPrice: 0,
                totalPrice: cart.discount ? cart.discountprice : cart.price
            }

            const config = {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${auth.token}`,
                },
              }

            const res = await axios.post(`${process.env.REACT_APP_API}/orders`, orderData, config);
            console.log("Order Data", res);

            setLoading(false)
            setShowAlert(true);
            if (typeof window !== "undefined") localStorage.removeItem("buynow");

            history.push('/receipt', {
                state: res.data
            });

        } catch {
            setLoading(false);
        }
    };

    return (
        <div>
            <CartHeader />
            {loading && <Spinner />}

            {showAlert && (
                <SweetAlert
                    success
                    onConfirm={() => hideAlert()}
                    onCancel={() => hideAlert()}
                    title="Success Data!"
                    timeout={4000}
                >
                    Order Created Successfully
                </SweetAlert>
            )}
            <section class="mb-4 gry-bg">
                <div class="container">
                    <div class="row cols-xs-space cols-sm-space cols-md-space">
                        <div class="col-xxl-8 col-xl-10 mx-auto">

                            <div class="shadow-sm bg-white p-4 rounded mb-4">
                                <div class="form-group">
                                    <label class="control-label">Name</label>
                                    <input type="text" class="form-control" name="name" placeholder="Name" value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                </div>

                                <div class="form-group">
                                    <label class="control-label">Email</label>
                                    <input type="text" class="form-control" name="email" placeholder="Email" value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div class="form-group">
                                    <label class="control-label">Delivery Address</label>
                                    <input type="text" class="form-control" name="address" placeholder="Address" value={address}
                                        onChange={(e) => setAddress(e.target.value)} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section class="mb-4">
                <div class="container text-left">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="card shadow-sm border-0 rounded" />
                            <div class="card-header p-3">
                                <h3 class="fs-16 fw-600 mb-0">
                                    Select a payment option
                     </h3>
                            </div>
                            <div class="card-body text-center">
                                <div class="row">
                                    <div class="col-xxl-8 col-xl-10 mx-auto">
                                        <div class="row gutters-10">
                                            <div class="col-6 col-md-4">
                                                <label class="aiz-megabox d-block mb-3">
                                                    <input value="flutterwave" class="online_payment" type="radio" name="payment_option" checked="" />
                                                    <span class="d-block p-3 aiz-megabox-elem">
                                                        <img src="https://demo.activeitzone.com/ecommerce/public/assets/img/cards/flutterwave.png" class="img-fluid mb-2" />
                                                        <span class="d-block text-center">
                                                            <span class="d-block fw-600 fs-15">Mobile Money</span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="col-6 col-md-4">
                                                <label class="aiz-megabox d-block mb-3">
                                                    <input value="cash_on_delivery" class="online_payment" type="radio" name="payment_option" checked="" />
                                                    <span class="d-block p-3 aiz-megabox-elem">
                                                        <img src="https://demo.activeitzone.com/ecommerce/public/assets/img/cards/cod.png" class="img-fluid mb-2" />
                                                        <span class="d-block text-center">
                                                            <span class="d-block fw-600 fs-15">Cash on Delivery</span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-4 mt-4 mt-lg-0">
                            <div class="card border-0 shadow-sm rounded">
                                <div class="card-header">
                                    <h3 class="fs-16 fw-600 mb-0">Summary</h3>
                                    <div class="text-right">
                                        <span class="badge badge-inline badge-primary">1 Item</span>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th class="product-name">Product</th>
                                                <th class="product-total text-right">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{cart.title}</td>
                                                <td class="text-right">UGX {cart.discount ? <CurrencyFormat
                                                    value={cart.discountprice}
                                                    displayType="text"
                                                    thousandSeparator
                                                /> : <CurrencyFormat
                                                        value={cart.price}
                                                        displayType="text"
                                                        thousandSeparator
                                                    />}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                    <table class="table">
                                        <tfoot>
                                            <tr class="cart-subtotal">
                                                <th>Subtotal</th>
                                                <td class="text-right">
                                                    <span class="fw-600">UGX
                                                        {cart.discount ? <CurrencyFormat
                                                            value={cart.discountprice}
                                                            displayType="text"
                                                            thousandSeparator
                                                        /> : <CurrencyFormat
                                                                value={cart.price}
                                                                displayType="text"
                                                                thousandSeparator
                                                            />}</span>
                                                </td>
                                            </tr>
                                            <tr class="cart-shipping">
                                                <th>Tax</th>
                                                <td class="text-right">
                                                    <span class="font-italic">0.00</span>
                                                </td>
                                            </tr>
                                            <tr class="cart-shipping">
                                                <th>Total Shipping</th>
                                                <td class="text-right">
                                                    <span class="font-italic">0.00</span>
                                                </td>
                                            </tr>
                                            <tr class="cart-total">
                                                <th><span class="strong-600">Total</span></th>
                                                <td class="text-right">
                                                    <strong><span>UGX
                                                        {cart.discount ? <CurrencyFormat
                                                            value={cart.discountprice}
                                                            displayType="text"
                                                            thousandSeparator
                                                        /> : <CurrencyFormat
                                                                value={cart.price}
                                                                displayType="text"
                                                                thousandSeparator
                                                            />}</span></strong>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="pt-3">
                                <label class="aiz-checkbox">
                                    <input type="checkbox" required="" id="agree_checkbox" />
                                    <span class="aiz-square-check"></span>
                                    <span>I agree to the{' '} </span>
                                </label>
                                <a href="#">terms and conditions</a>
                            </div>
                            <div class="row align-items-center pt-3">
                                <div class="col-6">
                                    <Link to="/" class="link link--style-3">
                                        <i class="las la-arrow-left"></i>
                     Return to shop
                     </Link>
                                </div>

                                <div class="col-6 text-right">
                                    <Link to="/receipt">
                                        <button onClick={placeOrder} type="button" class="btn btn-primary fw-600">Complete Order</button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default BuyNow
