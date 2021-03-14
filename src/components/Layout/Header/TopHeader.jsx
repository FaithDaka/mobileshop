import React from 'react'

const TopHeader = () => {
    return (
        <div class="top-navbar bg-white border-bottom border-soft-secondary z-1035 d-none d-lg-block">
            <div class="container">
                <div class="row">
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
                </div>
            </div>
        </div>
    )
}

export default TopHeader