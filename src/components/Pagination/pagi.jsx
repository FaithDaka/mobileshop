import React, { useEffect, useState } from "react";
import Pagination from '../../components/Pagination'
import Banner from './Banner'
import Promos from './Promos'
import ProductGroup from '../../components/ProductGroup'
import { getProducts, getProductsCount } from "../../functions/products";

 

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productsCount, setProductsCount] = useState(0);
  const [page, setPage] = useState(1);
  const[currentpage, setCurrentPage] =useState(1);
  const prods_per_page=10

      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(products.length / prods_per_page); i++) {
        pageNumbers.push(i);
      }

      const  handleClick =e =>{
        setPage({
          currentpage: Number(e.target.id)
        });
      }
      
      const renderPageNumbers = pageNumbers.map(number => {
          return (
            <li
              key={number}
              id={number}
              onClick={handleClick}
            >
              {number}
            </li>
          );
        });
  


        const indexOfLastTodo = currentpage * prods_per_page;
        const indexOfFirstTodo = indexOfLastTodo - prods_per_page;
        const currentProd = products.slice(indexOfFirstTodo, indexOfLastTodo);
        const renderProducts = currentProd.map((product, index) => {
          return <li key={index}>{product}</li>;
        });




  const loadAllProducts = () => {
    setLoading(true);
    getProducts("createdAt", "desc", page).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadAllProducts();
  }, [page]);

  useEffect(() => {
    getProductsCount().then((res) => setProductsCount(res.data));
  }, []);
  console.clear()
  console.log(products)

  return (
    <>
    <Banner />
           <div class="aiz-pagination aiz-pagination-center mt-4">
            <div>
             {
               currentProd.map((product, index) => {
                return <ProductGroup products={products} loading={loading} />
              })
             }
            </div>
            <nav>
                <ul class="pagination">
                    <li class="page-item disabled" aria-disabled="true" aria-label="« Previous">
                        <span class="page-link" aria-hidden="true">‹</span>
                    </li>
                    {/* <li class="page-item active" aria-current="page"><a class="page-link">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li> */}
                    <li>
                        {renderPageNumbers}
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#" rel="next" aria-label="Next »">›</a>
                    </li>
                </ul>
            </nav>
        </div>
      
      {/* <Pagination products={products} /> */}
      {/* <Promos /> */}
      <ProductGroup products={products} loading={loading} />
  
    </>
  )
}

export default HomePage
