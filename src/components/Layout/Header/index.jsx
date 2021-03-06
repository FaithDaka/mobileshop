// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React from "react";
// import { useSelector } from "react-redux";
// import './headerstyle.css'

// const Header = () => {
//   let { cart } = useSelector((state) => ({ ...state }));

//   const getTotal = () => {
//     return cart.reduce((currentValue, nextValue) => {
//       return currentValue + nextValue.count * nextValue.price;
//     }, 0);
//   };

//   //header for desktop
//   return (
//     <>
//       <header className=".d-none .d-lg-block .d-xl-none sticky-top  z-1020 border-bottom shadow-sm" style={{ background: '#101622' }}>
//         <div className="position-relative logo-bar-area">
//           <div className="container">
//             <div className="d-flex align-items-center">
//               <div className="col-auto col-xl-3 pl-0 pr-3 d-flex align-items-center">
//                 <a
//                   className="d-block py-20px mr-3 ml-0"
//                   href="#"
//                 >
//                   <img
//                     src={`${process.env.PUBLIC_URL}/images/logo.png`}
//                     alt="Logo"
//                     width={80}
//                   />
//                 </a>
//               </div>
//               <div className="d-lg-none ml-auto mr-0">
//                 <a
//                   className="p-2 d-block text-reset"
//                   href="#"
//                   data-toggle="class-toggle"
//                   data-target=".front-header-search"
//                 >
//                   <i className="las la-search la-flip-horizontal la-2x" />
//                 </a>
//               </div>
//               <div>
//                 <form class="form-inline">
//                   <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                   <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//               </div>

//               {/* <div className="flex-grow-1 front-header-search d-flex align-items-center bg-white">
//                 <div className="position-relative flex-grow-1">
//                   <form>
//                     <div className="d-flex position-relative align-items-center">
//                       <div
//                         className="d-lg-none"
//                         data-toggle="class-toggle"
//                         data-target=".front-header-search"
//                       >
//                         <button className="btn px-2" type="button">
//                           <i className="la la-2x la-long-arrow-left" />
//                         </button>
//                       </div>
//                       <div className="input-group">
//                         <input
//                           type="text"
//                           className="border-0 border-lg form-control"
//                           id="search"
//                           name="q"
//                           placeholder="I am shopping for..."
//                           autoComplete="off"
//                         />
//                         <div className="input-group-append d-lg-block">
//                           <button className="btn btn-primary" type="submit">
//                             <i className="la la-search la-flip-horizontal fs-18" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                   <div
//                     className="typed-search-box stop-propagation document-click-d-none d-none bg-white rounded shadow-lg position-absolute left-0 top-100 w-100"
//                     style={{ minHeight: "200px" }}
//                   >
//                     <div className="search-preloader absolute-top-center">
//                       <div className="dot-loader">
//                         <div />
//                         <div />
//                         <div />
//                       </div>
//                     </div>
//                     <div className="search-nothing d-none p-3 text-center fs-16" />
//                     <div id="search-content" className="text-left" />
//                   </div>
//                 </div>
//               </div> */}

              // {/* <div className="d-none d-lg-none ml-3 mr-0">
              //   <div className="nav-search-box">
              //     <a href="#" className="nav-box-link">
              //       <i className="la la-search la-flip-horizontal d-inline-block nav-box-icon" />
              //     </a>
              //   </div>
              // </div> */}

//               <div
//                 className="d-none d-lg-block  align-self-stretch ml-3 mr-0 text-white"
//                 data-hover="dropdown"
//               >
//                 <div className="nav-cart-box dropdown h-100 show" id="cart_items">
//                   <a
//                     href="#"
//                     className="d-flex align-items-center text-reset h-100"
//                     data-toggle="dropdown"
//                     data-display="static"
//                     aria-expanded="true"
//                   >
//                     <i className="la la-shopping-cart la-2x opacity-80" />
//                     <span className="flex-grow-1 ml-1">
//                       <span className="badge badge-primary badge-inline badge-pill">
//                         {cart.length}
//                       </span>
//                       <span className="nav-box-text d-none d-xl-block opacity-70">
//                         Cart
//                   </span>
//                     </span>
//                   </a>
//                   {/* <HeaderCart /> */}
//                 </div>

//               </div>
//               <div
//                 className="d-none d-lg-block  align-self-stretch ml-3 mr-0 text-white"
//                 data-hover="dropdown"
//               >
//                 <div className="nav-cart-box dropdown h-100 show" id="cart_items">
//                   <a
//                     href="#"
//                     className="d-flex align-items-center text-reset h-100"
//                     data-toggle="dropdown"
//                     data-display="static"
//                     aria-expanded="true"
//                   >
//                     <i className="la la-shopping-cart la-2x opacity-80" />
//                     <span className="flex-grow-1 ml-1">
//                       <span className="badge badge-primary badge-inline badge-pill">
//                         {cart.length}
//                       </span>
//                       <span className="nav-box-text d-none d-xl-block opacity-70">
//                         Cart
//                   </span>
//                     </span>
//                   </a>
//                   {/* <HeaderCart /> */}
//                 </div>

//               </div>

//             </div>
//           </div>
//         </div>
//       </header>

//     </>
//   )
// };

// export default Header;

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { signout } from '../../../store/actions/auth';
import LoginModal from "../../../components/Modal/login-modal";


const Header = ({open}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const dispatch = useDispatch();
    const { search } = useSelector((state) => ({ ...state }));
    const { text } = search;

    const history = useHistory();

    const {cartItems} = useSelector((state) => state.cart)
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

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search?${text}`);
    };

    return (
        <>
        <LoginModal modalIsOpen={modalIsOpen} close={closeModal} />
        <div className="d-none d-lg-block z-1020 shadow-sm fixed-top" style={{ background: '#101622' }}>
            <div className="px-2 d-flex justify-content-between">
                <div className="d-flex justify-content-start mr-2">
                <div className="pt-3">
                    <i className="las la-bars"
                        style={{ fontSize: '25px', color: '#fff'}}
                        onClick={open}
                    >
                    </i>
                </div>
                <div className="ft-logo" style={{paddingLeft:"3%"}}>
                    <Link to="/">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/logo.png`}
                        alt="Logo"
                        width={100}
                    />
                    </Link>
                </div>
                </div>
                <div class="input-group" style={{width:"50%",paddingTop:"1%"}}>
    <input type="text" class="form-control" placeholder="Search for products"/>
    <div class="input-group-append">
      <button class="btn btn-secondary" type="button" style={{height:"85%", backgroundColor:"#f90",border:"none"}}>
      <i class="bi bi-search"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></i>
     </button>
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
                        {!auth.authenticate ? <a class="dropdown-toggle no-arrow text-dark"
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
                                auth.authenticate ? (
                                    <>
                                        <a href="#" class="dropdown-item">
                                            <i class="las la-user" style={{ fontSize: '24px' }}></i>
                                            <span>{auth.phonenumber}</span>
                                        </a>
                                        {auth.isAdmin ? <Link to="/admin/dashboard" class="dropdown-item">
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
        </div>
        <div className="bottom-space"/>
        </>
    )
}

export default Header