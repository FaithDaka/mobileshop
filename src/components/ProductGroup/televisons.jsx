import React from 'react'
import Product from '../../components/Product'

const Televisions = ({ products }) => {
    const tv = products.filter(product => product.condition === 'Televisons')
    return (
        <>
            {
                tv ?
                    <div className="row gutters-5 row-cols-xxl-5 row-cols-lg-5 row-cols-md-3 row-cols-2">
                        {tv.map(filteredProducts => (
                            <Product product={filteredProducts} />
                        ))}
                    </div> :
                    <p>No Televisions yet</p>
            }
        </>


    )
}

export default Televisions