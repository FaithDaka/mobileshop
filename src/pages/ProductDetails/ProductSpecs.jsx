import React from 'react';
import RelatedProducts from './RelatedProducts';
import Specs from './Specs';
import TvSpecs from './TVSpecs';

const ProductSpecs = ({ product, related }) => {
  const relate = related.filter((prod) => prod.subs.name === product.subs.name);
  return (
    <section className="mb-4">
      <div className="container">
        <div class="bg-white shadow-sm rounded p-3">
          <div className="col-xl-9 order-0 order-xl-1">
            {product.condition === 'Brand New' && <Specs product={product} />}
            {product.condition === 'Uk Used' && <Specs product={product} />}
            {product.condition !== 'Uk Used' && product.condition !== 'Brand New ' && <TvSpecs product={product} />}

          </div>
        </div>
        <div class="bg-white shadow-sm rounded p-3" style={{ marginTop: "4%" }}>
          <RelatedProducts related={relate} />
        </div>
      </div>
    </section>
  )
};

export default ProductSpecs;
