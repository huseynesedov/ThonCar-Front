import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { FaArrowLeftLong } from 'react-icons/fa6';

import './otpcode.scss'

const Otpcode = ({ handleClose, show, openLogin }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const [closing, setClosing] = useState(false);



    const handleModalClose = () => {
        setClosing(true);
        setClosing(false);
        handleClose();
    };


    const handleBackToLogin = () => {
        setClosing(true);
        setTimeout(() => {
            setClosing(false);
            handleClose();
            openLogin();
        }, 200);
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
                                        <p className='fs-24 modalPlogin'>Təstiq kodu göndərildi</p>
                                        <p className='fs-16 mt-2 ModalPEmail d-flex'>
                                            <p className='text-underline'>
                                                Emailinizi yoxla
                                            </p>
                                            yıb gələn kodu daxil edin
                                        </p>

                                    </div>
                                </div>
                                <div className="col-md-12 w-100 d-flex justify-content-between">
                                    <div className={`input-container3 col-12 col-md-3 w-100 ${isFocused || inputValue ? 'focused' : ''}`} style={{ maxWidth: "46px" }}>
                                        <input
                                            type="text"
                                            placeholder={isFocused || inputValue ? '' : ''}
                                            onFocus={() => setIsFocused(true)}
                                            onBlur={() => setIsFocused(false)}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            value={inputValue}
                                        />
                                    </div>
                                    <div className={`input-container3 col-12 col-md-3 w-100 ${isFocused || inputValue ? 'focused' : ''}`} style={{ maxWidth: "46px" }}>
                                        <input
                                            type="text"
                                            placeholder={isFocused || inputValue ? '' : ''}
                                            onFocus={() => setIsFocused(true)}
                                            onBlur={() => setIsFocused(false)}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            value={inputValue}
                                        />
                                    </div>
                                    <div className={`input-container3 col-12 col-md-3 w-100 ${isFocused || inputValue ? 'focused' : ''}`} style={{ maxWidth: "46px" }}>
                                        <input
                                            type="text"
                                            placeholder={isFocused || inputValue ? '' : ''}
                                            onFocus={() => setIsFocused(true)}
                                            onBlur={() => setIsFocused(false)}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            value={inputValue}
                                        />
                                    </div>
                                    <div className={`input-container3 col-12 col-md-3 w-100 ${isFocused || inputValue ? 'focused' : ''}`} style={{ maxWidth: "46px" }}>
                                        <input
                                            type="text"
                                            placeholder={isFocused || inputValue ? '' : ''}
                                            onFocus={() => setIsFocused(true)}
                                            onBlur={() => setIsFocused(false)}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            value={inputValue}
                                        />
                                    </div>
                                    <div className={`input-container3 col-12 col-md-3 w-100 ${isFocused || inputValue ? 'focused' : ''}`} style={{ maxWidth: "46px" }}>
                                        <input
                                            type="text"
                                            placeholder={isFocused || inputValue ? '' : ''}
                                            onFocus={() => setIsFocused(true)}
                                            onBlur={() => setIsFocused(false)}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            value={inputValue}
                                        />
                                    </div>
                                    <div className={`input-container3 col-12 col-md-3 w-100 ${isFocused || inputValue ? 'focused' : ''}`} style={{ maxWidth: "46px" }}>
                                        <input
                                            type="text"
                                            placeholder={isFocused || inputValue ? '' : ''}
                                            onFocus={() => setIsFocused(true)}
                                            onBlur={() => setIsFocused(false)}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            value={inputValue}
                                        />
                                    </div>
                                </div>


                                <div className="d-flex w-100 justify-content-end mt-4" style={{ maxWidth: "305px" }}>
                                    <p className='ModalPEmail fs-10'>Kod gəlməyib? yenidən göndər</p>
                                </div>

                                <div className="d-flex flex-column align-items-center mt-3 w-100 justify-content-center" style={{ maxWidth: "305px" }}>
                                    <button className='LoginButton'>Davam et</button>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Modal>


        </>
    );
};

export default Otpcode;
