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
                <div class="container">
                    <div class="shadow-sm bg-white p-4 rounded mb-4 fs-15">
                    <div class="card-header">
                                    <h3 class="fs-16 fw-600 mb-0">Summary</h3>
                                    <div class="text-right">
                                        <span class="badge badge-inline badge-primary">{totalQuantities} Items</span>
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
                                            {cartItems.map((item, index) =>
                                                <tr key={index}>
                                                    <td>{item.title}</td>
                                                    <td class="text-right">
                                                        {
                                                            item.discount ?
                                                                <>
                                                                    <CurrencyFormat
                                                                        value={item.discountprice}
                                                                        displayType="text"
                                                                        thousandSeparator
                                                                    />{' '} x {item.quantity}</>
                                                                :
                                                                <>
                                                                    <CurrencyFormat
                                                                        value={item.price}
                                                                        displayType="text"
                                                                        thousandSeparator
                                                                    />{' '}
                                                        x {item.quantity}
                                                                </>
                                                        }
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                    <table class="table">
                                        <tfoot>
                                            <tr class="cart-subtotal">
                                                <th>Subtotal</th>
                                                <td class="text-right">
                                                    <span class="fw-600">UGX <CurrencyFormat
                                                        value={getTotal()}
                                                        displayType="text"
                                                        thousandSeparator
                                                    /></span>
                                                </td>
                                            </tr>
                                            <tr class="cart-shipping">
                                                <th>Number of Items</th>
                                                <td class="text-right">
                                                    <span class="font-italic">{totalQuantities}</span>
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
                                                    <strong><span>UGX <CurrencyFormat
                                                        value={getTotal()}
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


            </section>

            {/* <section class="">
                <div class="container text-left">
                    <div class="row">

                        <div class="col-lg-4 ">
                            <div class="card border-0 shadow-sm rounded">
                                <div class="card-header">
                                    <h3 class="fs-16 fw-600 mb-0">Summary</h3>
                                    <div class="text-right">
                                        <span class="badge badge-inline badge-primary">{totalQuantities} Items</span>
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
                                            {cartItems.map((item, index) =>
                                                <tr key={index}>
                                                    <td>{item.title}</td>
                                                    <td class="text-right">
                                                        {
                                                            item.discount ?
                                                                <>
                                            <section class="">
                <div class="container text-left">
                    <div class="row">

                        <div class="col-lg-4 ">
                            <div class="card border-0 shadow-sm rounded">
                                <div class="card-header">
                                    <h3 class="fs-16 fw-600 mb-0">Summary</h3>
                                    <div class="text-right">
                                        <span class="badge badge-inline badge-primary">{totalQuantities} Items</span>
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
                                            {cartItems.map((item, index) =>
                                                <tr key={index}>
                                                    <td>{item.title}</td>
                                                    <td class="text-right">
                                                        {
                                                            item.discount ?
                                                                <>
                                                                    <CurrencyFormat
                                                                        value={item.discountprice}
                                                                        displayType="text"
                                                                        thousandSeparator
                                                                    />{' '} x {item.quantity}</>
                                                                :
                                                                <>
                                                                    <CurrencyFormat
                                                                        value={item.price}
                                                                        displayType="text"
                                                                        thousandSeparator
                                                                    />{' '}
                                                        x {item.quantity}
                                                                </>
                                                        }
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                    <table class="table">
                                        <tfoot>
                                            <tr class="cart-subtotal">
                                                <th>Subtotal</th>
                                                <td class="text-right">
                                                    <span class="fw-600">UGX <CurrencyFormat
                                                        value={getTotal()}
                                                        displayType="text"
                                                        thousandSeparator
                                                    /></span>
                                                </td>
                                            </tr>
                                            <tr class="cart-shipping">
                                                <th>Number of Items</th>
                                                <td class="text-right">
                                                    <span class="font-italic">{totalQuantities}</span>
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
                                                    <strong><span>UGX <CurrencyFormat
                                                        value={getTotal()}
                                                        displayType="text"
                                                        thousandSeparator
                                                    /></span></strong>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table><section class="">
                <div class="container text-left">
                    <div class="row">

                        <div class="col-lg-4 ">
                            <div class="card border-0 shadow-sm rounded">
                                <div class="card-header">
                                    <h3 class="fs-16 fw-600 mb-0">Summary</h3>
                                    <div class="text-right">
                                        <span class="badge badge-inline badge-primary">{totalQuantities} Items</span>
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
                                            {cartItems.map((item, index) =>
                                                <tr key={index}>
                                                    <td>{item.title}</td>
                                                    <td class="text-right">
                                                        {
                                                            item.discount ?
                                                                <>
                                                                    <CurrencyFormat
                                                                        value={item.discountprice}
                                                                        displayType="text"
                                                                        thousandSeparator
                                                                    />{' '} x {item.quantity}</>
                                                                :
                                                                <>
                                                                    <CurrencyFormat
                                                                        value={item.price}
                                                                        displayType="text"
                                                                        thousandSeparator
                                                                    />{' '}
                                                        x {item.quantity}
                                                                </>
                                                        }
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                    <table class="table">
                                        <tfoot>
                                            <tr class="cart-subtotal">
                                                <th>Subtotal</th>
                                                <td class="text-right">
                                                    <span class="fw-600">UGX <CurrencyFormat
                                                        value={getTotal()}
                                                        displayType="text"
                                                        thousandSeparator
                                                    /></span>
                                                </td>
                                            </tr>
                                            <tr class="cart-shipping">
                                                <th>Number of Items</th>
                                                <td class="text-right">
                                                    <span class="font-italic">{totalQuantities}</span>
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
                                                    <strong><span>UGX <CurrencyFormat
                                                        value={getTotal()}
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>                        <CurrencyFormat
                                                                        value={item.discountprice}
                                                                        displayType="text"
                                                                        thousandSeparator
                                                                    />{' '} x {item.quantity}</>
                                                                :
                                                                <>
                                                                    <CurrencyFormat
                                                                        value={item.price}
                                                                        displayType="text"
                                                                        thousandSeparator
                                                                    />{' '}
                                                        x {item.quantity}
                                                                </>
                                                        }
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                    <table class="table">
                                        <tfoot>
                                            <tr class="cart-subtotal">
                                                <th>Subtotal</th>
                                                <td class="text-right">
                                                    <span class="fw-600">UGX <CurrencyFormat
                                                        value={getTotal()}
                                                        displayType="text"
                                                        thousandSeparator
                                                    /></span>
                                                </td>
                                            </tr>
                                            <tr class="cart-shipping">
                                                <th>Number of Items</th>
                                                <td class="text-right">
                                                    <span class="font-italic">{totalQuantities}</span>
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
                                                    <strong><span>UGX <CurrencyFormat
                                                        value={getTotal()}
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
            </section> */}

             <section class="gry-bg">
                 <div className="container">
                <div class="shadow-sm bg-white p-4 rounded mb-4 fs-15">
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

            <Footer />
            <BottomFooter />
        </section>
    )
}

export default Checkout
