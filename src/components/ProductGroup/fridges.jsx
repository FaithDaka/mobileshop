import React from 'react'
import Product from '../../components/Product'

const Fridges = ({products}) => {
    const fridges = products.filter(product => product.condition === 'Fridges')
    return (
        <>
            {
                fridges ?
                    <div className="row gutters-5 row-cols-xxl-5 row-cols-lg-5 row-cols-md-3 row-cols-2">
                        {fridges.map(filteredProducts => (
                            <Product product={filteredProducts} />
                        ))}
                    </div> :
                    <div>
<p>No fridges yet</p>
                    </div>
                    
            }
        </>


    )
}

export default Fridges
