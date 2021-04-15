import React from 'react'

const TopHeader = () => {

    return (
        <div class="mt-1 pt-1  top-navbar bg-dark  z-1035 d-none d-lg-block text-center">
            <div class="container">
                {/* <div class="row">
                    <div class="col-lg-7 col">
                        <ul class="list-inline d-flex justify-content-between justify-content-lg-start mb-0">
                            <li class="list-inline-item dropdown mr-3" id="lang-change">
                                    <span class="opacity-60">Contact Us: +256779003322</span>
                            </li>
                        </ul>
                    </div>
                    <div class="col-5 text-right d-none d-lg-block">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item mr-3">
                                <a href="#" class="text-reset py-2 d-inline-block opacity-60">Login</a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#" class="text-reset py-2 d-inline-block opacity-60">Registration</a>
                            </li>
                        </ul>
                    </div>
                </div> */}
                <div className="bg-white need-help">
                    <strong className="help float-center pr-5 pl-0 mr-0">Need help placing an order ?</strong>
                    <span className="help-contact "><i class="bi bi-telephone-outbound-fill pr-1 "><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                    </svg></i> <a href="tel:0751290264" style={{color:"black"}}>+256 709 744874 </a></span>
                </div>
            </div>
        </div>
    )
}

export default TopHeader