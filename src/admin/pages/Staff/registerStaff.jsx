import React from 'react'

const registerStaff = () => {
    return (
        <section class="gry-bg py-4">
            <div class="profile">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-8 mx-auto">
                            <div class="card">
                                <div class="text-center pt-4">
                                    <h1 class="h4 fw-600">
                                        Create an admin account.
                                </h1>
                                </div>
                                <div class="px-4 py-3 py-lg-4">

                                    <form id="reg-form" class="form-default">
                                    <div class="form-group">
                                            <input type="password" class="form-control" placeholder="First Name" name="password" aria-autocomplete="list" />
                                        </div>

                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Last Name" name="password" aria-autocomplete="list" />
                                        </div>

                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="username" name="password" aria-autocomplete="list" />
                                        </div>

                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="password" name="password" aria-autocomplete="list" />
                                        </div>

                                        <div class="mb-5">
                                            <button type="submit" class="btn btn-primary btn-block fw-600">Create Account</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default registerStaff
