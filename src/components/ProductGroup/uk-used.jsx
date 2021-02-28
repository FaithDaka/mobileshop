import React, { useState } from 'react'
import Product from '../../components/Product'
import LoadSpinner from '../../components/Spinner'

const UkUsed = ({products, loading, total}) => {
  const [pageNumber, setPageNumber] = useState(1);

  const pages = new Array(total).fill(null).map((v, i) => i);

  const goToPrevious = () => setPageNumber(Math.max(0, pageNumber - 1))
  const goToNext = () => setPageNumber(Math.min(total - 1, pageNumber + 1))

    return (
        <div>
        {loading && <LoadSpinner />}
        {
          products && products.length > 0 ?
            <div className="row gutters-5 row-cols-xxl-5 row-cols-lg-5 row-cols-md-3 row-cols-2">
              {products.map(product => (
                <Product product={product} />
              ))}
            </div> :
            <p>No Uk used phones at the moment</p>
        }
  
        <button onClick={goToPrevious}>Previous</button>
        {pages.map((pageIndex) => (
          <button key={pageIndex} onClick={() => setPageNumber(pageIndex)}>{pageIndex + 1}</button>
        ))}
        <button onClick={goToNext}>Next</button>
        <h3>Page of {pageNumber + 1}</h3>
      </div>

    )
}

export default UkUsed
