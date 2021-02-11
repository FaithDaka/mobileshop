/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { getCategories } from "../../../functions/category";
import { getSubs } from "../../../functions/sub";
import LoadSpinner from '../../../components/Spinner';
import './styles.scss';

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
    <section ref={node} className="mob-nav">
      <div className="mobile-menu-wrapper">
        <span className="mobile-menu-close">
          <a href="#" onClick={close}>
            <i className="fas fa-times" />
          </a>
        </span>
        <div className="tab-content">

          <h4 className="text-white d-flex justify-content-center">Categories</h4>
          <div class="sidenav">
            <button class="dropdown-btn" onClick={() => setPhones(!phones)}>
              MobilePhones<i class="fa fa-caret-down"></i>
            </button>
            {phones ?
              <div class="dropdown-container">
                <Link to={`/products/iPhones`}>iPhones</Link>
                <Link to={`/products/samsung`}>Samsung</Link>
                <Link to={`/products/infinix`}>Infinix</Link>
                <Link to={`/products/oppo`}>Oppo</Link>
                <Link to={`/products/huawei`}>Huawei</Link>
                <Link to={`/products/oneplus`}>One Plus</Link>
                <Link to={`/products/xiaomi`}>Xiaomi</Link>
                <Link to={`/products/nokia`}>Nokia</Link>
              </div>
              : ''}
            <button class="dropdown-btn" onClick={() => setTVs(!tvs)}>
              Televisions<i class="fa fa-caret-down"></i>
            </button>
            {tvs ?
              <div class="dropdown-container">
                <Link to={`/products/android-tvs`}>Android Tvs</Link>
                <Link to={`/products/curved-tvs`}>Curved Tvs</Link>
                <Link to={`/products/smart-tvs`}>Smart Tvs</Link>
              </div>
              : ''}
            <button class="dropdown-btn" onClick={() => setComputer(!computer)}>
              Computers<i class="fa fa-caret-down"></i>
            </button>
            {computer ?
              <div class="dropdown-container">
                <Link to={`/products/ultrabooks`}>UltraBooks</Link>
                <Link to={`/products/macbooks`}>MacBooks</Link>
                <Link to={`/products/imacs`}>iMacs</Link>
                <Link to={`/products/minilaptops`}>MiniLatops</Link>
              </div>
              : ''}
            <button class="dropdown-btn" onClick={() => setGaming(!gaming)}>
              Gaming<i class="fa fa-caret-down"></i>
            </button>
            {gaming ?
              <div class="dropdown-container">
                <Link to={`/products/ps4`}>PS4</Link>
                <Link to={`/products/consoles`}>Consoles</Link>
                <Link to={`/products/xbox`}>XBox</Link>
                <Link to={`/products/gamingmouse`}>GamingMouse</Link>
                <Link to={`/products/gamingkeyboards`}>GamingKeyboards</Link>
              </div>
              : ''}
              <button class="dropdown-btn" onClick={() => setFridges(!fridges)}>
              Fridges<i class="fa fa-caret-down"></i>
            </button>
            {fridges ?
              <div class="dropdown-container">
                <Link to={`/products/ultrabooks`}>LG</Link>
                <Link to={`/products/macbooks`}>Samsung</Link>
                <Link to={`/products/imacs`}>ADH</Link>
                <Link to={`/products/imacs`}>Hisense</Link>
              </div>
              : ''}
              <button class="dropdown-btn" onClick={() => setSound(!sound)}>
              SoundSystems <i class="fa fa-caret-down"></i>
            </button>
            {sound ?
              <div class="dropdown-container">
                <Link to={`/products/hometheaters`}>Home Theaters</Link>
                <Link to={`/products/soundbars`}>Sound Bars</Link>
                <Link to={`/products/portablespeakers`}>Portable Speakers</Link>
                <Link to={`/products/jblspeakers`}>JBL Speakers</Link>
                <Link to={`/products/smartspeakers`}>Smart Speakers</Link>
              </div>
              : ''}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileDrawer;