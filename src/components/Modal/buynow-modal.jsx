import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import LoadSpinner from "../../components/Spinner"
import { loginBuynow } from "../../store/actions/auth"
import './verify.css';
import './tel.css';

const customStyles = {
    content: {
        top: '50%',
        transform: 'translateY(-50%)'
    },
    overlay: {
        backgroundColor: 'rgba(77,77,77,0.6)',
        zIndex: '10000'
    }
};

Modal.setAppElement('#root');

const BuyNowModal = ({ modalIsOpen, close }) => {

    const [phone, setPhone] = useState('')
    const [role, setRole] = useState('admin')
    const [hash, setHash] = useState('')
    const [otp, setOTP] = useState('')
    const [loading, setLoading] = useState(false)

    let dispatch = useDispatch();
    const history = useHistory();
    const auth = useSelector(state => state.auth);
    
    const number = parseInt(phone, 10)
    const phonenumber = `+256${number}`

    const sendOTP = (e) => {
        setLoading(true)
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_API}/otp/sendOTP`, { phonenumber })
            .then(res => {
                setLoading(false)
                console.log("OTP Response Data", res)
                setHash(res.data.hash)
            })
    }

    const confirmOTP = (e) => {
        e.preventDefault()

        const user = {
            phonenumber, hash, otp, role
        }

        dispatch(loginBuynow(user, history));
    }

    return (
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={close}
        style={customStyles}
        contentLabel="Login Modal"
        className="modal-dialog modal-dialog-centered"
        id="login-modal" >
        <div className="modal-content">
            <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={close}>
                    <span aria-hidden="true"><i className="icon-close"></i></span>
                </button>
                {!hash && (
                    <div class="a-container">
                        <div class="a-section a-spacing-none" />
                        <div class="a-section a-spacing-none auth-pagelet-mobile-container" />
                        <div class="a-section auth-pagelet-mobile-container">
                            <div class="a-section auth-pagelet-container">
                                <h1>
                                    Log In with PhoneNumber
           </h1>
                                <p>
                                </p>
                                <p>
                                    Please make sure you fill in a valid phone number so we can reach you during delivery.
           </p>
                                <form id="auth-pv-form" onSubmit={sendOTP}>
                                    <div class="iti iti--allow-dropdown">
                                        <div class="iti__flag-container">
                                            <div class="iti__selected-flag" role="combobox" aria-controls="iti-0__country-listbox" aria-owns="iti-0__country-listbox" aria-expanded="false" tabindex="0" title="Uganda: +256" aria-activedescendant="iti-0__item-ug">
                                                <div class="iti__flag iti__ug">
                                                    <img src='./flag.png' alt="flag"  />
                                                </div>
                                                <div class="iti__arrow"></div>
                                            </div>
                                        </div>
                                        <input type="tel" id="phone" class="form-control" autocomplete="off" data-intl-tel-input-id="0" 
                                        name="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="0779XXXXXX" />
                                    </div>

                                    <span class="a-button a-spacing-medium a-button-span12 a-button-primary" id="a-autoid-0" style={{marginTop: '15px'}}><span class="a-button-inner">
                                        <input id="auth-verify-button" name="pvSubmit" class="a-button-input" type="submit" aria-labelledby="a-autoid-0-announce" />
                                        <span class="a-button-text" aria-hidden="true" id="a-autoid-0-announce">
                                            {loading ? <LoadSpinner /> : <span>Verify Mobile Number</span>}
                                        </span></span></span>
                                    <div class="a-section a-spacing-base">
                                        <div id="legalTextRow" class="a-row a-spacing-top-medium a-size-small">
                                            By continuing, you agree to MobileShop's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
                 </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                )}

                {hash && (
                    <div class="a-container">
                        <div class="a-section a-spacing-none" />
                        <div class="a-section a-spacing-none auth-pagelet-mobile-container" />
                        <div class="a-section auth-pagelet-mobile-container">
                            <div class="a-section auth-pagelet-container">
                                <h1>
                                    Verify Mobile Number
           </h1>
                                <p>
                                </p>
                                <div class="a-row">
                                    <span id="auth-pv-phone-number-text" class="a-text-bold">
                                        UG {phonenumber} ( <a class="a-link-normal" href="#"> Change </a> )
              </span>
                                </div>
                                <p></p>
                                <p>
                                    A text with a One Time Password (OTP) has been sent to the number above.
           </p>
                                <form id="auth-pv-form" onSubmit={confirmOTP}>
                                    <label for="auth-pv-enter-code" class="a-form-label auth-mobile-label"></label>
                                    <div class="a-input-text-wrapper a-spacing-medium auth-autofocus auth-required-field">
                                        <input type="number" maxlength="6" autocomplete="off" placeholder="Enter OTP Code" name="otp" autocorrect="off"
                                            value={otp}
                                            onChange={(e) => setOTP(e.target.value)}
                                        />
                                    </div>
                                    <span class="a-button a-spacing-medium a-button-span12 a-button-primary" id="a-autoid-0"><span class="a-button-inner">
                                        <input id="auth-verify-button" name="pvSubmit" class="a-button-input" type="submit" aria-labelledby="a-autoid-1-announce" />
                                        <span class="a-button-text" aria-hidden="true" id="a-autoid-1-announce">
                                            {auth.authenticating ? <LoadSpinner /> : <span>Login into your account</span>}
                                        </span></span></span>
                                    <div class="a-section a-spacing-base">
                                        <div id="legalTextRow" class="a-row a-spacing-top-medium a-size-small">
                                            By creating an account, you agree to MobileShop's <a href="/#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
                 </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    </Modal>
    )
}


export default BuyNowModal;