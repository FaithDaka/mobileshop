import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import './styles.css'

const BottomMenu = ({open}) => {
  const {cartItems} = useSelector((state) => state.cart)

  return(
  <div className="d-block d-lg-none bottom__menu">
   
      <div className="navigation--list">
      <div>
      chhh
    </div>
        <div className="navigation__content">
          <Link to="/" className="navigation__item ">
          <a className="las la-home la-2x" />
            <span style={{ color: '#bbb' }}> Home</span>
          </Link>

          <a to="#" className="navigation__item " onClick={open}>
          <i className="las la-list-ul la-2x" />
            <span style={{ color: '#bbb' }}> Categories</span>
          </a>

          <a className="navigation__item call-item" href="https://wa.me/256751290264?text=Mobile%20Shop%20I%20have%20an%20inquiry" title="WhatsApp Call">
            <div className="whatsapp-img">
              {/* <i
                className="fab fa-whatsapp"
                style={{
                  width: '33%',
                  height: '33%',
                  color: '#25D366'
                }}
              /> */}
              <i className="la la-whatsapp" style={{color: '#25D366'}}></i>
            </div>
            <span style={{ color: '#bbb' }}> WhatsApp</span>
          </a>

          <Link to={`${process.env.PUBLIC_URL}/cart`}>
            <a className="navigation__item">
              <div className="icon row" style={{ justifyContent: 'center' }}>
              <i className="las la-shopping-cart la-2x" />
                <span
                  className="cart-count"
                  style={{
                    marginLeft: '-2.5px', color: '#f2f2f2', fontSize: '12px', fontWeight: '800'
                  }}
                >
                 {cartItems.length}
                </span>
              </div>
                <span style={{ color: '#bbb' }}>Cart</span>
            </a>
          </Link>

        </div>
      </div>
    </div>
    )};

export default BottomMenu
