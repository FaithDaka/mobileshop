import React from 'react'
import { Link } from 'react-router-dom';

function Shipping() {
    return (

        <section className="mb-4">
      <div className="container">
        <div class="bg-white shadow-sm rounded">
          <div className="col-xl-9 order-0 order-xl-1">
          <div className="bg-white mb-3 shadow-sm rounded">
      <div className="nav border-bottom aiz-nav-tabs">
        <a href="#tab_default_1" data-toggle="tab" className="p-3 fs-16 fw-600 text-reset show active"><strong>Shipping & Delivery</strong></a>
      </div>
            <div className="tab-content pt-0">
        <div className="tab-pane fade active show">
          <div className="">
            <div className="mw-100 overflow-hidden">
              <p><br /></p>
              <table className="table table-borderless" style={{ width: '100%' }}>
                <tbody>
                  <tr>
                    <td style={{whiteSpace:"nowrap"}}>Door Delivery<br></br>
                    <img src ="https://image.shutterstock.com/image-vector/shipping-fast-delivery-man-riding-260nw-1202545720.jpg" width='50' height='50' /> </td>
                    
                    <td>
                    Kampala and Surbubs delivery fee is UGX 5000.Normally takes about 15-30mins within  kampala from time of order. Up-country deliveries normally take between 12-24hrs via Bus Couriers
                     
                    </td>
                  </tr>
                  <tr>
                    <td style={{whiteSpace:"nowrap"}}>Pickup Station<br></br>
                    <i class="bi bi-geo-fill text-center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-geo-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
                    </svg></i></td>
                      <td>
                        Kampala rd, opposite Bank of Uganda , at Church House, 1st Floor room 001
                    </td>
                  </tr>
                  <tr>
                    <td style={{whiteSpace:"nowrap"}}>Return Policy</td>
                    <td>
                    Returns should be made to mainstore , within 48hrs and are covered with money Back guarantee
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

export default Shipping
