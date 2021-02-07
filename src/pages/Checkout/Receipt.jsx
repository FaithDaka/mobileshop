import React from 'react'

const Receipt = () => {
    return (
        <section class="py-4">
            <div class="container text-left">
                <div class="row">
                    <div class="col-xl-8 mx-auto">
                        <div class="card shadow-sm border-0 rounded">
                            <div class="card-body">
                                <div class="text-center py-4 mb-4">
                                    <i class="la la-check-circle la-3x text-success mb-3"></i>
                                    <h1 class="h3 mb-3 fw-600">Thank You for Your Order!</h1>
                                    <h2 class="h5">Order Code: <span class="fw-700 text-primary">20210205-11125911</span></h2>
                                    <p class="opacity-70 font-italic">A copy or your order summary has been sent to guest@gmail.com</p>
                                </div>
                                <div class="mb-4">
                                    <h5 class="fw-600 mb-3 fs-17 pb-2">Order Summary</h5>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <table class="table">
                                                <tbody><tr>
                                                    <td class="w-50 fw-600">Order Code:</td>
                                                    <td>20210205-11125911</td>
                                                </tr>
                                                    <tr>
                                                        <td class="w-50 fw-600">Name:</td>
                                                        <td>Frank Mwesigwa</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="w-50 fw-600">Email:</td>
                                                        <td>frank@gmail.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="w-50 fw-600">Shipping address:</td>
                                                        <td>Bukasa Road, Kampala, Uganda</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                        <div class="col-md-6">
                                            <table class="table">
                                                <tbody><tr>
                                                    <td class="w-50 fw-600">Order date:</td>
                                                    <td>05-02-2021 11:12 AM</td>
                                                </tr>
                                                    <tr>
                                                        <td class="w-50 fw-600">Order status:</td>
                                                        <td>Pending</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="w-50 fw-600">Total order amount:</td>
                                                        <td>UGX 1,500,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="w-50 fw-600">Shipping:</td>
                                                        <td>Flat shipping rate</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="w-50 fw-600">Payment Method:</td>
                                                        <td>Cash on delivery</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h5 class="fw-600 mb-3 fs-17 pb-2">Order Details</h5>
                                    <div>
                                        <table class="table table-responsive-md">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th width="30%">Product</th>
                                                    <th>Variation</th>
                                                    <th>Quantity</th>
                                                    <th>Delivery Type</th>
                                                    <th class="text-right">Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>
                                                        <a href="https://demo.activeitzone.com/ecommerce/product/oneplus-8t-128gb256gb-storage-no-card-slot-tqezb" target="_blank" class="text-reset">
                                                            OnePlus 8T (128GB/256GB storage, no card slot)
                                                            </a>
                                                    </td>
                                                    <td>
                                                        Aqua
                                                    </td>
                                                    <td>
                                                        1
                                                    </td>
                                                    <td>
                                                        Home Delivery
                                                                                                            </td>
                                                    <td class="text-right">$615.00</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>
                                                        <a href="https://demo.activeitzone.com/ecommerce/product/AirPods-Max-w3wnf" target="_blank" class="text-reset">
                                                            AirPods Max
                                                            </a>
                                                    </td>
                                                    <td>
                                                        LightPink
                                                    </td>
                                                    <td>
                                                        1
                                                    </td>
                                                    <td>
                                                        Home Delivery
                                                                                                            </td>
                                                    <td class="text-right">$660.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-5 col-md-6 ml-auto mr-0">
                                            <table class="table ">
                                                <tbody>
                                                    <tr>
                                                        <th>Subtotal</th>
                                                        <td class="text-right">
                                                            <span class="fw-600">$1,275.00</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Shipping</th>
                                                        <td class="text-right">
                                                            <span class="font-italic">$0.00</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Tax</th>
                                                        <td class="text-right">
                                                            <span class="font-italic">$0.00</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Coupon Discount</th>
                                                        <td class="text-right">
                                                            <span class="font-italic">$0.00</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th><span class="fw-600">Total</span></th>
                                                        <td class="text-right">
                                                            <strong><span>$1,275.00</span></strong>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Receipt
