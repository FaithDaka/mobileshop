import React from 'react'
import Pagination from '../../components/Pagination'
import Browse from './Browse'
import Filters from './Filters'

const SearchFilters = () => {
    return (
        <section class="mb-4 pt-3">
        <div class="container sm-px-0">
           <form class="" id="search-form" action="" method="GET">
              <div class="row">
                 <div class="col-xl-3">
                    {/* <Filters /> */}
                 </div>
                 <div class="col-xl-9">
                    <ul class="breadcrumb bg-transparent p-0">
                       <li class="breadcrumb-item opacity-50">
                          <a class="text-reset" href="https://demo.activeitzone.com/ecommerce">Home</a>
                       </li>
                       <li class="breadcrumb-item opacity-50">
                          <a class="text-reset" href="https://demo.activeitzone.com/ecommerce/search">All Categories</a>
                       </li>
                       <li class="text-dark fw-600 breadcrumb-item">
                          <a class="text-reset" href="https://demo.activeitzone.com/ecommerce/category/Computer-Accessories">"Computer &amp; Accessories"</a>
                       </li>
                    </ul>
                    <div class="text-left">
                      <Browse />
                    </div>
                    <input type="hidden" name="min_price" value=""/>
                    <input type="hidden" name="max_price" value=""/>
                    <div class="row gutters-5 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-4 row-cols-md-3 row-cols-2">
                       <div class="col mb-3">
                          <div class="aiz-card-box h-100 border border-light rounded shadow-sm hov-shadow-md has-transition bg-white">
                             <div class="position-relative">
                                <a href="https://demo.activeitzone.com/ecommerce/product/lenovo-chromebook-s330-laptop-14-inch-fhd-1920-x-1080-display-mediatek-mt8173c-processor-4gb-lpddr3-64gb-emmc-chrome-os-81jw0000us-business-black-frnlw" class="d-block">
                                <img class="img-fit mx-auto h-160px h-md-220px h-xl-270px h-xxl-250px ls-is-cached lazyloaded" src="https://demo.activeitzone.com/ecommerce/public/uploads/all/akCyY3zW6eG9zFwENmWlUgdWYMDxnWs7oJM3LJxQ.jpeg" data-src="https://demo.activeitzone.com/ecommerce/public/uploads/all/akCyY3zW6eG9zFwENmWlUgdWYMDxnWs7oJM3LJxQ.jpeg" alt="Lenovo Chromebook S330 Laptop, 14-Inch FHD (1920 x 1080) Display, MediaTek MT8173C Processor, 4GB LPDDR3, 64GB eMMC, Chrome OS, 81JW0000US, Business Black" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';"/>
                                </a>
                                <div class="absolute-top-right aiz-p-hov-icon">
                                   <a href="javascript:void(0)" onclick="addToWishList(191)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                                   <i class="la la-heart-o"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="addToCompare(191)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                                   <i class="las la-sync"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="showAddToCartModal(191)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                                   <i class="las la-shopping-cart"></i>
                                   </a>
                                </div>
                             </div>
                             <div class="p-md-3 p-2 text-left">
                                <div class="fs-15">
                                   <span class="fw-700 text-primary">$279.00</span>
                                </div>
                                <div class="rating rating-sm mt-1">
                                   <i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i>
                                </div>
                                <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                   <a href="https://demo.activeitzone.com/ecommerce/product/lenovo-chromebook-s330-laptop-14-inch-fhd-1920-x-1080-display-mediatek-mt8173c-processor-4gb-lpddr3-64gb-emmc-chrome-os-81jw0000us-business-black-frnlw" class="d-block text-reset">Lenovo Chromebook S330 Laptop, 14-Inch FHD (1920 x 1080) Display, MediaTek MT8173C Processor, 4GB LPDDR3, 64GB eMMC, Chrome OS, 81JW0000US, Business Black</a>
                                </h3>
                                <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                                   Club Point:
                                   <span class="fw-700 float-right">0</span>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div class="col mb-3">
                          <div class="aiz-card-box h-100 border border-light rounded shadow-sm hov-shadow-md has-transition bg-white">
                             <div class="position-relative">
                                <a href="https://demo.activeitzone.com/ecommerce/product/hp-gaming-laptop-156-intel-core-i7-9750h-nvidia-gtx-1660ti-6gb-16gb-ram-256gb-ssd-omen-headset-and-mouse-included-100-value-15-dc1088wm-yigds" class="d-block">
                                <img class="img-fit mx-auto h-160px h-md-220px h-xl-270px h-xxl-250px lazyloaded" src="https://demo.activeitzone.com/ecommerce/public/uploads/all/5UFFrfwumqZWjFjw9mKVKfeU1D7eYdH9RPNDKzew.jpeg" data-src="https://demo.activeitzone.com/ecommerce/public/uploads/all/5UFFrfwumqZWjFjw9mKVKfeU1D7eYdH9RPNDKzew.jpeg" alt="HP Gaming Laptop 15.6&quot;, Intel Core i7-9750H, NVIDIA GTX 1660Ti 6GB, 16GB RAM, 256GB SSD, Omen Headset and Mouse Included ($100 Value), 15-dc1088wm" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';"/>
                                </a>
                                <div class="absolute-top-right aiz-p-hov-icon">
                                   <a href="javascript:void(0)" onclick="addToWishList(174)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                                   <i class="la la-heart-o"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="addToCompare(174)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                                   <i class="las la-sync"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="showAddToCartModal(174)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                                   <i class="las la-shopping-cart"></i>
                                   </a>
                                </div>
                             </div>
                             <div class="p-md-3 p-2 text-left">
                                <div class="fs-15">
                                   <span class="fw-700 text-primary">$1,400.00</span>
                                </div>
                                <div class="rating rating-sm mt-1">
                                   <i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i>
                                </div>
                                <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                   <a href="https://demo.activeitzone.com/ecommerce/product/hp-gaming-laptop-156-intel-core-i7-9750h-nvidia-gtx-1660ti-6gb-16gb-ram-256gb-ssd-omen-headset-and-mouse-included-100-value-15-dc1088wm-yigds" class="d-block text-reset">HP Gaming Laptop 15.6", Intel Core i7-9750H, NVIDIA GTX 1660Ti 6GB, 16GB RAM, 256GB SSD, Omen Headset and Mouse Included ($100 Value), 15-dc1088wm</a>
                                </h3>
                                <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                                   Club Point:
                                   <span class="fw-700 float-right">1400</span>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div class="col mb-3">
                          <div class="aiz-card-box h-100 border border-light rounded shadow-sm hov-shadow-md has-transition bg-white">
                             <div class="position-relative">
                                <a href="https://demo.activeitzone.com/ecommerce/product/hp-eliteone-1000-g1-34-curved-core-i7-16gb-1tb-all-in-one-business-pc-6v0hp" class="d-block">
                                <img class="img-fit mx-auto h-160px h-md-220px h-xl-270px h-xxl-250px lazyloaded" src="https://demo.activeitzone.com/ecommerce/public/uploads/all/XU1Fj5vIH3Eu3kSZ6j2sXyop5uRldRcO4g1wceO0.jpeg" data-src="https://demo.activeitzone.com/ecommerce/public/uploads/all/XU1Fj5vIH3Eu3kSZ6j2sXyop5uRldRcO4g1wceO0.jpeg" alt="HP EliteOne 1000 G1 34&quot; Curved Core i7 16GB 1TB All-in-One Business PC" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';"/>
                                </a>
                                <div class="absolute-top-right aiz-p-hov-icon">
                                   <a href="javascript:void(0)" onclick="addToWishList(173)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                                   <i class="la la-heart-o"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="addToCompare(173)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                                   <i class="las la-sync"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="showAddToCartModal(173)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                                   <i class="las la-shopping-cart"></i>
                                   </a>
                                </div>
                             </div>
                             <div class="p-md-3 p-2 text-left">
                                <div class="fs-15">
                                   <span class="fw-700 text-primary">$1,500.00</span>
                                </div>
                                <div class="rating rating-sm mt-1">
                                   <i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i>
                                </div>
                                <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                   <a href="https://demo.activeitzone.com/ecommerce/product/hp-eliteone-1000-g1-34-curved-core-i7-16gb-1tb-all-in-one-business-pc-6v0hp" class="d-block text-reset">HP EliteOne 1000 G1 34" Curved Core i7 16GB 1TB All-in-One Business PC</a>
                                </h3>
                                <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                                   Club Point:
                                   <span class="fw-700 float-right">1500</span>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div class="col mb-3">
                          <div class="aiz-card-box h-100 border border-light rounded shadow-sm hov-shadow-md has-transition bg-white">
                             <div class="position-relative">
                                <a href="https://demo.activeitzone.com/ecommerce/product/hp-pavilion-gaming-desktop-bundle-with-total-defense-internet-security-wafar" class="d-block">
                                <img class="img-fit mx-auto h-160px h-md-220px h-xl-270px h-xxl-250px ls-is-cached lazyloaded" src="https://demo.activeitzone.com/ecommerce/public/uploads/all/6YEtYj9lWQrQ4teMeh9M8E0m9oetFXLRn6yrpMw5.jpeg" data-src="https://demo.activeitzone.com/ecommerce/public/uploads/all/6YEtYj9lWQrQ4teMeh9M8E0m9oetFXLRn6yrpMw5.jpeg" alt="HP Pavilion Gaming Desktop Bundle With Total Defense Internet Security" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';"/>
                                </a>
                                <div class="absolute-top-right aiz-p-hov-icon">
                                   <a href="javascript:void(0)" onclick="addToWishList(172)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                                   <i class="la la-heart-o"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="addToCompare(172)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                                   <i class="las la-sync"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="showAddToCartModal(172)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                                   <i class="las la-shopping-cart"></i>
                                   </a>
                                </div>
                             </div>
                             <div class="p-md-3 p-2 text-left">
                                <div class="fs-15">
                                   <span class="fw-700 text-primary">$1,200.00</span>
                                </div>
                                <div class="rating rating-sm mt-1">
                                   <i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i>
                                </div>
                                <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                   <a href="https://demo.activeitzone.com/ecommerce/product/hp-pavilion-gaming-desktop-bundle-with-total-defense-internet-security-wafar" class="d-block text-reset">HP Pavilion Gaming Desktop Bundle With Total Defense Internet Security</a>
                                </h3>
                                <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                                   Club Point:
                                   <span class="fw-700 float-right">1200</span>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div class="col mb-3">
                          <div class="aiz-card-box h-100 border border-light rounded shadow-sm hov-shadow-md has-transition bg-white">
                             <div class="position-relative">
                                <a href="https://demo.activeitzone.com/ecommerce/product/cyberpowerpc-gamer-supreme-liquid-cool-gaming-pc-amd-ryzen-7-3800x-39ghz-radeon-rx-5700-xt-8gb-16gb-ddr4-1tb-nvme-ssd-wifi--win-10-home-slc8260a3-q6lji" class="d-block">
                                <img class="img-fit mx-auto h-160px h-md-220px h-xl-270px h-xxl-250px ls-is-cached lazyloaded" src="https://demo.activeitzone.com/ecommerce/public/uploads/all/577b1dPTNncwOHhhNNFLWgVuRVhD6uzN4W5ZzA9H.jpeg" data-src="https://demo.activeitzone.com/ecommerce/public/uploads/all/577b1dPTNncwOHhhNNFLWgVuRVhD6uzN4W5ZzA9H.jpeg" alt="CyberpowerPC Gamer Supreme Liquid Cool Gaming PC, AMD Ryzen 7 3800X 3.9GHz, Radeon RX 5700 XT 8GB, 16GB DDR4, 1TB NVMe SSD, WiFi &amp; Win 10 Home (SLC8260A3)" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';"/>
                                </a>
                                <div class="absolute-top-right aiz-p-hov-icon">
                                   <a href="javascript:void(0)" onclick="addToWishList(160)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                                   <i class="la la-heart-o"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="addToCompare(160)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                                   <i class="las la-sync"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="showAddToCartModal(160)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                                   <i class="las la-shopping-cart"></i>
                                   </a>
                                </div>
                             </div>
                             <div class="p-md-3 p-2 text-left">
                                <div class="fs-15">
                                   <span class="fw-700 text-primary">$100.00</span>
                                </div>
                                <div class="rating rating-sm mt-1">
                                   <i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i>
                                </div>
                                <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                   <a href="https://demo.activeitzone.com/ecommerce/product/cyberpowerpc-gamer-supreme-liquid-cool-gaming-pc-amd-ryzen-7-3800x-39ghz-radeon-rx-5700-xt-8gb-16gb-ddr4-1tb-nvme-ssd-wifi--win-10-home-slc8260a3-q6lji" class="d-block text-reset">CyberpowerPC Gamer Supreme Liquid Cool Gaming PC, AMD Ryzen 7 3800X 3.9GHz, Radeon RX 5700 XT 8GB, 16GB DDR4, 1TB NVMe SSD, WiFi &amp; Win 10 Home (SLC8260A3)</a>
                                </h3>
                                <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                                   Club Point:
                                   <span class="fw-700 float-right">100</span>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div class="col mb-3">
                          <div class="aiz-card-box h-100 border border-light rounded shadow-sm hov-shadow-md has-transition bg-white">
                             <div class="position-relative">
                                <a href="https://demo.activeitzone.com/ecommerce/product/flagpower-gaming-keyboard-and-mouse-combo-rainbow-backlit-mechanical-feeling-keyboard-with-4-colors-breathing-led-backlight-mouse-for-pc-laptop-computer-game-and-work-0uh7n" class="d-block">
                                <img class="img-fit mx-auto h-160px h-md-220px h-xl-270px h-xxl-250px lazyloaded" src="https://demo.activeitzone.com/ecommerce/public/uploads/all/84lhgEEAMK1pVsbxQSHuLwYRvA8ZteW6M4IywR4y.jpeg" data-src="https://demo.activeitzone.com/ecommerce/public/uploads/all/84lhgEEAMK1pVsbxQSHuLwYRvA8ZteW6M4IywR4y.jpeg" alt="FLAGPOWER Gaming Keyboard and Mouse Combo, Rainbow Backlit Mechanical Feeling Keyboard with 4 Colors Breathing LED Backlight Mouse for PC Laptop Computer Game and Work" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';"/>
                                </a>
                                <div class="absolute-top-right aiz-p-hov-icon">
                                   <a href="javascript:void(0)" onclick="addToWishList(159)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                                   <i class="la la-heart-o"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="addToCompare(159)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                                   <i class="las la-sync"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="showAddToCartModal(159)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                                   <i class="las la-shopping-cart"></i>
                                   </a>
                                </div>
                             </div>
                             <div class="p-md-3 p-2 text-left">
                                <div class="fs-15">
                                   <span class="fw-700 text-primary">$80.00</span>
                                </div>
                                <div class="rating rating-sm mt-1">
                                   <i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i>
                                </div>
                                <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                   <a href="https://demo.activeitzone.com/ecommerce/product/flagpower-gaming-keyboard-and-mouse-combo-rainbow-backlit-mechanical-feeling-keyboard-with-4-colors-breathing-led-backlight-mouse-for-pc-laptop-computer-game-and-work-0uh7n" class="d-block text-reset">FLAGPOWER Gaming Keyboard and Mouse Combo, Rainbow Backlit Mechanical Feeling Keyboard with 4 Colors Breathing LED Backlight Mouse for PC Laptop Computer Game and Work</a>
                                </h3>
                                <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                                   Club Point:
                                   <span class="fw-700 float-right">80</span>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div class="col mb-3">
                          <div class="aiz-card-box h-100 border border-light rounded shadow-sm hov-shadow-md has-transition bg-white">
                             <div class="position-relative">
                                <a href="https://demo.activeitzone.com/ecommerce/product/apple-m1-chip-with-8core-cpu-and-7core-gpu-256gb-storage-c4b3k" class="d-block">
                                <img class="img-fit mx-auto h-160px h-md-220px h-xl-270px h-xxl-250px lazyloaded" src="https://demo.activeitzone.com/ecommerce/public/uploads/all/cqZdIREIDMiDTdllI6vLSxrnB57AZAxl4L2guynQ.jpeg" data-src="https://demo.activeitzone.com/ecommerce/public/uploads/all/cqZdIREIDMiDTdllI6vLSxrnB57AZAxl4L2guynQ.jpeg" alt="Apple M1 Chip with 8‑Core CPU and 7‑Core GPU 256GB Storage" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';"/>
                                </a>
                                <div class="absolute-top-right aiz-p-hov-icon">
                                   <a href="javascript:void(0)" onclick="addToWishList(132)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                                   <i class="la la-heart-o"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="addToCompare(132)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                                   <i class="las la-sync"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="showAddToCartModal(132)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                                   <i class="las la-shopping-cart"></i>
                                   </a>
                                </div>
                             </div>
                             <div class="p-md-3 p-2 text-left">
                                <div class="fs-15">
                                   <span class="fw-700 text-primary">$1,250.00</span>
                                </div>
                                <div class="rating rating-sm mt-1">
                                   <i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i>
                                </div>
                                <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                   <a href="https://demo.activeitzone.com/ecommerce/product/apple-m1-chip-with-8core-cpu-and-7core-gpu-256gb-storage-c4b3k" class="d-block text-reset">Apple M1 Chip with 8‑Core CPU and 7‑Core GPU 256GB Storage</a>
                                </h3>
                                <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                                   Club Point:
                                   <span class="fw-700 float-right">1250</span>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div class="col mb-3">
                          <div class="aiz-card-box h-100 border border-light rounded shadow-sm hov-shadow-md has-transition bg-white">
                             <div class="position-relative">
                                <a href="https://demo.activeitzone.com/ecommerce/product/Pioneer-SP-PK52FS-Andrew-Jones-Home-Theater-Speaker-Package-gfAZ2" class="d-block">
                                <img class="img-fit mx-auto h-160px h-md-220px h-xl-270px h-xxl-250px lazyloaded" src="https://demo.activeitzone.com/ecommerce/public/uploads/products/thumbnail/hoZvLYuUJ0zmfqLcaVXLvBNhviTEUNUqIbYssHik.jpeg" data-src="https://demo.activeitzone.com/ecommerce/public/uploads/products/thumbnail/hoZvLYuUJ0zmfqLcaVXLvBNhviTEUNUqIbYssHik.jpeg" alt="Pioneer SP-PK52FS Andrew Jones Home Theater Speaker Package" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';"/>
                                </a>
                                <div class="absolute-top-right aiz-p-hov-icon">
                                   <a href="javascript:void(0)" onclick="addToWishList(108)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                                   <i class="la la-heart-o"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="addToCompare(108)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                                   <i class="las la-sync"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="showAddToCartModal(108)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                                   <i class="las la-shopping-cart"></i>
                                   </a>
                                </div>
                             </div>
                             <div class="p-md-3 p-2 text-left">
                                <div class="fs-15">
                                   <span class="fw-700 text-primary">$50.00</span>
                                </div>
                                <div class="rating rating-sm mt-1">
                                   <i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i>
                                </div>
                                <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                   <a href="https://demo.activeitzone.com/ecommerce/product/Pioneer-SP-PK52FS-Andrew-Jones-Home-Theater-Speaker-Package-gfAZ2" class="d-block text-reset">Pioneer SP-PK52FS Andrew Jones Home Theater Speaker Package</a>
                                </h3>
                                <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                                   Club Point:
                                   <span class="fw-700 float-right">50</span>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div class="col mb-3">
                          <div class="aiz-card-box h-100 border border-light rounded shadow-sm hov-shadow-md has-transition bg-white">
                             <div class="position-relative">
                                <a href="https://demo.activeitzone.com/ecommerce/product/Apple-MacBook-Air-13-inch-8GB-RAM-256GB-SSD-Storage---Space-Gray-Latest-Model-J7ftU" class="d-block">
                                <img class="img-fit mx-auto h-160px h-md-220px h-xl-270px h-xxl-250px lazyloaded" src="https://demo.activeitzone.com/ecommerce/public/uploads/products/thumbnail/ONTPOjIQsy2eU1RcjFeHn57lmhkpGTSEtOt3OxbW.jpeg" data-src="https://demo.activeitzone.com/ecommerce/public/uploads/products/thumbnail/ONTPOjIQsy2eU1RcjFeHn57lmhkpGTSEtOt3OxbW.jpeg" alt="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';"/>
                                </a>
                                <div class="absolute-top-right aiz-p-hov-icon">
                                   <a href="javascript:void(0)" onclick="addToWishList(107)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                                   <i class="la la-heart-o"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="addToCompare(107)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                                   <i class="las la-sync"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="showAddToCartModal(107)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                                   <i class="las la-shopping-cart"></i>
                                   </a>
                                </div>
                             </div>
                             <div class="p-md-3 p-2 text-left">
                                <div class="fs-15">
                                   <span class="fw-700 text-primary">$2,000.00</span>
                                </div>
                                <div class="rating rating-sm mt-1">
                                   <i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i>
                                </div>
                                <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                   <a href="https://demo.activeitzone.com/ecommerce/product/Apple-MacBook-Air-13-inch-8GB-RAM-256GB-SSD-Storage---Space-Gray-Latest-Model-J7ftU" class="d-block text-reset">Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)</a>
                                </h3>
                                <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                                   Club Point:
                                   <span class="fw-700 float-right">2000</span>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div class="col mb-3">
                          <div class="aiz-card-box h-100 border border-light rounded shadow-sm hov-shadow-md has-transition bg-white">
                             <div class="position-relative">
                                <a href="https://demo.activeitzone.com/ecommerce/product/Corsair-Dominator-Platinum-16GB-DDR4-3200MHz-oDwTm" class="d-block">
                                <img class="img-fit mx-auto h-160px h-md-220px h-xl-270px h-xxl-250px ls-is-cached lazyloaded" src="https://demo.activeitzone.com/ecommerce/public/uploads/products/thumbnail/bC3lrPgQ0fL2PErfQI5nFSTYO3KPocndYEYLg7ib.jpeg" data-src="https://demo.activeitzone.com/ecommerce/public/uploads/products/thumbnail/bC3lrPgQ0fL2PErfQI5nFSTYO3KPocndYEYLg7ib.jpeg" alt="Corsair Dominator Platinum 16GB DDR4 3200MHz" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';"/>
                                </a>
                                <div class="absolute-top-right aiz-p-hov-icon">
                                   <a href="javascript:void(0)" onclick="addToWishList(64)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                                   <i class="la la-heart-o"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="addToCompare(64)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                                   <i class="las la-sync"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="showAddToCartModal(64)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                                   <i class="las la-shopping-cart"></i>
                                   </a>
                                </div>
                             </div>
                             <div class="p-md-3 p-2 text-left">
                                <div class="fs-15">
                                   <span class="fw-700 text-primary">$205.00</span>
                                </div>
                                <div class="rating rating-sm mt-1">
                                   <i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i>
                                </div>
                                <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                   <a href="https://demo.activeitzone.com/ecommerce/product/Corsair-Dominator-Platinum-16GB-DDR4-3200MHz-oDwTm" class="d-block text-reset">Corsair Dominator Platinum 16GB DDR4 3200MHz</a>
                                </h3>
                                <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                                   Club Point:
                                   <span class="fw-700 float-right">200</span>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div class="col mb-3">
                          <div class="aiz-card-box h-100 border border-light rounded shadow-sm hov-shadow-md has-transition bg-white">
                             <div class="position-relative">
                                <a href="https://demo.activeitzone.com/ecommerce/product/Corsair-Value-Select-8GB-DDR4-2133-BUS-Desktop-RAM-CMV8GX4M1A2133C15-RnUJC" class="d-block">
                                <img class="img-fit mx-auto h-160px h-md-220px h-xl-270px h-xxl-250px ls-is-cached lazyloaded" src="https://demo.activeitzone.com/ecommerce/public/uploads/products/thumbnail/a1t4kdn8dMfAnvXuOVd56D1g5MsyPbax9q2hWFaU.jpeg" data-src="https://demo.activeitzone.com/ecommerce/public/uploads/products/thumbnail/a1t4kdn8dMfAnvXuOVd56D1g5MsyPbax9q2hWFaU.jpeg" alt="Corsair Value Select 8GB DDR4 2133 BUS Desktop RAM #CMV8GX4M1A2133C15" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';"/>
                                </a>
                                <div class="absolute-top-right aiz-p-hov-icon">
                                   <a href="javascript:void(0)" onclick="addToWishList(63)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                                   <i class="la la-heart-o"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="addToCompare(63)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                                   <i class="las la-sync"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="showAddToCartModal(63)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                                   <i class="las la-shopping-cart"></i>
                                   </a>
                                </div>
                             </div>
                             <div class="p-md-3 p-2 text-left">
                                <div class="fs-15">
                                   <span class="fw-700 text-primary">$205.00</span>
                                </div>
                                <div class="rating rating-sm mt-1">
                                   <i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i>
                                </div>
                                <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                   <a href="https://demo.activeitzone.com/ecommerce/product/Corsair-Value-Select-8GB-DDR4-2133-BUS-Desktop-RAM-CMV8GX4M1A2133C15-RnUJC" class="d-block text-reset">Corsair Value Select 8GB DDR4 2133 BUS Desktop RAM #CMV8GX4M1A2133C15</a>
                                </h3>
                                <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                                   Club Point:
                                   <span class="fw-700 float-right">200</span>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div class="col mb-3">
                          <div class="aiz-card-box h-100 border border-light rounded shadow-sm hov-shadow-md has-transition bg-white">
                             <div class="position-relative">
                                <a href="https://demo.activeitzone.com/ecommerce/product/Corsair-Vengence-LPX-4GB-DDR4-2400MHz-Black-Heatsink-Desktop-RAM-NNbi9" class="d-block">
                                <img class="img-fit mx-auto h-160px h-md-220px h-xl-270px h-xxl-250px ls-is-cached lazyloaded" src="https://demo.activeitzone.com/ecommerce/public/uploads/products/thumbnail/x2rBi1hITIGY2P5UavWz6FXvCJ9mE9KHQJXUWHuz.jpeg" data-src="https://demo.activeitzone.com/ecommerce/public/uploads/products/thumbnail/x2rBi1hITIGY2P5UavWz6FXvCJ9mE9KHQJXUWHuz.jpeg" alt="Corsair Vengence LPX 4GB DDR4 2400MHz Black Heatsink Desktop RAM" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';"/>
                                </a>
                                <div class="absolute-top-right aiz-p-hov-icon">
                                   <a href="javascript:void(0)" onclick="addToWishList(62)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                                   <i class="la la-heart-o"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="addToCompare(62)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                                   <i class="las la-sync"></i>
                                   </a>
                                   <a href="javascript:void(0)" onclick="showAddToCartModal(62)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                                   <i class="las la-shopping-cart"></i>
                                   </a>
                                </div>
                             </div>
                             <div class="p-md-3 p-2 text-left">
                                <div class="fs-15">
                                   <span class="fw-700 text-primary">$305.00</span>
                                </div>
                                <div class="rating rating-sm mt-1">
                                   <i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i>
                                </div>
                                <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                   <a href="https://demo.activeitzone.com/ecommerce/product/Corsair-Vengence-LPX-4GB-DDR4-2400MHz-Black-Heatsink-Desktop-RAM-NNbi9" class="d-block text-reset">Corsair Vengence LPX 4GB DDR4 2400MHz Black Heatsink Desktop RAM</a>
                                </h3>
                                <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                                   Club Point:
                                   <span class="fw-700 float-right">300</span>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <Pagination />
                 </div>
              </div>
           </form>
        </div>
     </section>
    )
}

export default SearchFilters
