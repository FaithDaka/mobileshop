import React from 'react'
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <section class="mb-4">
   <div class="container text-left">
      <div class="row">
         <div class="col-lg-8">
            <form class="form-default" role="form">                   
               <div class="card shadow-sm border-0 rounded"/>
                  <div class="card-header p-3">
                     <h3 class="fs-16 fw-600 mb-0">
                        Select a payment option
                     </h3>
                  </div>
                  <div class="card-body text-center">
                     <div class="row">
                        <div class="col-xxl-8 col-xl-10 mx-auto">
                           <div class="row gutters-10">
                              <div class="col-6 col-md-4">
                                 <label class="aiz-megabox d-block mb-3">
                                 <input value="flutterwave" class="online_payment" type="radio" name="payment_option" checked=""/>
                                 <span class="d-block p-3 aiz-megabox-elem">
                                 <img src="https://demo.activeitzone.com/ecommerce/public/assets/img/cards/flutterwave.png" class="img-fluid mb-2"/>
                                 <span class="d-block text-center">
                                 <span class="d-block fw-600 fs-15">Mobile Money</span>
                                 </span>
                                 </span>
                                 </label>
                              </div>
                              <div class="col-6 col-md-4">
                                 <label class="aiz-megabox d-block mb-3">
                                 <input value="cash_on_delivery" class="online_payment" type="radio" name="payment_option" checked=""/>
                                 <span class="d-block p-3 aiz-megabox-elem">
                                 <img src="https://demo.activeitzone.com/ecommerce/public/assets/img/cards/cod.png" class="img-fluid mb-2"/>
                                 <span class="d-block text-center">
                                 <span class="d-block fw-600 fs-15">Cash on Delivery</span>
                                 </span>
                                 </span>
                                 </label>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               
               
            </form>
         </div>
         <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="card border-0 shadow-sm rounded">
               <div class="card-header">
                  <h3 class="fs-16 fw-600 mb-0">Summary</h3>
                  <div class="text-right">
                     <span class="badge badge-inline badge-primary">2 Items</span>
                  </div>
               </div>
               <div class="card-body">
                  <div class="rounded px-2 mb-2 bg-soft-primary border-soft-primary border">
                     Total Club point:
                     <span class="fw-700 float-right">615</span>
                  </div>
                  <table class="table">
                     <thead>
                        <tr>
                           <th class="product-name">Product</th>
                           <th class="product-total text-right">Total</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr class="cart_item">
                           <td class="product-name">
                              OnePlus 8T (128GB/256GB storage, no card slot) - Aqua
                              <strong class="product-quantity">× 1</strong>
                           </td>
                           <td class="product-total text-right">
                              <span class="pl-4">$615.00</span>
                           </td>
                        </tr>
                        <tr class="cart_item">
                           <td class="product-name">
                              AirPods Max - LightPink
                              <strong class="product-quantity">× 1</strong>
                           </td>
                           <td class="product-total text-right">
                              <span class="pl-4">$660.00</span>
                           </td>
                        </tr>
                     </tbody>
                  </table>
                  <table class="table">
                     <tfoot>
                        <tr class="cart-subtotal">
                           <th>Subtotal</th>
                           <td class="text-right">
                              <span class="fw-600">$1,275.00</span>
                           </td>
                        </tr>
                        <tr class="cart-shipping">
                           <th>Tax</th>
                           <td class="text-right">
                              <span class="font-italic">$0.00</span>
                           </td>
                        </tr>
                        <tr class="cart-shipping">
                           <th>Total Shipping</th>
                           <td class="text-right">
                              <span class="font-italic">$0.00</span>
                           </td>
                        </tr>
                        <tr class="cart-total">
                           <th><span class="strong-600">Total</span></th>
                           <td class="text-right">
                              <strong><span>$1,275.00</span></strong>
                           </td>
                        </tr>
                     </tfoot>
                  </table>
               </div>
            </div>
         </div>
         <div class="pt-3">
                  <label class="aiz-checkbox">
                  <input type="checkbox" required="" id="agree_checkbox"/>
                  <span class="aiz-square-check"></span>
                  <span>I agree to the</span>
                  </label>
                  <a href="#">terms and conditions</a>,
                  <a href="#">Return Policy</a> &amp;
                  <a href="#">Privacy Policy</a>
               </div>
               <div class="row align-items-center pt-3">
                  <div class="col-6">
                     <Link to="/" class="link link--style-3">
                     <i class="las la-arrow-left"></i>
                     Return to shop
                     </Link>
                  </div>
                  
                  <div class="col-6 text-right">
                  <Link to="/receipt">
                     <button type="button" class="btn btn-primary fw-600">Complete Order</button>
                     </Link>
                  </div>
                 
               </div>
      </div>
   </div>
</section>
    )
}

export default Payment
