/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import Product from '../../components/Product'
import LoadSpinner from '../../components/Spinner'

const UkUsed = ({ products, loading, total, pageNumber, count, totalused,firstProduct, currentProducts  }) => {

  const pages = new Array(total).fill(null).map((v, i) => i);

  const goToPrevious = () => {
    count(Math.max(0, pageNumber - 1))
    window.scrollTo(0, 0)
  }

  const goToNext = () => {
    count(Math.min(total - 1, pageNumber + 1))
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pageNumber]);

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

      <div class="aiz-pagination">
        <nav className="text-center">
          <span>Showing {firstProduct + 1} - {firstProduct + currentProducts.length}  of {totalused} results</span>
          <ul class="pagination d-flex justify-content-center">
            <li class="page-item disabled" aria-label="« Previous" onClick={goToPrevious}>
              <span class="page-link" aria-hidden="true">‹</span>
            </li>
            <li class="page-item d-flex">
              {pages.map((pageIndex) => (
                <a key={pageIndex} class="page-link" onClick={() => count(pageIndex)}>{pageIndex + 1}</a>
              ))}

            </li>
            <li class="page-item" onClick={goToNext}>
              <span class="page-link" aria-hidden="true">›</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>

  )
}

export default UkUsed
