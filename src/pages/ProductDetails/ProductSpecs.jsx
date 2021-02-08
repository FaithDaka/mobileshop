import React from 'react';
import RelatedAccessories from './RelatedAccessories';
import RelatedProducts from './RelatedProducts';
import Specs from './Specs';

const ProductSpecs = ({product, related}) => (
  <section className="mb-4">
    <div className="container">
      <div className="row gutters-10">
        <div className="col-xl-3 order-1 order-xl-0">
          <RelatedAccessories product={product} />
        </div>
        <div className="col-xl-9 order-0 order-xl-1">
          <Specs product={product} />
          <RelatedProducts related={related} />
        </div>
      </div>
    </div>
  </section>
);

export default ProductSpecs;
