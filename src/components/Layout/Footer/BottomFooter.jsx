import React from 'react';
import { Link } from 'react-router-dom'

const BottomFooter = () => (
  <footer className="d-xl-none d-lg-block pt-3 pb-7 pb-xl-3 text-light" style={{backgroundColor: '#131821'}}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4">
          <div className="text-center text-md-left">
            <span style={{fontSize:'125%',lineHeight:'1em'}}>©</span>
            Kampala Road, Church House First Floor
            <br />  
            Suite CH - 001              
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
        <div className="col-lg-4">
          <ul class="breadcrumb bg-transparent p-0">
                                <li class="breadcrumb-item">
                                <Link to="/aboutus">About us</Link>
                                </li>
                                <li class="breadcrumb-item">
                                <Link to="/faqs">FAQs</Link>
                                </li>
                                <li class="breadcrumb-item">
                                <Link to="/terms">Terms and Conditions</Link>
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
