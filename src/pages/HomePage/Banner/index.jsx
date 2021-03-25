import React from 'react'
import BannerSlidder from './BannerSlidder'

const Banner = () => {
    return (
        <div class="home-banner-area mb-2 pt-3">
            <div class="container">
                <div class="row gutters-10 position-relative">
                    <div class="col-lg-3 position-static d-none d-lg-block">
                        <div class="aiz-category-menu bg-white rounded  shadow-sm">
                            <div class="p-3 bg-soft-primary d-none d-lg-block rounded-top all-category position-relative text-left">
                                <span class="fw-600 fs-16 mr-3">Categories</span>
                            </div>
                            <ul class="list-unstyled categories no-scrollbar py-2 mb-0 text-left">
                                <li class="category-nav-element" data-id="1">
                                    <a href="#" class="text-truncate text-reset py-2 px-3 d-block">
                                    <i class="las la-tasks aiz-side-nav-icon"></i><span class="cat-name">Mobile Phones</span>
                                    </a>
                                </li>
                                <li class="category-nav-element" data-id="2">
                                    <a href="#" class="text-truncate text-reset py-2 px-3 d-block">
                                    <i class="las la-tasks aiz-side-nav-icon"></i><span class="cat-name">Laptops &amp; Computers</span>
                                    </a>
                                </li>


                                <li class="category-nav-element" data-id="5">
                                    <a href="#" class="text-truncate text-reset py-2 px-3 d-block">
                                    <i class="las la-tasks aiz-side-nav-icon"></i><span class="cat-name">Tablets &amp; Ipads</span>
                                    </a>
                                </li>
                                <li class="category-nav-element" data-id="6">
                                    <a href="#" class="text-truncate text-reset py-2 px-3 d-block">
                                    <i class="las la-tasks aiz-side-nav-icon"></i><span class="cat-name">Televisions</span>
                                    </a>
                                </li>
                                <li class="category-nav-element" data-id="7">
                                    <a href="#" class="text-truncate text-reset py-2 px-3 d-block">
                                    <i class="las la-tasks aiz-side-nav-icon"></i> <span class="cat-name">Gaming &amp; Consoles</span>
                                    </a>
                                </li>

                                <li class="category-nav-element" data-id="9">
                                    <a href="#" class="text-truncate text-reset py-2 px-3 d-block">
                                    <i class="las la-tasks aiz-side-nav-icon"></i><span class="cat-name">Sound Systems</span>
                                    </a>
                                </li>

                                <li class="category-nav-element" data-id="9">
                                    <a href="#" class="text-truncate text-reset py-2 px-3 d-block">
                                    <i class="las la-tasks aiz-side-nav-icon"></i><span class="cat-name">Accessories</span>
                                    </a>
                                </li>


                            </ul>
                        </div>
                    </div>
                    <div class=" col-lg-9 ">
                        <div class="mobile-img-auto-height">

                            <BannerSlidder />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner