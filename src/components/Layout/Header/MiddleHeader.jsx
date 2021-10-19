import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useHistory } from 'react-router-dom';
import { removeFromCart } from '../../../store/actions/cartActions'
import Dropdown from './dropdown'
import LoginModal from "../../../components/Modal/login-modal";

const MiddleHeader = () => {
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

    const styles = {
       paddingTop:"3%",
        width:"90%",
        paddingRight:"10%"
      }
    

      const removeFromCartHandler = (id) => {
          dispatch(removeFromCart(id))
          toast.success("Product successfuly removed from cart");
      }
    
    return (
        <>
        <LoginModal modalIsOpen={modalIsOpen} close={closeModal} />
        <header class=" sticky-top  z-1020 text-light" style={{ background: '#101622' }}>
            <div class="position-relative logo-bar-area z-1">
                <div class="container">
                    <div class="d-flex align-items-center">
                        <div class="col-auto col-xl-3 pl-0 pr-3 d-flex align-items-center" style={{ height: 80 }}>
                            <Link class="d-block py-20px pb-3 mr-3 ml-0" to="/">
                                <img src="images/logo.png" alt="MobileShop Logo" class="mw-100  " width="130" />
                            </Link>
                        </div>
                        <div class="d-lg-none ml-auto mr-0">
                            {/* <a class="p-2 d-block text-reset" href="javascript:void(0);" data-toggle="class-toggle" data-target=".front-header-search">
                                <i class="las la-search la-flip-horizontal la-2x"></i>
                            </a> */}
                        </div>
                        <div class="flex-grow-1 front-header-search d-flex align-items-center">
                            <div class="position-relative flex-grow-1">
                                <form style={styles}>
                                    <div class="d-flex position-relative align-items-center">
                                        <div class="d-lg-none" data-toggle="class-toggle" data-target=".front-header-search">
                                            <button class="btn px-2" type="button"><i class="la la-2x la-long-arrow-left"></i></button>
                                        </div>
                                        <div class="input-group">
                                            <input type="text" class="border-0 border-lg form-control" id="search" name="q" placeholder="I am shopping for..." autocomplete="off" 
                                             value={text}
                                             onChange={handleChange}/>
                                            <div class="input-group-append d-none d-lg-block">
                                                <button class="btn btn-primary" type="submit" onClick={handleSubmit} >
                                                    <i class="la la-search la-flip-horizontal fs-18"></i>
                                                </button>
                                                        </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                        <div class="ml-3 mr-0 pt-1 text-light">
                            <div class="nav-cart-box dropdown h-100" id="cart_items">
                                <Link to="/cart" class="d-flex align-items-center text-reset h-100" data-toggle="dropdown" data-display="static">
                                <span class=" position-relative d-inline-block">
                                        <i class="la la-shopping-cart la-2x" style={{fontSize: '32px'}}></i>
                                        <span class="badge badge-circle badge-primary position-absolute absolute-top-right">{cartItems.length}</span>
                                    </span>
                                </Link>
                                <small style={{ fontSize: 12 + "px" }}>My Cart</small>
                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 dropdown-menu-animated stop-propagation">
                                    <div class="text-center p-3 bg-white">
                                    <Dropdown cart={cartItems}  />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-none d-lg-block ml-4 mr-0" style={{marginTop:"-2%"}}>
                     
                            <div class="align-items-center d-flex dropdown">
                        {!token ? 
                        <a class="dropdown-toggle no-arrow text-dark position-relative"
                            onClick={openModal}>
                                <span class=" position-relative d-inline-block">
                                <i class="las la-user" style={{ fontSize: '32px',color:"white"}}></i>
                                    </span>
                                
                                <span>
                               
                               
                            </span>
                            <small className="position-absolute top-100 start-50 translate-middle pt-1 text-white" style={{ fontSize: 12 + "px" }}>Account</small>
                            </a> 
                             
                            : <a class="dropdown-toggle no-arrow text-dark position-relative" data-toggle="dropdown" href="javascript:void(0);" role="button" aria-haspopup="false" aria-expanded="false">
                                <span class=" position-relative d-inline-block">
                                <i class="las la-user" style={{ fontSize: '32px',color:"white"}}></i>
                                    </span>
                                
                                <span>
                               
                               
                            </span>
                            <small className="position-absolute top-100 start-50 translate-middle pt-1 text-white" style={{ fontSize: 12 + "px" }}>Account</small>
                            </a> }

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
            </div>
            <div class="border-gray-200 py-1 d-none d-lg-block">
                <div class="container">
                    <ul class="list-inline mb-0 pl-0 mobile-hor-swipe">
                        <li class="list-inline-item mr-0">
                            <Link to="/products/apple" class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset">
                                Apple
                   </Link>
                        </li>
                        <li class="list-inline-item mr-0">
                            <Link to="/products/samsung" class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset">
                                Samsung
                   </Link>
                        </li>
                        <li class="list-inline-item mr-0">
                            <Link to="/products/tecno" class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset">
                                Tecno
                   </Link>
                        </li>
                        <li class="list-inline-item mr-0">
                            <Link to="/products/realme" class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset">
                                Realme
                   </Link>
                        </li>
                        <li class="list-inline-item mr-0">
                            <Link to="/products/google" class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset">
                                Google
                   </Link>
                        </li>
                        <li class="list-inline-item mr-0">
                            <Link to="/products/oneplus" class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset">
                                One Plus
                   </Link>
                        </li>
                        <li class="list-inline-item mr-0">
                            <Link to="/products/nokia" class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset">
                                Nokia
                   </Link>
                        </li>
                        <li class="list-inline-item mr-0">
                            <Link to="/products/infinix" class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset">
                                Infinix
                   </Link>
                        </li>
                        <li class="list-inline-item mr-0">
                            <Link to="/products/oppo" class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset">
                                Oppo
                   </Link>
                        </li>
                        <li class="list-inline-item mr-0">
                            <Link to="/products/xiaomi" class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset">
                                Xiaomi
                   </Link>
                        </li>
                        <li class="list-inline-item mr-0">
                            <Link to="/products/hisense" class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset">
                                Hisense
                   </Link>
                        </li>
                        <li class="list-inline-item mr-0">
                            <Link to="/products/jbl-speakers" class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset">
                                JBL Speakers
                   </Link>
                        </li>
                        <li class="list-inline-item mr-0">
                            <Link to="/products/consoles" class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset">
                                Consoles
                   </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        </>
    )
}

export default MiddleHeader