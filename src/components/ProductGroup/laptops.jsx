import React from 'react'
import Product from '../../components/Product'

const laptops = ({ products }) => {
    const laptops = products.filter(product => product.condition === 'Laptops')
    return (
        <>
            {
                laptops ?
                    <div className="row gutters-5 row-cols-xxl-5 row-cols-lg-5 row-cols-md-3 row-cols-2">
                        {laptops.map(filteredProducts => (
                            <Product product={filteredProducts} />
                        ))}
                    </div> :
                    <p>No laptops yet</p>
            }
        </>


    )
}

export default laptops
