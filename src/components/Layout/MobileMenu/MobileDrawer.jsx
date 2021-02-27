/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { getCategories } from "../../../functions/category";
import { getSubs } from "../../../functions/sub";
import LoadSpinner from '../../Spinner';

const MobileDrawer = ({ close }) => {

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
        <li class="aiz-side-nav-item">
            <Link to="#" class="dropdown aiz-side-nav-link">
                <Link to="#" class="dropdown-toggle" data-toggle="dropdown">
                    <i class="las la-tasks aiz-side-nav-icon"></i>
                    <span class="aiz-side-nav-text">{c.name}</span>
                </Link>
                <ul class="dropdown-menu aiz-side-nav-list">
                    {subs.map((cat) => cat.parent === c._id && (
                        <li class="aiz-side-nav-item">
                        <Link to={`/products/${cat.slug}`} class="aiz-side-nav-link ">
                        <i class="las la-tasks aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">{cat.name}</span>
                        </Link>
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
        close()
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    return (
        <section ref={node} className="">
            <div class="sidebar-mobile c-scrollbar">
                <div class="">
                    <a href="#" class="d-block text-left">
                        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="side bar" width={100} />
                    </a>
                </div>
                <div class="aiz-side-nav-wrap">
                    <div class="px-20px mb-3" />
                    <ul class="aiz-side-nav-list" id="search-menu" />
                    <ul class="aiz-side-nav-list metismenu" id="main-menu" data-toggle="aiz-side-menu">
                        <li class="aiz-side-nav-item">
                            <a href="#" class="aiz-side-nav-link active" aria-expanded="false">
                                <i class="las la-home aiz-side-nav-icon"></i>
                                <span class="aiz-side-nav-text">Categories</span>
                            </a>
                        </li>
                        {loading && <LoadSpinner /> }
                        {showCategories()}
                    </ul>
                </div>
            </div>
            {/* <div class="aiz-sidebar-overlay"></div> */}
        </section>
    );
}

export default MobileDrawer;