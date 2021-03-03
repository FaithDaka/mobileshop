import React, { useEffect, useState } from 'react'
import moment from "moment";
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import CurrencyFormat from 'react-currency-format';
import LoadSpinner from '../../../components/Spinner';
import { getAccessories, removeAccessory } from "../../../functions/accessory";

const ListAccessories = () => {
    const [accessories, setAccessories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [total, setTotal] = useState(0);

    const pages = new Array(totalPages).fill(null).map((v, i) => i);
    const searchHandler = (e) => setSearchTerm(e.target.value);

    const goToPrevious = () => {
        setPageNumber(Math.max(0, pageNumber - 1))
        window.scrollTo(0, 0)
    }

    const goToNext = () => {
        setPageNumber(Math.min(totalPages - 1, pageNumber + 1))
        window.scrollTo(0, 0)
    }

    const loadAllProducts = () => {
        setLoading(true);
        getAccessories(pageNumber)
            .then((res) => {
                setAccessories(res.data.accessories);
                setTotalPages(res.data.totalPages)
                setTotal(res.data.total)
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    const handleRemove = (slug) => {
        if (window.confirm("Delete?")) {
            removeAccessory(slug)
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
        window.scrollTo(0, 0)
    }, [pageNumber]);

    return (
        <>
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h1 class="h3">All Accessories</h1>
                </div>
                <div class="col-md-6 text-md-right">
                    <Link to="/admin/addaccessory" class="btn btn-primary">
                        <span>Add New Accessory</span>
                    </Link>
                </div>
            </div>

            <div class="card">
                {loading && <LoadSpinner />}
                <div class="card-header">
                    <h5 class="mb-0 h6">Accessories</h5>
                    <div class="pull-right clearfix">
                        <form>
                            <div class="box-inline pad-rgt pull-left">
                                <div class="" style={{ minWidth: '200px' }}>
                                    <input type="text" class="form-control" name="searchTerm" placeholder="search accessories.." value={searchTerm} onChange={searchHandler}/>
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
                                        <th style={{ display: 'table-cell' }}>Brand</th>
                                        <th style={{ display: 'table-cell' }}>Color</th>
                                        <th sstyle={{ display: 'table-cell' }}>Date Created</th>
                                        <th style={{ display: 'table-cell' }}>Price</th>
                                        <th width="10%" class="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                     {accessories.map((product) => (
                                        <tr>
                                            <td style={{ display: 'table-cell' }}>{product.title}</td>
                                            <td style={{ display: 'table-cell' }}>{product.brand}</td>
                                            <td style={{ display: 'table-cell' }}>{product.color}</td>
                                            <td style={{ display: 'table-cell' }}>{product.createdAt})</td>
                                            <td style={{ display: 'table-cell' }}>
                                                <CurrencyFormat
                                                value={product.price}
                                                displayType="text"
                                                thousandSeparator
                                            /></td>
                                            <td class="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                <Link class="btn btn-soft-primary btn-icon btn-circle btn-sm" to={`/admin/updateaccessory/${product._id}`} title="Edit">
                                                    <i class="las la-edit"></i>
                                                </Link>
                                                <span class="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" onClick={() => handleRemove(product.slug)} title="Delete">
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
                        <nav className="text-center">
                            <span>Showing 1- 20 of {total} results</span>
                            <ul class="pagination d-flex justify-content-center">
                                <li class="page-item" onClick={goToPrevious}>
                                    <span class="page-link">‹</span>
                                </li>
                                <li class="page-item d-flex">
                                    {pages.map((pageIndex) => (
                                        <a key={pageIndex} class="page-link" onClick={() => setPageNumber(pageIndex)}>{pageIndex + 1}</a>
                                    ))}
                                </li>
                                <li class="page-item" onClick={goToNext}>
                                    <span class="page-link">›</span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ListAccessories
