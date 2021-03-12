/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import LoginModal from "../../../components/Modal/login-modal";
import './search.css';

const MobileHeader = ({open}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const dispatch = useDispatch();
    const { search } = useSelector((state) => ({ ...state }));
    const { text } = search;

    const history = useHistory();

    const {cartItems} = useSelector((state) => state.cart)

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('phonenumber');
        localStorage.removeItem('role');
        history.push("/");
    }

    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const phonenumber = localStorage.getItem('phonenumber');

    const handleChange = (e) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: { text: e.target.value },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search?${text}`);
    };

    return (
        <>
        <LoginModal modalIsOpen={modalIsOpen} close={closeModal} />
        <div className="d-xl-none d-lg-block z-1020 shadow-sm fixed-top" style={{ background: '#101622' }}>
            <div className="px-2 d-flex justify-content-between">
                <div className="d-flex justify-content-start mr-2">
                <div className="pt-3">
                    <i className="las la-bars"
                        style={{ fontSize: '25px', color: '#fff'}}
                        onClick={open}
                    >
                    </i>
                </div>
                <div className="ft-logo">
                    <Link to="/">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/logo.png`}
                        alt="Logo"
                        width={100}
                    />
                    </Link>
                </div>
                </div>
                <div className="d-flex justify-content-around align-items-center align-items-stretch">
                <div className="pt-2 text-white">
                    <div className="d-lg-block ml-3 mr-0">
                        <span class="btn btn-icon p-1">
                                    <span class=" position-relative d-inline-block">
                                        <i class="la la-shopping-cart la-2x text-white"></i>
                                        <span class="badge badge-circle badge-primary position-absolute absolute-top-right">{cartItems.length}</span>
                                    </span>
                                </span>
                    </div>
                </div>
                <div class="aiz-topbar-item text-white">
                    <div class="align-items-center d-flex dropdown">
                        {!token ? <a class="dropdown-toggle no-arrow text-dark"
                            onClick={openModal}><span class="text-white">
                                <span class="avatar avatar-sm mr-md-2">
                                    <i class="las la-user" style={{ fontSize: '32px' }}></i>
                                </span>
                            </span></a> : <a class="dropdown-toggle no-arrow text-dark" data-toggle="dropdown" href="javascript:void(0);" role="button" aria-haspopup="false" aria-expanded="false">
                                <span class="text-white">
                                    <span class="avatar avatar-sm mr-md-2">
                                        <i class="las la-user" style={{ fontSize: '32px' }}></i>
                                    </span>
                                </span>
                            </a>}

                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-md">
                            {
                                token ? (
                                    <>
                                        <a href="#" class="dropdown-item">
                                            <i class="las la-user" style={{ fontSize: '24px' }}></i>
                                            <span>{phonenumber}</span>
                                        </a>
                                        {role === 'admin' ? <Link to="/admin/dashboard" class="dropdown-item">
                                                    <i class="las la-cog" style={{ fontSize: '24px' }}></i>
                                                    <span>Admin DashBoard</span>
                                                </Link> : ''}
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

                
                </div>

            </div>
            <div class="nav-searchbar-wrapper">
                <form class="nav-searchbar search-big" accept-charset="utf-8">
                    <div class="nav-fill">
                        <div class="nav-search-field">
                            <input type="text" class="nav-input nav-progressive-attribute" placeholder="Search mobilephones, TVs, laptops"
                                value={text}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div class="nav-right">
                        <div class="nav-search-submit">
                            <input type="submit" class="nav-input" onClick={handleSubmit} />
                            <i class="nav-icon nav-sprite"></i>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className="bottom-space"/>
        </>
    )
}

export default MobileHeader