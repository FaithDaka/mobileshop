import React from 'react'
import Product from '../../components/Product'

const Accessories = ({ products }) => {
    const accessories = products.filter(product => product.condition === 'Accessories')
    return (
        <>
            {
                accessories ?
                    <div className="row gutters-5 row-cols-xxl-5 row-cols-lg-5 row-cols-md-3 row-cols-2">
                        {accessories.map(filteredProducts => (
                            <Product product={filteredProducts} />
                        ))}
                    </div> :
                    <p>No accessories yet</p>

            }
        </>

    )
}

export default Accessories
