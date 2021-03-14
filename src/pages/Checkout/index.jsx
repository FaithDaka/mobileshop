import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import SweetAlert from 'react-bootstrap-sweetalert';
import CurrencyFormat from 'react-currency-format';
import CartHeader from '../Cart/CartHeader'
import Spinner from '../../components/Spinner'
import { removeCart } from '../../store/actions/cartActions'
import Footer from '../../components/Layout/Footer/index';
import BottomFooter from '../../components/Layout/Footer/BottomFooter'


const Checkout = ({ history }) => {
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

    const dispatch = useDispatch();
    const { cartItems, totalQuantities } = useSelector((state) => state.cart)
    const auth = useSelector(state => state.auth);

    const getTotal = () => {
        return cartItems.reduce((currentValue, nextValue) => {
            return nextValue.discount ? currentValue + nextValue.quantity * nextValue.discountprice : currentValue + nextValue.quantity * nextValue.price
        }, 0);
    };

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
        if (termsCheck === false) {
            termsErrors.invalidTerms = '*** Terms and conditions must be accepted';
            isValid = false;
        }

        setFullNameErrors(fullNameErrors);
        setaddressErrors(addressErrors);
        settermsErrors(termsErrors);
        return isValid;
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const placeOrder = async (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            setLoading(true)

            try {
                const orderData = {
                    orderItems: cartItems,
                    name: name,
                    contact: contact,
                    email: email,
                    address: address,
                    paymentMethod: 'cash',
                    shippingPrice: 0,
                    taxPrice: 0,
                    totalPrice: getTotal(),
                    totalquantity: totalQuantities
                }

                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${auth.token}`,
                    },
                }

                const res = await axios.post(`${process.env.REACT_APP_API}/orders`, orderData, config);

                setLoading(false)
                setShowAlert(true);
                localStorage.removeItem('cartItems')
                dispatch(removeCart(cartItems))

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
        <section class="my-4 pt-4">
        <div class="container text-left">
            <div class="row">
                <div class="col-lg-8">
                    <form>

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
                                                        <div class="col-md-2">
                                                            <label>Full Names</label>
                                                        </div>
                                                        <div class="col-md-10">
                                                            <textarea class="form-control textarea-autogrow mb-3" placeholder="Your Full Names" rows="1" name="address" required=""></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-2">
                                                            <label>Email Address</label>
                                                        </div>
                                                        <div class="col-md-10">
                                                            <input type="text" class="form-control mb-3" placeholder="Your email address" name="city" value="" required="" />
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-2">
                                                            <label>Delivery Address</label>
                                                        </div>
                                                        <div class="col-md-10">
                                                            <input type="text" class="form-control mb-3" placeholder="Your Delivery Address" name="delivery address" value="" required="" />
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-2">
                                                            <label>Phone</label>
                                                        </div>
                                                        <div class="col-md-10">
                                                            <input type="text" class="form-control mb-3" placeholder="+256" name="phone" value="" required="" />
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
                                                    <input value="cash_on_delivery" class="online_payment" type="radio" name="payment_option" checked="" />
                                                    <span class="d-block p-3 aiz-megabox-elem">
                                                        <img src="https://demo.activeitzone.com/ecommerce/public/assets/img/cards/cod.png" class="img-fluid mb-2" />
                                                        <span class="d-block text-center">
                                                            <span class="d-block fw-600 fs-15">Cash on Delivery</span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>

                                            <div class="col-6 col-md-4">
                                                <label class="aiz-megabox d-block mb-3">
                                                    <input value="cash_on_delivery" class="online_payment" type="radio" name="payment_option" checked="" />
                                                    <span class="d-block p-3 aiz-megabox-elem">
                                                        <img src="images/MTN.webp" class="img-fluid mb-2" />
                                                        <span class="d-block text-center">
                                                            <span class="d-block fw-600 fs-15">MTN Mobile Money</span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>

                                            <div class="col-6 col-md-4">
                                                <label class="aiz-megabox d-block mb-3">
                                                    <input value="cash_on_delivery" class="online_payment" type="radio" name="payment_option" checked="" />
                                                    <span class="d-block p-3 aiz-megabox-elem">
                                                        <img src="images/Airtel.webp" class="img-fluid mb-2" />
                                                        <span class="d-block text-center">
                                                            <span class="d-block fw-600 fs-15">Airtel Money</span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                        <div class="pt-3">
                            <label class="aiz-checkbox">
                                <input type="checkbox" required="" id="agree_checkbox" />
                                <span class="aiz-square-check"></span>
                                <span>I agree to the</span>
                            </label>
                            <a href="#">Terms and Conditions</a>,
              <a href="#">Return Policy</a> &amp;
              <a href="#">Privacy Policy</a>
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
                                    <button type="button" class="btn btn-primary fw-600">Complete Order</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-4 mt-4 mt-lg-0">
                    <div class="card border-0 shadow-sm rounded">
                        <div class="card-header">
                            <h3 class="fs-16 fw-600 mb-0">Summary</h3>
                            <div class="text-right">
                                <span class="badge badge-inline badge-primary">1 Items</span>
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
                                    <tr class="cart_item">
                                        <td class="product-name">
                                            Men's One and Only Textured Short Sleeve Button Up - Aqua
                          <strong class="product-quantity">× 1</strong>
                                        </td>
                                        <td class="product-total text-right">
                                            <span class="pl-4">300,000</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="table">
                                <tfoot>
                                    <tr class="cart-subtotal">
                                        <th>Subtotal</th>
                                        <td class="text-right">
                                            <span class="fw-600">UGX 300,000</span>
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
                                            <strong><span>UGX 300,000</span></strong>
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
    )
}

export default Checkout
