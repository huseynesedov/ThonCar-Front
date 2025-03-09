import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { FaArrowLeftLong } from 'react-icons/fa6';

import Otpcode from '../Forget-otpcode/otpCode';


const Email = ({ handleClose, show, setShow, openLogin }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const [closing, setClosing] = useState(false);


    const [showOtpCode, setShowOtpCode] = useState(false);

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


    const switchToOtpCode = () => {
        setClosing(true);
        setTimeout(() => {
            setShowOtpCode(true);
        }, 400);
    };




    const openEmail = () => {
        setClosing(true);
        setTimeout(() => {
            setShowOtpCode(false);
            setShow(true);
            setClosing(false);
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
                <div className="modalll position-relative">
                    <div className='position-absolute' onClick={handleBackToLogin} style={{ top: "8px", fontSize: "25px" }}>
                        <FaArrowLeftLong style={{ cursor: "pointer" }} />
                    </div>

                    <div className="container" style={{ padding: "50px 0px 50px 0px" }}>
                        <div className='d-flex flex-column align-items-center justify-content-center'>
                            <div className='d-flex flex-column w-100' style={{ maxWidth: "305px" }}>
                                <div className='mb-3 d-flex flex-column'>
                                    <div className='d-flex flex-column justify-content-center'>
                                        <p className='fs-24 modalPlogin'>Hesabın bərpası</p>
                                        <p className='fs-16 mt-2 ModalPEmail'>Email və ya telefon nömrənizi daxil edin</p>

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


                                <div className="d-flex w-100 justify-content-end mt-4" style={{ maxWidth: "305px" }}>
                                    <p className='ModalPEmail fs-10'>Təhlükəsizlik və giriş məqsədləri üçün bizdən emailinizə və ya telefonunuza SMS bildirişləri alacaqsınız</p>
                                </div>

                                <div className="d-flex flex-column align-items-center mt-3 w-100 justify-content-center" style={{ maxWidth: "305px" }}>
                                    <button onClick={switchToOtpCode} className='LoginButton'>Davam et</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Otpcode
                show={showOtpCode}
                handleClose={handleModalClose}
                openEmail={openEmail}
            />

        </>
    );
};

export default Email;
