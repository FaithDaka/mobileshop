import React from 'react';
import RelatedAccessories from './RelatedAccessories';
import RelatedProducts from './RelatedProducts';
import Specs from './Specs';
import TvSpecs from './TVSpecs';

const ProductSpecs = ({product, related, loading}) => {
  const relate = related.filter((prod) => prod.subs.name === product.subs.name);

  return(
  <section className="mb-4">
    <div className="container">
      <div className="row gutters-10">
        {/* <div className="col-xl-3 order-1 order-xl-0">
          <RelatedAccessories product={product} />
        </div> */}
        <div className="col-xl-9 order-0 order-xl-1">
            {product.condition === 'Brand New' && product.category.name !== 'Televisions' && <Specs product={product} />}
            {product.condition === 'Uk Used' && product.category.name !== 'Televisions'&& <Specs product={product} /> }
            {product.category && product.category.name !== 'MobilePhones' && <TvSpecs product={product} /> }
          <RelatedProducts related={relate} laoding={loading} />
        </div>
      </div>
    </div>
  </section>
)};

export default ProductSpecs;
