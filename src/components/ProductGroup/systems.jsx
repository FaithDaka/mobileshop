import React from 'react'
import Product from '../../components/Product'

const Systems = ({products}) => {
    const systems = products.filter(product => product.condition === 'Sound Systems')
    return (
        <>
            {
                systems ?
                    <div className="row gutters-5 row-cols-xxl-5 row-cols-lg-5 row-cols-md-3 row-cols-2">
                        {systems.map(filteredProducts => (
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

export default Systems
