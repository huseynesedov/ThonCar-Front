import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FaArrowLeftLong } from 'react-icons/fa6';

import './otpcode.scss';
import ForgetPassword from '../Forget-password/forgetPassword';

const Otpcode = ({ handleClose, show, openEmail }) => {
    const [closing, setClosing] = useState(false);
    const [otp, setOtp] = useState(["", "", "", ""]);

    const [showForgetPassword, setShowForgetPassword] = useState(false);


    const handleModalClose = () => {
        setClosing(true);
        setTimeout(() => {
            setClosing(false);
            handleClose();
        }, 200);
    };

    const handleBackToEmail = () => {
        setClosing(true);
        setTimeout(() => {
            setClosing(false);
            openEmail(); // Email modalını aç
        }, 500);
    };

    const switchToForgetPassword = () => {
        setClosing(true);
        setTimeout(() => {
            setShowForgetPassword(true);
        }, 400);
    };

    const handleChange = (index, value) => {
        if (/^[0-9]?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < 3) {
                document.getElementById(`otp-${index + 1}`).focus();
            }
        }
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
                    <div className="position-absolute" onClick={handleBackToEmail} style={{ top: "8px", fontSize: "25px" }}>
                        <FaArrowLeftLong style={{ cursor: "pointer" }} />
                    </div>

                    <div className="container" style={{ padding: "50px 0px" }}>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <div className="d-flex flex-column w-100" style={{ maxWidth: "305px" }}>
                                <div className="mb-3 d-flex flex-column">
                                    <div className="d-flex flex-column justify-content-center">
                                        <p className="fs-24 modalPlogin">Təsdiq kodu göndərildi</p>
                                        <p className="fs-16 mt-2 ModalPEmail">
                                            <span className="text-underline cursor-pointer" onClick={handleBackToEmail}>Emailinizi yoxlayıb</span> gələn kodu daxil edin
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-12 w-100 d-flex justify-content-between">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            id={`otp-${index}`}
                                            type="text"
                                            className="otp-input"
                                            maxLength="1"
                                            value={digit}
                                            onChange={(e) => handleChange(index, e.target.value)}
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                textAlign: "center",
                                                fontSize: "24px",
                                                border: "1px solid #ccc",
                                                borderRadius: "8px",
                                                marginRight: "10px"
                                            }}
                                        />
                                    ))}
                                </div>

                                <div className="d-flex w-100 justify-content-end mt-4" style={{ maxWidth: "305px" }}>
                                    <p className="ModalPEmail fs-10">Kod gəlməyib? <span className="text-primary" style={{ cursor: "pointer" }}>Yenidən göndər</span></p>
                                </div>

                                <div className="d-flex flex-column align-items-center mt-3 w-100 justify-content-center" style={{ maxWidth: "305px" }}>
                                    <button className="LoginButton" onClick={switchToForgetPassword}>Davam et</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <ForgetPassword
                show={showForgetPassword}
                handleClose={handleModalClose}
            />
        </>
    );
};

export default Otpcode;
