import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import SweetAlert from 'react-bootstrap-sweetalert';
import CurrencyFormat from 'react-currency-format';
import CartHeader from '../Cart/CartHeader'
import Spinner from '../../components/Spinner'
import Footer from '../../components/Layout/Footer/index';
import BottomFooter from '../../components/Layout/Footer/BottomFooter';
import './style.css'

const BuyNow = ({ history }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [termsCheck, setTermChecked] = useState(false)

    const [fullNameErrors, setFullNameErrors] = useState({});
    const [addressErrors, setaddressErrors] = useState({});
    const [termsErrors, settermsErrors] = useState({});

    const hideAlert = () => setShowAlert(false);
    const cart = JSON.parse(localStorage.getItem("buynow"));

    const phonenumber = localStorage.getItem('phonenumber');
    const token = localStorage.getItem('token');

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const formValidation = () => {
        const fullNameErrors = {};
        const addressErrors = {};
        const termsErrors = {};
        let isValid = true;

        if (!name) {
            fullNameErrors.invalidName = '** Customer name is required';
            isValid = false;
        }
        if (!address) {
            addressErrors.invalidAddress = '*** Delivery address is required';
            isValid = false;
        }
        if (!address) {
            addressErrors.invalidAddress = '*** Delivery address is required';
            isValid = false;
        }
        if (termsCheck === false) {
            termsErrors.invalidTerms = '*** Terms and conditions must be accepted';
            isValid = false;
        }

        setFullNameErrors(fullNameErrors);
        setaddressErrors(addressErrors);
        settermsErrors(termsErrors);
        return isValid;
    };

    const placeOrder = async (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if (isValid) {
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
                    totalPrice: cart.discount ? cart.discountprice : cart.price,
                    totalquantity: cart.quantity
                }

                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
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
        } else {
            toast.error("Name or Delivery address or terms is required");
        }
    };

    return (
        <>
            <section class="my-4 pt-4">
                {loading && <Spinner />}
                <div class="container text-left">
                    <div class="row">
                        <div class="col-lg-8">

                            <div class="card shadow-sm border-0 rounded">
                                <div class="card-header p-3">
                                    <h3 class="fs-16 fw-600 mb-0">
                                        Enter Delivery Address Details
                 </h3>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-xxl-8 col-xl-10 mx-auto">
                                            <div class="row gutters-10">

                                                <div class="modal-body">
                                                    <div class="">
                                                        <div class="row">
                                                            <div class="col-md-10">
                                                                <input type="text" class="form-control mb-3" value={phonenumber} disabled placeholder="Phone Number" />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-10">
                                                                <input type="text" class="form-control mb-3" name="fullnames" placeholder="Full Names" value={name}
                                                                    onChange={(e) => setName(e.target.value)} />
                                                            </div>
                                                            {Object.keys(fullNameErrors).map((key) => <div style={{ color: 'red' }}>{fullNameErrors[key]}</div>)}
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-10">
                                                                <input type="email" class="form-control mb-3" name="email" placeholder="Email Address" value={email}
                                                                    onChange={(e) => setEmail(e.target.value)} />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-10">
                                                                <input type="text" class="form-control mb-3" name="address" placeholder="Delivery Address" value={address}
                                                                    onChange={(e) => setAddress(e.target.value)} />
                                                                {Object.keys(addressErrors).map((key) => <div style={{ color: 'red' }}>{addressErrors[key]}</div>)}
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-10">
                                                                <select class="form-control mb-3" name="address" value={city}
                                                                    onChange={(e) => setCity(e.target.value)} placeholder="Delivery City">
                                                                    <option selected>City</option>
                                                                    <option value="1">Kampala</option>
                                                                    <option value="2">Mbarara</option>
                                                                    <option value="3">Jinja</option>
                                                                    <option value="4">Entebbe</option>
                                                                    <option value="5">Mukono</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>

                            <div class="card shadow-sm border-0 rounded">
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
                                                        <input value="cash_on_delivery" class="online_payment" type="radio" name="payment_option" checked="yes" />
                                                        <span class="d-block p-3 aiz-megabox-elem">
                                                            <img src="https://demo.activeitzone.com/ecommerce/public/assets/img/cards/cod.png" class="img-fluid mb-2" width="75"/>
                                                            <span class="d-block text-center">
                                                                <span class="d-block fw-600 fs-14">Cash on Delivery</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>

                                                <div class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="cash_on_delivery" class="online_payment" type="radio" name="payment_option" checked="" />
                                                        <span class="d-block p-3 aiz-megabox-elem">
                                                            <img src="images/MTN.webp" class="img-fluid mb-2" width="40" />
                                                            <span class="d-block text-center">
                                                                <span class="d-block fw-600 fs-14">MTN Mobile Money</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>

                                                <div class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="cash_on_delivery" class="online_payment" type="radio" name="payment_option" checked=""/>
                                                        <span class="d-block p-3 aiz-megabox-elem">
                                                            <img src="images/Airtel.webp" class="img-fluid mb-2" width="50"/>
                                                            <span class="d-block text-center">
                                                                <span class="d-block fw-600 fs-14">Airtel Money</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mt-2 mt-lg-0">
                            <div class="card border-0 shadow-sm rounded">
                                <div class="card-header">
                                    <h3 class="fs-16 fw-600 mb-0">Summary</h3>
                                    <div class="text-right">
                                        <span class="badge badge-inline badge-primary">1 Item</span>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="rounded px-2 mb-2 bg-soft-primary border-soft-primary border">
                                        Total Items Bought:
                 <span class="fw-700 float-right">1</span>
                                    </div>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th class="product-name">Product</th>
                                                <th class="product-total text-right">TOTAL</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="product-name">{cart.title}</td>
                                                <td class="product-total text-right">
                                                    {
                                                        cart.discount ?
                                                            <>
                                                                <CurrencyFormat
                                                                    value={cart.discountprice}
                                                                    displayType="text"
                                                                    thousandSeparator
                                                                />{' '} x {cart.quantity}</>
                                                            :
                                                            <>
                                                                <CurrencyFormat
                                                                    value={cart.price}
                                                                    displayType="text"
                                                                    thousandSeparator
                                                                />{' '}
                                                        x {cart.quantity}
                                                            </>
                                                    }
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table">
                                        <tfoot>
                                            <tr class="cart-subtotal">
                                                <th>Subtotal</th>
                                                <td class="text-right">
                                                    <span class="fw-600">UGX <CurrencyFormat
                                                        value={cart.price}
                                                        displayType="text"
                                                        thousandSeparator
                                                    /></span>
                                                </td>
                                            </tr>
                                            <tr class="cart-shipping">
                                                <th>Tax</th>
                                                <td class="text-right">
                                                    <span class="font-italic">0.000</span>
                                                </td>
                                            </tr>
                                            <tr class="cart-shipping">
                                                <th>Total Shipping</th>
                                                <td class="text-right">
                                                    <span class="font-italic">0.000</span>
                                                </td>
                                            </tr>
                                            <tr class="cart-total">
                                                <th><span class="strong-600">TOTAL</span></th>
                                                <td class="text-right">
                                                    <strong><span>UGX <CurrencyFormat
                                                        value={cart.price}
                                                        displayType="text"
                                                        thousandSeparator
                                                    /></span></strong>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="gry-bg">
                <div className="container">
                    <div class="shadow-sm bg-white py-2 px-2rounded">
                        <div >
                            <label class="aiz-checkbox">
                                <input type="checkbox" id="agree_checkbox" checked={termsCheck} onChange={(e) => setTermChecked(e.target.checked)} name="terms" />
                                <span class="aiz-square-check"></span>
                                <span className="fw-700">I agree to the </span>
                                <Link to="/terms">terms and conditions</Link>
                            </label>
                            {Object.keys(termsErrors).map((key) => <div style={{ color: 'red' }}>{termsErrors[key]}</div>)}
                        </div>
                        <div class="row align-items-center">
                            <div class="col-6">
                                <Link to="/" class="link link--style-3">
                                    <i class="las la-arrow-left"></i>
                                    <span className="fw-800 fs-16">Return to shop</span>
                                </Link>
                            </div>
                            <div class="col-6 pr-2 float-right">
                                <Link to="/receipt">
                                    <button onClick={placeOrder} type="button" class="btn btn-primary fw-600">
                                        {loading ? <Spinner /> : <span>Complete Order</span>}
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <div className='d-lg-none pb-5'>
                <Footer />
                <BottomFooter />
            </div>
            <div className='d-none d-lg-block' style={{ marginBottom: "-2%" }} >
                <Footer />
                <BottomFooter />
            </div>
        </>
    )
}

export default BuyNow
