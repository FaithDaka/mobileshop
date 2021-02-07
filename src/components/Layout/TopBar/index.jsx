/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from "react";

const TopBar = () => (
  <div className="top-navbar bg-white border-bottom border-soft-secondary z-1035">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col">
          <ul className="list-inline d-flex justify-content-between justify-content-lg-start mb-0">
            <li className="list-inline-item mr-3" id="lang-change">
              <a
                href="javascript:void(0)"
                className="dropdown-toggle text-reset py-2"
                data-toggle="dropdown"
                data-display="static"
              >
                <span className="opacity-60">+256779825056</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-5 text-right d-none d-lg-block">
          <ul className="list-inline mb-0">
            <li className="list-inline-item mr-3">
              <a
                href="https://demo.activeitzone.com/ecommerce/users/login"
                className="text-reset py-2 d-inline-block opacity-60"
              >
                Login
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://demo.activeitzone.com/ecommerce/users/registration"
                className="text-reset py-2 d-inline-block opacity-60"
              >
                Registration
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default TopBar;
