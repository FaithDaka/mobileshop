import React from 'react'
import Product from '../../components/Product'

const UkUsed = ({ products }) => {
    const UkUsed = products.filter(product => product.condition === 'Uk Used')
    return (
        <>
            {
                UkUsed ?
                    <div className="row gutters-5 row-cols-xxl-5 row-cols-lg-5 row-cols-md-3 row-cols-2">
                        {products.filter(product =>
                            product.condition === 'Uk Used').map(filteredProducts => (
                                <Product product={filteredProducts} />
                            ))}
                    </div> :
                    <p>No Uk Used phones yet</p>
            }
        </>

    )
}

export default UkUsed
