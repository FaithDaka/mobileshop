/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { getCategories } from "../../../functions/category";
import { getSubs } from "../../../functions/sub";

const MobileDrawer = ({ close }) => {

    const [categories, setCategories] = useState([]);
    const [subs, setSubs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [phones, setPhones] = useState(false);
    const [tvs, setTVs] = useState(false);
    const [computer, setComputer] = useState(false);
    const [gaming, setGaming] = useState(false);
    const [fridges, setFridges] = useState(false);
    const [sound, setSound] = useState(false);

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
        <div class="sidenav" key={c._id}>
            <Link to={`${process.env.PUBLIC_URL}/`} className="dropdown-btn" onClick={() => setOpen(!open)}>{c.name}<i class="fa fa-caret-down"></i></Link>
            {open ?
                <div class="dropdown-container">
                    {subs.map((cat) => cat.parent === c._id && (
                        <li style={{ textTransform: 'capitalize' }}>
                            <Link to={`/products/${cat.slug}`}>{cat.name}</Link>
                        </li>
                    ))}

                </div>
                : ''}
        </div>
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
            <div class="aiz-sidebar left c-scrollbar">
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
                        <li class="aiz-side-nav-item">
                            <a href="#" class="aiz-side-nav-link" aria-expanded="false" onClick={() => setPhones(!phones)}>
                                <i class="las la-tasks aiz-side-nav-icon"></i>
                                <span class="aiz-side-nav-text">Mobile Phones</span>
                                <span class="aiz-side-nav-arrow"></span>
                            </a>
                            {phones ?
                                <ul class="aiz-side-nav-list">
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link ">
                                            <span class="aiz-side-nav-text">iPhones</span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link">
                                            <span class="aiz-side-nav-text">Samsung</span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link ">
                                            <span class="aiz-side-nav-text">iPhones</span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link">
                                            <span class="aiz-side-nav-text">Infinix</span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link ">
                                            <span class="aiz-side-nav-text">Oppo</span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link">
                                            <span class="aiz-side-nav-text">Huawei</span>
                                        </a>
                                    </li>
                                </ul>
                                : ''}
                        </li>
                        <li class="aiz-side-nav-item">
                            <a href="#" class="aiz-side-nav-link" aria-expanded="false" onClick={() => setTVs(!tvs)}>
                                <i class="las la-tasks aiz-side-nav-icon"></i>
                                <span class="aiz-side-nav-text">Televisions</span>
                                <span class="aiz-side-nav-arrow"></span>
                            </a>
                            {tvs ?
                                <ul class="aiz-side-nav-list">
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link ">
                                            <span class="aiz-side-nav-text">Android Tvs</span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link">
                                            <span class="aiz-side-nav-text">Curved Tvs</span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link ">
                                            <span class="aiz-side-nav-text">Smart Tvs</span>
                                        </a>
                                    </li>
                                </ul>
                                : ''}
                        </li>
                        <li class="aiz-side-nav-item">
                            <a href="#" class="aiz-side-nav-link" aria-expanded="false" onClick={() => setComputer(!computer)}>
                                <i class="las la-tasks aiz-side-nav-icon"></i>
                                <span class="aiz-side-nav-text">Computers</span>
                                <span class="aiz-side-nav-arrow"></span>
                            </a>
                            {computer ?
                                <ul class="aiz-side-nav-list">
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link ">
                                            <span class="aiz-side-nav-text">Ultra Books</span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link">
                                            <span class="aiz-side-nav-text">Mac Books</span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link ">
                                            <span class="aiz-side-nav-text">Laptops</span>
                                        </a>
                                    </li>
                                </ul>
                                : ''}
                        </li>
                        <li class="aiz-side-nav-item">
                            <a href="#" class="aiz-side-nav-link" aria-expanded="false" onClick={() => setGaming(!gaming)}>
                                <i class="las la-tasks aiz-side-nav-icon"></i>
                                <span class="aiz-side-nav-text">Gaming</span>
                                <span class="aiz-side-nav-arrow"></span>
                            </a>
                            {gaming ?
                                <ul class="aiz-side-nav-list">
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link ">
                                            <span class="aiz-side-nav-text">PS4</span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link">
                                            <span class="aiz-side-nav-text">Gaming Consoles</span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link ">
                                            <span class="aiz-side-nav-text">XBox</span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link ">
                                            <span class="aiz-side-nav-text">Gaming Mouse</span>
                                        </a>
                                    </li>
                                </ul>
                                : ''}
                        </li>
                        <li class="aiz-side-nav-item">
                            <a href="#" class="aiz-side-nav-link" aria-expanded="false" onClick={() => setFridges(!fridges)}>
                                <i class="las la-tasks aiz-side-nav-icon"></i>
                                <span class="aiz-side-nav-text">Fridges</span>
                                <span class="aiz-side-nav-arrow"></span>
                            </a>
                            {fridges ?
                                <ul class="aiz-side-nav-list">
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link ">
                                            <span class="aiz-side-nav-text">LG</span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link">
                                            <span class="aiz-side-nav-text">Samsung</span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link ">
                                            <span class="aiz-side-nav-text">ADH</span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link ">
                                            <span class="aiz-side-nav-text">Hisense</span>
                                        </a>
                                    </li>
                                </ul>
                                : ''}
                        </li>
                        <li class="aiz-side-nav-item">
                            <a href="#" class="aiz-side-nav-link" aria-expanded="false" onClick={() => setSound(!sound)}>
                                <i class="las la-tasks aiz-side-nav-icon"></i>
                                <span class="aiz-side-nav-text">Sound Systems</span>
                                <span class="aiz-side-nav-arrow"></span>
                            </a>
                            {sound ?
                                <ul class="aiz-side-nav-list">
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link ">
                                            <span class="aiz-side-nav-text">Home Theaters</span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link">
                                            <span class="aiz-side-nav-text">Sound Bars</span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link ">
                                            <span class="aiz-side-nav-text">Portable Speakers</span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="#" class="aiz-side-nav-link ">
                                            <span class="aiz-side-nav-text">JBL Speakers</span>
                                        </a>
                                    </li>
                                </ul>
                                : ''}
                        </li>

                    </ul>
                </div>
            </div>
            <div class="aiz-sidebar-overlay"></div>
        </section>
    );
}

export default MobileDrawer;