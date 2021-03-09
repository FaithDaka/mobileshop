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

    const auth = useSelector(state => state.auth);

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
        } else {
            toast.error("Name or Delivery address or terms is required");
        }
    };

    return (
        <section class="mb-4 pt-3 pd-page">
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
            <section class="gry-bg ">
                <div class="container">


                    <div class="shadow-sm bg-white p-4 rounded mb-4">
                        <div class="form-group">
                            <label class="control-label">Primary Phone Number</label>
                            <input type="text" class="form-control" name="phone" placeholder="Phone" value={auth.phonenumber} disabled />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="contact" placeholder="Secondary Contact" value={contact}
                                onChange={(e) => setContact(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="name" placeholder="Name" value={name}
                                onChange={(e) => setName(e.target.value)} />
                            {Object.keys(fullNameErrors).map((key) => <div style={{ color: 'red' }}>{fullNameErrors[key]}</div>)}
                        </div>

                        <div class="form-group">
                            <input type="text" class="form-control" name="email" placeholder="Email" value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div class="form-group">
                            <input type="text" class="form-control" name="address" placeholder="Delivery Address" value={address}
                                onChange={(e) => setAddress(e.target.value)} />
                            {Object.keys(addressErrors).map((key) => <div style={{ color: 'red' }}>{addressErrors[key]}</div>)}
                        </div>
                        <div class="form-group">
                            <select class="custom-select" id="inputGroupSelect01" value={city}
                                onChange={(e) => setCity(e.target.value)} >
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


            </section>
            <section class="gry-bg">
                <div class="container">
                    <div class="shadow-sm bg-white p-4 rounded mb-4 fs-15">
                        <div style={{ paddingBottom: "2%" }}>Payment Info</div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled />
                            <label class="form-check-label" for="flexRadioCheckedDisabled">
                                Cash On Delivery<br></br>
                                <small>Pay with Cash upon devlivery</small>
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
                            <label class="form-check-label" for="flexRadioDisabled">
                                Mobile Money<br></br>
                                <small>Pay with mobile money</small>
                            </label>
                        </div>
                    </div>
                </div>

            </section>

            <section class="gry-bg">
                <div className="container">
                    <div class="shadow-sm bg-white p-4 rounded mb-4 fs-15">
                        <div >
                            <label class="aiz-checkbox">
                                <input type="checkbox" id="agree_checkbox" checked={termsCheck} onChange={(e) => setTermChecked(e.target.checked)} name="terms" />
                                <span class="aiz-square-check"></span>
                                <span className="fw-700">I agree to the terms and conditions</span>
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

            <Footer />
            <BottomFooter />
        </section>
    )
}

export default BuyNow
