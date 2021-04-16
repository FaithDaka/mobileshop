import React, { useEffect, useState, useRef } from 'react';
import { Link, withRouter } from "react-router-dom";
import { getCategories } from "../../../functions/category";
import { getSubs } from "../../../functions/sub";

import LoadSpinner from '../../../components/Spinner/index'

const Drawer = (history ) => {

    const [categories, setCategories] = useState([]);
    const [subs, setSubs] = useState([]);
    const [loading, setLoading] = useState(false);

    const node = useRef();

    const loadSubs = () => {
        setLoading(true);
        getSubs().then((c) => {
            setSubs(c.data)
            setLoading(false);
        })
    };

    const loadCategories = () => {
        setLoading(true);
        getCategories().then((c) => {
            setCategories(c.data);
            setLoading(false);
        });

    }

    useEffect(() => {
        loadCategories();
        loadSubs()
    }, []);
  
    const showCategories = () => categories.map((c) => (
        <li class="">
            <Link to="#" class="dropdown aiz-side-nav-link" >
                <Link to="#" class="dropdown-toggle" data-toggle="dropdown">
                    <i class="las la-tasks aiz-side-nav-icon"></i>
                    <span class="aiz-side-nav-text">{c.name}</span>
                </Link>
                <ul class="dropdown-menu" id="dmenu">
                    {subs.map((cat) => cat.parent === c._id && (
                        <li class="">
                            <a onClick={() => {
                                history.push(`/products/${cat.slug}`)
                                
                            }}
                                class="aiz-side-nav-link ">
                                <i class="las la-tasks aiz-side-nav-icon"></i>
                                <span class="aiz-side-nav-text">{cat.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </Link>
        </li>
    ));

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            return;
        }
    
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    return (
        <section ref={node} id="drawer">
            <div class="p-3 bg-soft-primary d-none d-lg-block rounded-top all-category position-relative text-left">
        <span class="fw-600 fs-16 mr-3" >Categories</span>
    </div>

            <div class="aiz-category-menu rounded bg-dark shadow-sm">
                


                <ul class="aiz-side-nav-list metismenu" id="main-menu">
                    {loading && <LoadSpinner />}
                    {showCategories()}
                </ul>


            </div>
        </section>
    );
}

export default Drawer;