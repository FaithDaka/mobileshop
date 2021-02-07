import React from 'react'

const Shipping = () => {
    return (
        <section class="mb-4 gry-bg">
            <div class="container">
                <div class="row cols-xs-space cols-sm-space cols-md-space">
                    <div class="col-xxl-8 col-xl-10 mx-auto">
                        <form class="form-default">
                            <input type="hidden" name="_token" value="OpAbyZmCUSFw4CJwyQRdxM2RSjQrIaGxIH5THfFN" />                                                    <div class="shadow-sm bg-white p-4 rounded mb-4">
                                <div class="form-group">
                                    <label class="control-label">Name</label>
                                    <input type="text" class="form-control" name="name" placeholder="Name" required="" />
                                </div>

                                <div class="form-group">
                                    <label class="control-label">Email</label>
                                    <input type="text" class="form-control" name="email" placeholder="Email" required="" />
                                </div>

                                <div class="form-group">
                                    <label class="control-label">Delivery Address</label>
                                    <input type="text" class="form-control" name="address" placeholder="Address" required="" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shipping
