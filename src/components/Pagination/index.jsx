// import React,{useState} from 'react'

// const Pagination = ( ) => {

//     // const[products, setProducts] = useState([]);
//     const[currentpage, setPage] =useState(1);
//     const prods_per_page=10

//         // Logic for displaying page numbers
//         const pageNumbers = [];
//         for (let i = 1; i <= Math.ceil(products.length / prods_per_page); i++) {
//           pageNumbers.push(i);
//         }

//         const renderPageNumbers = pageNumbers.map(number => {
//             return (
//               <li
//                 key={number}
//                 id={number}
//                 onClick={handleClick}
//               >
//                 {number}
//               </li>
//             );
//           });
    

//          const  handleClick =e =>{
//             setPage({
//               currentpage: Number(e.target.id)
//             });
//           }

//           const indexOfLastTodo = currentpage * prods_per_page;
//           const indexOfFirstTodo = indexOfLastTodo - prods_per_page;
//           const currentProd = products.slice(indexOfFirstTodo, indexOfLastTodo);
//           const renderProducts = currentProd.map((product, index) => {
//             return <li key={index}>{product}</li>;
//           });





//     return (
//         <div class="aiz-pagination aiz-pagination-center mt-4">
//             <div>
//                 {renderProducts}
//             </div>
//             <nav>
//                 <ul class="pagination">
//                     <li class="page-item disabled" aria-disabled="true" aria-label="« Previous">
//                         <span class="page-link" aria-hidden="true">‹</span>
//                     </li>
//                     {/* <li class="page-item active" aria-current="page"><a class="page-link">1</a></li>
//                     <li class="page-item"><a class="page-link" href="#">2</a></li> */}
//                     <li>
//                         {renderPageNumbers}
//                     </li>
//                     <li class="page-item">
//                         <a class="page-link" href="#" rel="next" aria-label="Next »">›</a>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     )
// }

// export default Pagination
