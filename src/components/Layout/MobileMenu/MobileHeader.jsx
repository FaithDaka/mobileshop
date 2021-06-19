/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import LoginModal from "../../../components/Modal/login-modal";

import './search.css';

const MobileHeader = ({ open }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const dispatch = useDispatch();
    const { search } = useSelector((state) => ({ ...state }));
    const { text } = search;

    const history = useHistory();

    const { cartItems } = useSelector((state) => state.cart)

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
            <div id="maindiv" class="text-center mb-0 pb-0">
                    {/* <div id="div1">
                        <span style={{ whiteSpace: "nowrap" }}>
                            <strong className="help float-center pr-2 pb-0 mb-0" style={{ fontSize: 19 + "px" ,color:'white' }}>Need help placing an order ?  &nbsp;&nbsp;
            <i class="bi bi-telephone-outbound-fill pr-1 " style={{ color: "#f90", fontSize: 17 + "px" }}><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                                </svg></i> <a href="tel:0709744874" style={{ color: "#f90", fontSize: 17 + "px" }}>0709 744 874 </a></strong></span> &nbsp;&nbsp;&nbsp;

                                <strong style={{color:"white" ,fontSize: 18 + "px"}}>Main store,Along Kampala road, at Church House,First Floor Room C001</strong>
                    </div> */}
                  
                    <marquee behavior="scroll" direction="left" scrollamount="10">
                    <strong className="help float-center pr-2 pb-0 mb-0" style={{ fontSize: 19 + "px" ,color:'white' }}>Need help placing an order ?  &nbsp;&nbsp;
            <i class="bi bi-telephone-outbound-fill pr-1 " style={{ color: "#f90", fontSize: 17 + "px" }}><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                                </svg></i> <a href="tel:0709744874" style={{ color: "#f90", fontSize: 17 + "px" }}>0709 744 874 </a></strong> &nbsp;&nbsp;&nbsp;

                                <strong style={{color:"white" ,fontSize: 18 + "px"}}>Main store along Kampala road, at Church House, First Floor Room C001</strong>
                    </marquee>

                </div>
                
                <div className="mt-0 pt-0 px-2 d-flex justify-content-between">
                    
                    <div className="d-flex justify-content-start mr-2">
                        <div className="pt-3">
                            <i className="las la-bars"
                                style={{ fontSize: '25px', color: '#fff' }}
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
                        <Link to='/cart'>
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
                        </Link>
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
            <div class="d-sm-none invisible">
                <h2>MobileShop ug</h2>
            </div>
        </>
    )
}

export default MobileHeader