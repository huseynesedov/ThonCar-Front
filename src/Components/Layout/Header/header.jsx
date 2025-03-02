import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import languages from '../../../Lang/Main';
import ThemeSwitch from './Components/modSwitch';
import "../../../i18n";

import images from '../../../Assets/Images/js/images';
import Login from '../../../Pages/Login-Modal/Login/login';

import '../../../Assets/Styles/headerStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
      i18n.changeLanguage(storedLang);
    }
  }, [i18n]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguage = (newLang) => {
    i18n.changeLanguage(newLang);
    setIsOpen(false);
    localStorage.setItem('lang', newLang);

    let currentPath = location.pathname;
    const queryParams = location.search;
    const hash = location.hash;

    if (lang) {
      currentPath = currentPath.replace(`/${lang}`, `/${newLang}`);
    } else {
      const pathParts = currentPath.split('/');
      pathParts[1] = newLang;
      currentPath = pathParts.join('/');
    }

    navigate(`${currentPath}${queryParams}${hash}`);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);


  return (
    <nav className="bg_header d-flex align-items-center justify-content-center">
      <div className="myContainer py-3">
        <div className="row align-items-center justify-content-between">
          <div className="col-2 me-4 d-flex align-items-center col-md-4 text-start">
            <Link to={`/${localStorage.getItem('lang') || 'az'}`}>
              <img src={images.logo} className="fit logo" alt="Viberide" />
            </Link>
            <div className="d-none d-md-block ms-3">
              <ThemeSwitch />
            </div>
          </div>

          <div className="col text-center d-none d-md-block" style={{ maxWidth: "217px" }}>
            <div className="helpdesk-container d-flex">
              <img src={images.helpDesk} className="helpdesk-logo" alt="helpcenter-logo" />
              <div className="helpdesk-text ms-2">
                <p className="fs-16 help_text_top">7/24 Canli destek</p>
                <p className="fs-16 help_text_bottom">+99451-760-03-00</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 d-none d-md-flex justify-content-end align-items-center">
            <button className="loginButton" onClick={handleShow}>Daxil Ol</button>

            <div className="language d-flex align-items-center ms-4" onClick={toggleDropdown}>
              <img src={images.englishFlag} alt="Selected Language" />
              <img className="ms-2 headerDropdownIcon" src={images.upIcon} alt="Dropdown Icon" />
            </div>

            {isOpen && (
              <ul className="dropdown-menu show position-absolute mt-2">
                {languages.map((langItem) => (
                  <li
                    key={langItem.id}
                    className="dropdown-item"
                    onClick={() => changeLanguage(langItem.code)}
                  >
                    {langItem.label}
                  </li>
                ))}
              </ul>
            )}
          </div>




          <div className="col-1 d-md-none text-end me-2">
            <button className="hamburger-menu" onClick={toggleMenu}>
              <span className="hamburger-icon"></span>
              <span className="hamburger-icon"></span>
              <span className="hamburger-icon"></span>
            </button>
          </div>
        </div>
      </div>

      <div className={`slide-menu ${menuOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <Link to={`/${localStorage.getItem('lang') || 'az'}`}>
            <img src={images.logo} className="fit logo" alt="Viberide" />
          </Link>
          <button className="close-menu"
            onClick={(e) => {
              toggleMenu();
            }}
          >&times;</button>
        </div>

        <div className="col text-center d-flex align-items-center justify-content-center" style={{ maxHeight: "90px" }}>
          <div className="helpdesk-container d-flex">
            <img src={images.helpDesk} className="helpdesk-logo" alt="helpcenter-logo" />
            <div className="helpdesk-text ms-2">
              <p className="fs-16 help_text_top">7/24 Canli destek</p>
              <p className="fs-16 help_text_bottom">+99451-760-03-00</p>
            </div>
          </div>
        </div>

        <div className="menu-content">
          <div className='d-flex align-items-center justify-content-between'>
            <div className="language d-flex align-items-center" onClick={toggleDropdown}>
              <img src={images.englishFlag} alt="English Flag" />
              <img className="ms-2" src={images.upIcon} alt="Up Icon" />
            </div>
            <button className="loginButton"
              onClick={() => {
                handleShow();
                setMenuOpen(false); // Menü kapansın
              }}>
              Daxil Ol
            </button>
          </div>

          {isOpen && (
            <ul className="dropdown-menu show position-absolute mt-2" style={{ top: "209px" }}>
              {languages.map((langItem) => (
                <li
                  key={langItem.id}
                  className="dropdown-item"
                  onClick={() => {
                    changeLanguage(langItem.code);
                    setMenuOpen(false); // Menü kapansın
                  }}
                >
                  {langItem.label}
                </li>
              ))}
            </ul>
          )}



          <div className="mt-3">
            <ThemeSwitch />
          </div>
        </div>
      </div>
      {show && (
        <Login show={show} setShow={setShow} handleClose={handleClose} />
      )}
    </nav>

  );
};

export default Header;