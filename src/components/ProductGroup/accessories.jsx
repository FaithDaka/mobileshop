import React from 'react'
import Product from '../../components/Product'

const Accessories = ({products}) => {
    return (
        <div className="row gutters-5 row-cols-xxl-5 row-cols-lg-5 row-cols-md-3 row-cols-2">
            {products.filter(product =>
                product.condition === 'Accessories').map(filteredProducts => (
                    <Product product={filteredProducts} />
                ))}
        </div>
    )
}

export default Accessories
