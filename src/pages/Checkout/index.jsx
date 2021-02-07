import React from 'react'
import Shipping from './Shipping'
import CartHeader from '../Cart/CartHeader'
import Payment from './Payment'

const Checkout = () => {
    return (
        <div>
            <CartHeader />
            <Shipping />
            <Payment />
            
        </div>
    )
}

export default Checkout
