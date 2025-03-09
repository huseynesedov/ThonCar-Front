import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import './loginStyle.scss'
import images from '../../../Assets/Images/js/images';
import SignUp from '../SignUp/signup';
import Email from '../Forget-email/email';

const Login = ({ handleClose, show, setShow }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isFocused2, setIsFocused2] = useState(false);
    const [inputValue2, setInputValue2] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [closing, setClosing] = useState(false);

    const [showSignUp, setShowSignUp] = useState(false);

    const [showForgetEmail, setShowForgetEmail] = useState(false);

    const handleModalClose = () => {
        setClosing(true);
        setTimeout(() => {
            setClosing(false);
            handleClose();
        },);
    };


    const switchToSignUp = () => {
        setClosing(true);
        setTimeout(() => {
            setShowSignUp(true);
        }, 400);
    };

    const switchToForgetEmail = () => {
        setClosing(true);
        setTimeout(() => {
            setShowForgetEmail(true);
        }, 400);
    };


    // ✅ SignUp → Login geri qayıtma
    const openLogin = () => {
        setClosing(true);
        setTimeout(() => {
            setShowSignUp(false);
            setShowForgetEmail(false);
            setShow(true);
        }, 1);
    };




    return (
        <>
            <Modal
                show={show}
                onHide={handleModalClose}
                centered
                dialogClassName={`custom-modal-width ${closing ? 'fade-out' : 'fade-in'}`}
                backdropClassName="custom-backdrop"
            >
                <div className="modalll">
                    <div className="container" style={{ padding: "50px 0px 50px 0px" }}>
                        <div className='d-flex flex-column align-items-center justify-content-center'>
                            <div className='d-flex align-items-center flex-column w-100' style={{ maxWidth: "305px" }}>
                                <div className='mb-5 d-flex align-items-center flex-column'>
                                    <p className='fs-14 modalPHeader'>Öz komfortlu səfərini planlaşdırmaq üçün</p>
                                    <div className='d-flex align-items-center flex-wrap justify-content-center'>
                                        <p className='fs-24 modalPlogin'>Daxil Ol</p>
                                        <p className='fs-14 modalPsignup ms-1'
                                            onClick={switchToSignUp}
                                            style={{ cursor: 'pointer' }}
                                        >/ qeydiyyatdan keç</p>
                                    </div>
                                </div>

                                <div className={`input-container ${isFocused || inputValue ? 'focused' : ''}`}>
                                    <input
                                        type="text"
                                        placeholder={isFocused || inputValue ? 'example@gmail.com' : ''}
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => setIsFocused(false)}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        value={inputValue}
                                    />
                                    <label>Email və ya Nömrə</label>
                                </div>

                                <div className={`input-container2 position-relative mt-4 ${isFocused2 || inputValue2 ? 'focused' : ''}`}>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder=" "
                                        onFocus={() => setIsFocused2(true)}
                                        onBlur={() => setIsFocused2(false)}
                                        onChange={(e) => setInputValue2(e.target.value)}
                                        value={inputValue2}
                                    />
                                    <label>Şifrə</label>
                                    <span className="eye-icon position-absolute" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FiEyeOff /> : <FiEye />}
                                    </span>
                                </div>

                                <div className="d-flex w-100 justify-content-end" style={{ maxWidth: "305px" }}>
                                    <p className='forgetP fs-12' style={{cursor:"pointer"}} onClick={switchToForgetEmail}>Parolu unutmusan?</p>
                                </div>

                                <div className="d-flex flex-column align-items-center mt-3 w-100 justify-content-center" style={{ maxWidth: "305px" }}>
                                    <button className='LoginButton'>Giriş et</button>
                                    <span className='d-flex w-100 flex-wrap align-items-center justify-content-center mt-3'>
                                        <p className='fs-12 LoginButtonDown fw-400'>Hesabın yoxdur?</p>
                                        <p className='fs-12 LoginButtonDown fw-700 ms-1'
                                            onClick={switchToSignUp}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Qeydiyyatdan keç
                                        </p>
                                    </span>
                                </div>

                                <div className="d-flex align-items-center justify-content-center mt-5 w-100 position-relative socialMediaBorder" style={{ maxWidth: "305px" }}>
                                    <p className='position-absolute'>və ya</p>
                                    <div className='socialMediaMain mt-4'>
                                        <button><img src={images.Facebook} alt="ThonCar-Facebook" /></button>
                                        <button><img src={images.Google} alt="ThonCar-Google" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <SignUp
                show={showSignUp}
                handleClose={handleModalClose}
                openLogin={openLogin}
            />

            <Email
                show={showForgetEmail}
                handleClose={handleModalClose}
                openLogin={openLogin}
                setShow={setShowForgetEmail}
            />
        </>
    );
};

export default Login;
