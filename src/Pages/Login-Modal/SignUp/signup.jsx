import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaArrowLeftLong } from "react-icons/fa6";


// import './loginStyle.scss'
import images from '../../../Assets/Images/js/images';

const SigunUp = ({ handleClose, show, openLogin }) => {
    const today = new Date();
    const minDate = new Date(today.setFullYear(today.getFullYear() - 18)); // 18 yıl öncesi
    const minDateString = minDate.toISOString().split('T')[0]; // YYYY-MM-DD formatında tarih
    

    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    
    const [isFocused2, setIsFocused2] = useState(false);
    const [inputValue2, setInputValue2] = useState('');

    const [isFocused3, setIsFocused3] = useState(false);
    const [inputValue3, setInputValue3] = useState('');
    
    const [isFocused4, setIsFocused4] = useState(false);
    const [inputValue4, setInputValue4] = useState('');
    
    const [isFocused5, setIsFocused5] = useState(false);
    const [inputValue5, setInputValue5] = useState('');
    
    const [isFocused6, setIsFocused6] = useState(false);
    const [inputValue6, setInputValue6] = useState('');
  



    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const [closing, setClosing] = useState(false);

    const handleModalClose = () => {
        setClosing(true);
        setTimeout(() => {
            setClosing(false);
            handleClose();
        }, 200);
    };


    const handleBackToLogin = () => {
        setClosing(true);
        setTimeout(() => {
            setClosing(false);
            handleClose();
            openLogin();
        }, 500);
    };


    return (
        <Modal
            show={show}
            onHide={handleModalClose}
            centered
            dialogClassName={`custom-modal-width ${closing ? 'fade-out' : 'fade-in'}`}

        >
            <div className="modalll position-relative">
                <div className='position-absolute' onClick={handleBackToLogin} style={{ top: "8px", fontSize: "25px" }}>
                    <FaArrowLeftLong style={{ cursor: "pointer" }} />
                </div>
                <div className="container" style={{ padding: "50px 0px 50px 0px" }}>
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <div className='d-flex align-items-center flex-column w-100' style={{ maxWidth: "616px" }}>


                            <div className='mb-5 w-100 d-flex align-items-center flex-column' style={{ maxWidth: "305px" }}>
                                <p className='fs-14 modalPHeader'>Öz komfortlu səfərini planlaşdırmaq üçün</p>
                                <div className='d-flex flex-wrap align-items-baseline'>
                                    <p className='fs-24 modalPlogin'>Qeydiyyatdan keç</p>
                                    <p className='fs-14 modalPsignup ms-1' onClick={handleBackToLogin} style={{ cursor: "pointer" }}>/ giriş et</p>
                                </div>
                            </div>
                            <div className="row w-100 justify-content-between">

                                <div className="col-12 col-md-6">
                                    <div className={`input-container ${isFocused || inputValue ? 'focused' : ''}`} style={{ minWidth: "302px" }}>
                                        <input
                                            type="text"
                                            placeholder={isFocused || inputValue ? '' : ''}
                                            onFocus={() => setIsFocused(true)}
                                            onBlur={() => setIsFocused(false)}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            value={inputValue}
                                        />
                                        <label>Ad/Soyad</label>
                                    </div>
                                    <div className={`input-container mt-4 ${isFocused2 || inputValue2 ? 'focused' : ''}`} style={{ minWidth: "302px" }}>
                                        <input
                                            type="text"
                                            placeholder={isFocused2 || inputValue2 ? '+994' : ''}
                                            onFocus={() => setIsFocused2(true)}
                                            onBlur={() => setIsFocused2(false)}
                                            onChange={(e) => setInputValue2(e.target.value)}
                                            value={inputValue2}
                                        />
                                        <label>Telefon</label>
                                    </div>
                                    <div className={`input-container mt-4 ${isFocused3 || inputValue3 ? 'focused' : ''}`} style={{ minWidth: "302px" }}>
                                        <input
                                            type="date"
                                            placeholder={isFocused3 || inputValue3 ? '' : ''}
                                            onFocus={() => setIsFocused3(true)}
                                            onBlur={() => setIsFocused3(false)}
                                            value={inputValue3}
                                            onChange={(e) => {
                                                const newValue = e.target.value;
                                                if (newValue <= minDateString) {
                                                    setInputValue3(newValue);
                                                }
                                            }}
                                    
                                            max={minDateString}
                                        />
                                        <label>Doğum tarixi</label>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 mt-My1">
                                    <div className={`input-container ${isFocused4 || inputValue4 ? 'focused' : ''}`} style={{ minWidth: "302px" }}>
                                        <input
                                            type="text"
                                            placeholder={isFocused4 || inputValue4 ? 'example@gmail.com' : ''}
                                            onFocus={() => setIsFocused4(true)}
                                            onBlur={() => setIsFocused4(false)}
                                            onChange={(e) => setInputValue4(e.target.value)}
                                            value={inputValue4}
                                        />
                                        <label>Email</label>
                                    </div>
                                    <div className={`input-container mt-4 ${isFocused5 || inputValue5 ? 'focused' : ''}`} style={{ minWidth: "302px" }}>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder=" "
                                            onFocus={() => setIsFocused5(true)}
                                            onBlur={() => setIsFocused5(false)}
                                            onChange={(e) => setInputValue5(e.target.value)}
                                            value={inputValue5}
                                        />
                                        <label>Şifrə</label>
                                        <span className="eye-icon position-absolute" onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <FiEyeOff /> : <FiEye />}
                                        </span>
                                    </div>
                                    <div className={`input-container mt-4 ${isFocused6 || inputValue6 ? 'focused' : ''}`} style={{ minWidth: "302px" }}>
                                        <input
                                            type={showPassword2 ? 'text' : 'password'}
                                            placeholder=" "
                                            onFocus={() => setIsFocused6(true)}
                                            onBlur={() => setIsFocused6(false)}
                                            onChange={(e) => setInputValue6(e.target.value)}
                                            value={inputValue6}
                                        />
                                        <label>Şifrəni təkrarla</label>
                                        <span className="eye-icon position-absolute" onClick={() => setShowPassword2(!showPassword2)}>
                                            {showPassword ? <FiEyeOff /> : <FiEye />}
                                        </span>
                                    </div>
                                </div>

                            </div>

                            <div className="d-flex flex-column align-items-center mt-5 w-100 justify-content-center" style={{ maxWidth: "305px" }}>
                                <button className='LoginButton'>Daxil ol</button>

                                <span className='d-flex w-100 flex-wrap align-items-center justify-content-center mt-3'>
                                    <p className='fs-12 LoginButtonDown fw-400'>Artıq hesabın var?</p>
                                    <p className='fs-12 LoginButtonDown fw-700 ms-1' style={{cursor:"pointer"}} onClick={handleBackToLogin}>Giriş et</p>
                                </span>
                            </div>

                            <div className="d-flex align-items-center justify-content-center mt-5 w-100 position-relative socialMediaBorder" style={{ maxWidth: "305px" }}>
                                <p className='position-absolute'>və ya</p>
                                <div className='socialMediaMain mt-4'>
                                    <button><img src={images.Facebook} alt="Facebook" /></button>
                                    <button><img src={images.Google} alt="Google" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default SigunUp;
