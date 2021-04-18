/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useRef } from 'react';
import { Link, withRouter } from "react-router-dom";
import { getCategories } from "../../../functions/category";
import { getSubs } from "../../../functions/sub";
import LoadSpinner from '../../Spinner';
import { Helmet } from "react-helmet";

const MobileDrawer = ({ close, history }) => {

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
        <div class="dropdown show">
            <a class="btn btn-secondary dropdown-toggle p-2 m-2" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ background: "transparent" }}>
                <i class="las la-tasks aiz-side-nav-icon"></i>
                <span class="aiz-side-nav-text">{c.name}</span>
            </a>

            <div class="dropdown-menu " aria-labelledby="dropdownMenuLink">
                {subs.map((cat) => cat.parent === c._id && (

                    <a onClick={() => {
                        history.push(`/products/${cat.slug}`)
                        close()
                    }}
                        class="dropdown-item pb-1 drawercat"  >
                        <i class="las la-tasks aiz-side-nav-icon" style={{color:"white"}}></i>
                        <span class="aiz-side-nav-text" style={{color:"white"}}>{cat.name}</span>
                    </a>

                ))}

            </div>
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
           <Helmet>
           <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
           </Helmet>
            <div class="sidebar-mobile c-scrollbar">
               
                <div>
                    <a href="#" class="aiz-side-nav-link active m-1" aria-expanded="false" style={{ color: "#f90", fontSize: 18 + "px" }}>
                        <i class="las la-home aiz-side-nav-icon"></i>
                        <span class="aiz-side-nav-text">Categories</span>
                    </a>
                    {loading && <LoadSpinner />}
                    {showCategories()}

                </div>
                {/* <div class="aiz-side-nav-wrap">
                    <div class="px-20px mb-3" />
                    <ul class="aiz-side-nav-list" id="search-menu" />
                    <ul class="aiz-side-nav-list metismenu" id="main-menu" data-toggle="aiz-side-menu">
                        <li class="aiz-side-nav-item">
                            <a href="#" class="aiz-side-nav-link active" aria-expanded="false">
                                <i class="las la-home aiz-side-nav-icon"></i>
                                <span class="aiz-side-nav-text">Categories</span>
                            </a>
                        </li>
                        {loading && <LoadSpinner />}
                        {showCategories()}
                    </ul>
                </div> */}


            </div>
        </section>
    );
}

export default withRouter(MobileDrawer);