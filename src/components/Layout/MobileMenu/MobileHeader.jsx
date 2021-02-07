import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import './search.css';

const MobileHeader = () => {
    const dispatch = useDispatch();
    // const { search } = useSelector((state) => ({ ...state }));
    // const { text } = search;
    const [showDrawer, setShowDrawer] = useState(false);

    const history = useHistory();

    const handleChange = (e) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: { text: e.target.value },
        });
    };

    const openDrawer = () => setShowDrawer(true);
    const closeDrawer = () => setShowDrawer(false);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     history.push(`/search?${text}`);
    // };

    return (
        <header className="d-xl-none d-lg-block sticky-top  z-1020 border-bottom shadow-sm" style={{ background: '#101622' }}>
            <div className="d-flex px-2">
                <div className="pt-3">
                    <i className="las la-bars"
                        style={{ fontSize: '25px', color: '#fff', paddingRight: '14px' }}
                        onClick={openDrawer}
                    >
                    </i>
                </div>
                <div className="ft-logo" style={{ paddingRight: '140px' }}>
                    <img
                        src="images/logo.png"
                        alt="Logo"
                        width={100}
                    />
                </div>
                <div className="pt-3 text-white">
                    <div className="d-lg-block ml-3 mr-0 ">
                        <i className="la la-shopping-cart la-3x opacity-80" />
                        <span className="badge badge-circle badge-primary" style={{ position: 'absolute', top: '15px', right: '25px' }}>0</span>
                    </div>
                </div>

            </div>
            <div class="nav-searchbar-wrapper">
                <form class="nav-searchbar search-big" accept-charset="utf-8">
                    <div class="nav-fill">
                        <div class="nav-search-field">
                            <input type="text" class="nav-input nav-progressive-attribute" placeholder="Search MobileShop" data-aria-clear-label="Clear search keywords" name="k" autocomplete="off" autocorrect="off" autocapitalize="off" dir="auto" id="nav-search-keywords"
                                // value={text}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div class="nav-right">
                        <div class="nav-search-submit">
                            <input type="submit" class="nav-input" />
                            <i class="nav-icon nav-sprite"></i>
                        </div>
                    </div>
                </form>
            </div>
        </header>
    )
}

export default MobileHeader