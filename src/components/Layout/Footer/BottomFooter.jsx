/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'

const BottomFooter = () => (
  <footer className="pt-3 pb-7 pb-xl-3 text-light" style={{backgroundColor: '#131821'}}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4">
          <div className="text-center text-md-left">
            <span style={{fontSize:'125%',lineHeight:'1em'}}>©</span>
            2020 MobileShop Uganda
            <br />                
          </div>
        </div>
        <div className="col-lg-4">
          <ul className="list-inline my-3 my-md-0 social colored text-center">
            <li className="list-inline-item">
              <a href="#" target="_blank" className="facebook"><i className="lab la-facebook-f" /></a>
            </li>
            <li className="list-inline-item">
              <a href="#" target="_blank" className="twitter"><i className="lab la-twitter" /></a>
            </li>
            <li className="list-inline-item">
              <a href="#" target="_blank" className="instagram"><i className="lab la-instagram" /></a>
            </li>
            <li className="list-inline-item">
              <a href="#" target="_blank" className="youtube"><i className="lab la-youtube" /></a>
            </li>
            <li className="list-inline-item">
              <a href="#" target="_blank" className="linkedin"><i className="lab la-linkedin-in" /></a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 d-none d-lg-block">
          <div className="text-center text-md-right">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <img src="https://demo.activeitzone.com/ecommerce/public/uploads/all/cvlLLJKegKGY3OJ3Pt6gGHhnAqnjelvpHh3LhZMF.png" height="30" />
              </li>
              <li className="list-inline-item">
                <img src="https://demo.activeitzone.com/ecommerce/public/uploads/all/roW2yWEa9WfgLIZaGhGuHYzIosdfv5LkpcxtOl3S.png" height="30" />
              </li>
              <li className="list-inline-item">
                <img src="https://demo.activeitzone.com/ecommerce/public/uploads/all/H5BOfQaANROwwTlnvrJ0svS9EN8BuTYCgUlqWeSf.png" height="30" />
              </li>
              <li className="list-inline-item">
                <img src="https://demo.activeitzone.com/ecommerce/public/uploads/all/FUJIuaNhNjvG6pfGjSVKNN1kPSi5dB3duwufDT9M.png" height="30" />
              </li>
              <li className="list-inline-item">
                <img src="https://demo.activeitzone.com/ecommerce/public/uploads/all/tlTQSKz2VwKABdV7dnxAq6qhTn6tUnwOFPQWReCc.jpeg" height="30" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
    )

export default BottomFooter
