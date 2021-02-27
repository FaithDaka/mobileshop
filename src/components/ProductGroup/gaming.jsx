import React from 'react'
import Product from '../../components/Product'

const gaming = ({ products }) => {
    const gaming = products.filter(product => product.condition === 'Gaming')
    return (
        <>
            {
                gaming ?
                    <div className="row gutters-5 row-cols-xxl-5 row-cols-lg-5 row-cols-md-3 row-cols-2">
                        {gaming.map(filteredProducts => (
                            <Product product={filteredProducts} />
                        ))}
                    </div> :
                    <p>No gaming products yet</p>
            }
        </>


    )
}

export default gaming
