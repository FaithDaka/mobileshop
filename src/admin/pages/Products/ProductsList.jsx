import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import LoadSpinner from '../../../components/Spinner';
import { getProducts, removeProduct } from "../../../functions/products";

const ProductsList = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadAllProducts = () => {
    setLoading(true);
    getProducts()
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleRemove = (slug) => {
    if (window.confirm("Delete?")) {
      removeProduct(slug)
        .then((res) => {
          loadAllProducts();
          toast.error(`${res.data.title} is deleted`);
        })
        .catch((err) => {
          if (err.response.status === 400) toast.error(err.response.data);
          console.log(err);
        });
    }
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

    return (
        <>
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h1 class="h3">All Products</h1>
                </div>
                <div class="col-md-6 text-md-right">
                    <Link to="/admin/addproduct" class="btn btn-primary">
                        <span>Add New Product</span>
                    </Link>
                </div>
            </div>

            <div class="card">
            {loading && <LoadSpinner />}
                <div class="card-header">
                    <h5 class="mb-0 h6">Products</h5>
                    <div class="pull-right clearfix">
                        <form class="" id="sort_categories" action="" method="GET">
                            <div class="box-inline pad-rgt pull-left">
                                <div class="" style={{minWidth: '200px'}}>
                                    <input type="text" class="form-control" id="search" name="search" placeholder="Type name &amp; Enter" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="card-body">
                <div class="row">
                    <div class="col-lg-12 table-responsive">
                    <table class="table aiz-table mb-0 footable footable-1 breakpoint-lg">
                        <thead>
                            <tr class="footable-header">
                                <th style={{ display: 'table-cell' }}>Name</th>
                                <th style={{ display: 'table-cell' }}>Category</th>
                                <th sstyle={{ display: 'table-cell' }}>Brand</th>
                                <th style={{ display: 'table-cell' }}>Price</th>
                                <th style={{ display: 'table-cell' }}>Type</th>
                                <th width="10%" class="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                        {products.map((product) => (
                            <tr>
                                <td style={{ display: 'table-cell' }}>{product.title}</td>
                                <td style={{ display: 'table-cell' }}>{product.category && product.category.name}</td>
                                <td style={{ display: 'table-cell' }}>{product.sub && product.subs.name}</td>
                                <td style={{ display: 'table-cell' }}>{product.price}</td>
                                <td style={{ display: 'table-cell' }}>{product.condition}</td>
                                <td class="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                    <Link class="btn btn-soft-primary btn-icon btn-circle btn-sm" to={`/admin/update/${product._id}`} title="Edit">
                                        <i class="las la-edit"></i>
                                    </Link>
                                    <span class="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" onClick={() => handleRemove(product.slug)}title="Delete">
                                        <i class="las la-trash"></i>
                                    </span>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                    </div>
                    <div class="aiz-pagination">
                        <nav>
                            <ul class="pagination">
                                <li class="page-item disabled" aria-disabled="true" aria-label="« Previous">
                                    <span class="page-link" aria-hidden="true">‹</span>
                                </li>
                                <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="" rel="next" aria-label="Next »">›</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductsList
