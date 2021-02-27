import React from 'react'
import Product from '../../components/Product'

const BrandNew = ({ products }) => {
    const BrandNew = products.filter(product => product.condition === 'Brand New')
    return (
        <>
            {
                BrandNew ?
                    <div className="row gutters-5 row-cols-xxl-5 row-cols-lg-5 row-cols-md-3 row-cols-2">
                        {BrandNew.map(filteredProducts => (
                            <Product product={filteredProducts} />
                        ))}
                    </div> :
                    <p>No BrandNew phones yet</p>
            }
        </>


    )
}

export default BrandNew
