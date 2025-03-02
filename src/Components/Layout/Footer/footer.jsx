import React from 'react';
import '../../../Assets/Styles/footerStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <>
      <article className="footer-signup d-flex justify-content-center py-4 mt-3">
        <div className="myContainer d-flex align-items-start">
          <div className="">
            <div className="col-md-12 my-3">
              <h5>İndi şirkət hesabı açın !</h5>
              {/* <p className="fs-14">
                Size özel kampanyalardan ve indirimlerden faydalanın. Rezervasyonlarınızı kolayca yönetin.
              </p> */}
            </div>
            <div className="col-md">
              <form className="footer-form d-flex flex-column flex-md-row align-items-center">
                <input
                  type="text"
                  placeholder="Adınız"
                  className="form-control mb-2 mb-md-0 mx-md-2"
                />
                <input
                  type="text"
                  placeholder="Şirkət adı"
                  className="form-control mb-2 mb-md-0 mx-md-2"
                />
                <input
                  type="text"
                  placeholder="Nömrə"
                  className="form-control mb-2 mb-md-0 mx-md-2"
                />
                <input
                  type="email"
                  placeholder="E-posta"
                  className="form-control mb-2 mb-md-0 mx-md-2"
                />
                <button className="footerButton btn-primary mt-2 mt-md-0">Göndər</button>
              </form>
            </div>
          </div>
        </div>
      </article>

      <footer className='d-flex justify-content-center'>
        <div className="myContainer">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
            {/* Sol kısım */}
            <div className="col-md d-flex align-items-center flex-column flex-md-row text-center text-md-start mb-3 mb-md-0">
              <span className="text_footer d-flex align-items-center justify-content-center">
                Copyright © Designed & Developed by
                <a href="https://thonsoftware.com/">
                  <h1 className="fs-19 ms-1 mb-0 me-1">Thon Software</h1>
                </a>
                <p className="ms-1 mb-0">2024 - 2025</p>
              </span>
            </div>

          </footer>
        </div>
      </footer>

    </>
  );
};

export default Footer;
