import React from 'react'
import Product from '../../components/Product'

const Tablets = ({ products }) => {
    const tablets = products.filter(product => product.condition === 'Tablets')
    return (
        <>
            {
                tablets ?
                    <div className="row gutters-5 row-cols-xxl-5 row-cols-lg-5 row-cols-md-3 row-cols-2">
                        {tablets.map(filteredProducts => (
                            <Product product={filteredProducts} />
                        ))}
                    </div> :
                    <p>No tablets yet</p>
            }
        </>


    )
}

export default Tablets
