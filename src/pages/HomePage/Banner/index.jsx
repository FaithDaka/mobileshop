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
                                        <img class="cat-image lazyload mr-2 opacity-60" src="https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg" data-src="https://demo.activeitzone.com/ecommerce/public/uploads/all/46v0RI8PXlQa4Yy0IftaGaK9rZUQdLOAFkpnjRXT.jpg" width="16" alt="Women Clothing &amp; Fashion" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';" />
                                        <span class="cat-name">Mobile Phones</span>
                                    </a>
                                </li>
                                <li class="category-nav-element" data-id="2">
                                    <a href="#" class="text-truncate text-reset py-2 px-3 d-block">
                                        <img class="cat-image lazyload mr-2 opacity-60" src="https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg" data-src="https://demo.activeitzone.com/ecommerce/public/uploads/all/LHUk7AM6okO07NvMOkVB35JbQBCLGLjfbRBuUNHc.jpg" width="16" alt="Men Clothing &amp; Fashion" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';" />
                                        <span class="cat-name">Laptops &amp; Computers</span>
                                    </a>
                                </li>


                                <li class="category-nav-element" data-id="5">
                                    <a href="#" class="text-truncate text-reset py-2 px-3 d-block">
                                        <img class="cat-image lazyload mr-2 opacity-60" src="https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg" data-src="https://demo.activeitzone.com/ecommerce/public/uploads/all/7Hpz9FWvKRNENKEXd13gqNPlFxz8LFJgCTFzlZbR.jpg" width="16" alt="Kids &amp; toy" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';" />
                                        <span class="cat-name">Tablets &amp; Ipads</span>
                                    </a>
                                </li>
                                <li class="category-nav-element" data-id="6">
                                    <a href="#" class="text-truncate text-reset py-2 px-3 d-block">
                                        <img class="cat-image lazyload mr-2 opacity-60" src="https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg" data-src="https://demo.activeitzone.com/ecommerce/public/uploads/all/jNdturV05yXj1UsPHurYFoJs410G39D5C2bnPGor.jpg" width="16" alt="Sports &amp; outdoor" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';" />
                                        <span class="cat-name">Televisions</span>
                                    </a>
                                </li>
                                <li class="category-nav-element" data-id="7">
                                    <a href="#" class="text-truncate text-reset py-2 px-3 d-block">
                                        <img class="cat-image lazyload mr-2 opacity-60" src="https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg" data-src="https://demo.activeitzone.com/ecommerce/public/uploads/all/R6AnVQNPd89NvPZelfi4F8rfkbFIiu8XteN74BFz.jpg" width="16" alt="Jewelry &amp; Watches" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';" />
                                        <span class="cat-name">Gaming &amp; Consoles</span>
                                    </a>
                                </li>

                                <li class="category-nav-element" data-id="9">
                                    <a href="#" class="text-truncate text-reset py-2 px-3 d-block">
                                        <img class="cat-image lazyload mr-2 opacity-60" src="https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg" data-src="https://demo.activeitzone.com/ecommerce/public/uploads/all/KHQpABDau3b7oMyDFNSJYSMgprsQ1Kq5uij9fw3U.jpg" width="16" alt="Beauty, Health &amp; Hair" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';" />
                                        <span class="cat-name">Sound Systems</span>
                                    </a>
                                </li>

                                <li class="category-nav-element" data-id="9">
                                    <a href="#" class="text-truncate text-reset py-2 px-3 d-block">
                                        <img class="cat-image lazyload mr-2 opacity-60" src="https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg" data-src="https://demo.activeitzone.com/ecommerce/public/uploads/all/KHQpABDau3b7oMyDFNSJYSMgprsQ1Kq5uij9fw3U.jpg" width="16" alt="Beauty, Health &amp; Hair" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';" />
                                        <span class="cat-name">Accessories</span>
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