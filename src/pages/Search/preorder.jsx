import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

import Footer from '../../components/Layout/Footer/index';
import BottomFooter from '../../components/Layout/Footer/BottomFooter';


const PreOrder = ({history}) => {


    return (
        <>
            <section class="my-4 pt-4">

                <div class="container text-left">
                    <div class="row">
                        <div class="col-lg-12">

                            <div class="card shadow-sm border-0 rounded">
                                <div class="card-header p-3">
                                    <h3 class="fs-16 fw-600 mb-0">
                                        Pre-Order Product
                 </h3>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-xxl-8 col-xl-10 mx-auto">
                                            <div class="row gutters-10">

                                                <div class="modal-body">
                                                    <div class="">
                                                        <div class="row">
                                                            <div class="col-md-10">
                                                                <input type="text" class="form-control mb-3" placeholder="Phone Number" />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-10">
                                                                <input type="text" class="form-control mb-3" name="fullnames" placeholder="Full Names" />
                                                            </div>

                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-10">
                                                                <input type="email" class="form-control mb-3" name="email" placeholder="Email Address" />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-10">
                                                                <input type="text" class="form-control mb-3" name="address" placeholder="Product Name" />
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="row">
                                                            <div class="col-md-10">
                                                                <label for="exampleFormControlTextarea1" class="form-label"></label>
                                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Description of product to order'></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </section>

            <section class="gry-bg">
                <div className="container">
                    <div class="shadow-sm bg-white py-3 px-2 rounded ">
                        <div >
                            <label class="aiz-checkbox">
                                <input type="checkbox" id="agree_checkbox" />
                                <span class="aiz-square-check"></span>
                                <span className="fw-700">I agree to the </span>
                                <Link to="/terms">terms and conditions</Link>
                            </label>

                        </div>
                        <div class="row align-items-center">
                            <div class="col-6">
                                <Link to="/" class="link link--style-3">
                                    <i class="las la-arrow-left"></i>
                                    <span className="fw-800 fs-16">Return to shop</span>
                                </Link>
                            </div>
                            <div class="col-6 pr-2 float-right">
                                <Link>
                                    <button type="button" class="btn btn-primary fw-600">
                                        Submit
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <div className='d-lg-none pb-5'>
                <Footer />
                <BottomFooter />
            </div>
            <div className='d-none d-lg-block' style={{ marginBottom: "-2%" }} >
                <Footer />
                <BottomFooter />
            </div>
        </>
    )
}

export default PreOrder
