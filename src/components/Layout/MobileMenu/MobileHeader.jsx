/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { signout } from '../../../store/actions/auth';
import LoginModal from "../../../components/Modal/login-modal";
import './search.css';

const MobileHeader = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const dispatch = useDispatch();
    const { search } = useSelector((state) => ({ ...state }));
    const { text } = search;

    const history = useHistory();

    let { cart } = useSelector((state) => ({ ...state }));
    const auth = useSelector(state => state.auth);

    const logout = () => {
        dispatch(signout(history));
    }

    const handleChange = (e) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: { text: e.target.value },
        });
    };

    const openDrawer = () => setShowDrawer(true);
    const closeDrawer = () => setShowDrawer(false);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     history.push(`/search?${text}`);
    // };

    return (
        <header className="d-xl-none d-lg-block sticky-top  z-1020 border-bottom shadow-sm" style={{ background: '#101622' }}>
            <LoginModal modalIsOpen={modalIsOpen} close={closeModal} />
            <div className="d-flex px-2">
                <div className="pt-3">
                    <i className="las la-bars"
                        style={{ fontSize: '25px', color: '#fff', paddingRight: '14px' }}
                        onClick={openDrawer}
                    >
                    </i>
                </div>
                <div className="ft-logo">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/logo.png`}
                        alt="Logo"
                        width={100}
                    />
                </div>
                <div class="aiz-topbar-item ml-2 text-white">
                    <div class="align-items-stretch d-flex dropdown">
                        {!auth.authenticate ? <a class="dropdown-toggle no-arrow text-dark" 
                        onClick={openModal}><span class="text-white">
                            <span class="avatar avatar-sm mr-md-2">
                                <i class="las la-user-check" style={{ fontSize: '32px' }}></i>
                            </span>
                        </span></a> : <a class="dropdown-toggle no-arrow text-dark" data-toggle="dropdown" href="javascript:void(0);" role="button" aria-haspopup="false" aria-expanded="false">
                                <span class="text-white">
                                    <span class="avatar avatar-sm mr-md-2">
                                        <i class="las la-user-check" style={{ fontSize: '32px' }}></i>
                                    </span>
                                </span>
                            </a>}

                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-md">
                            {
                                auth.authenticate ? (
                                    <>
                                        <a href="#" class="dropdown-item">
                                            <i class="las la-user" style={{ fontSize: '24px' }}></i>
                                            <span>{auth.phonenumber}</span>
                                        </a>
                                        <Link to="#" class="dropdown-item" onClick={logout}>
                                            <i class="las la-sign-out-alt" style={{ fontSize: '24px' }}></i>
                                            <span>Logout</span>
                                        </Link>
                                    </>) : (
                                        <a href="#" class="dropdown-item">
                                            <i class="las la-user" style={{ fontSize: '24px' }}></i>
                                            <span>Login</span>
                                        </a>
                                    )
                            }

                        </div>
                    </div>
                </div>

                <div className="pt-3 text-white">
                    <div className="d-lg-block ml-3 mr-0 ">
                        <i className="la la-shopping-cart la-3x opacity-80" />
                        <span className="badge badge-circle badge-primary" style={{ position: 'absolute', top: '15px', right: '25px' }}>{cart.length}</span>
                    </div>
                </div>

            </div>
            <div class="nav-searchbar-wrapper">
                <form class="nav-searchbar search-big" accept-charset="utf-8">
                    <div class="nav-fill">
                        <div class="nav-search-field">
                            <input type="text" class="nav-input nav-progressive-attribute" placeholder="Search MobileShop" data-aria-clear-label="Clear search keywords" name="k" autocomplete="off" autocorrect="off" autocapitalize="off" dir="auto" id="nav-search-keywords"
                                // value={text}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div class="nav-right">
                        <div class="nav-search-submit">
                            <input type="submit" class="nav-input" />
                            <i class="nav-icon nav-sprite"></i>
                        </div>
                    </div>
                </form>
            </div>
        </header>
    )
}

export default MobileHeader