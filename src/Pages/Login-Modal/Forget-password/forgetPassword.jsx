import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { FiEye, FiEyeOff } from 'react-icons/fi';


const ForgetPassword = ({ handleClose, show }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [isFocused2, setIsFocused2] = useState(false);
    const [inputValue2, setInputValue2] = useState('');
    const [showPassword2, setShowPassword2] = useState(false);


    const [closing, setClosing] = useState(false);

    const handleModalClose = () => {
        setClosing(true);
        setTimeout(() => {
            setClosing(false);
            handleClose();
        },);
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
                                <div className=' d-flex flex-column'>
                                    <div className='d-flex flex-wrap '>
                                        <p className='fs-24 modalPlogin'>Şifrəni yenilə</p>
                                        <p className='fs-16 ModalPEmail'>Yeni şifrə daxil edib hesabınızı bərpa edin</p>
                                    </div>
                                </div>

                                <div className={`input-container2 position-relative mt-4 ${isFocused || inputValue ? 'focused' : ''}`}>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder=" "
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => setIsFocused(false)}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        value={inputValue}
                                    />
                                    <label>Şifrə</label>
                                    <span className="eye-icon position-absolute" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FiEyeOff /> : <FiEye />}
                                    </span>
                                </div>

                                <div className={`input-container2 position-relative mt-4 ${isFocused2 || inputValue2 ? 'focused' : ''}`}>
                                    <input
                                        type={showPassword2 ? 'text' : 'password'}
                                        placeholder=" "
                                        onFocus={() => setIsFocused2(true)}
                                        onBlur={() => setIsFocused2(false)}
                                        onChange={(e) => setInputValue2(e.target.value)}
                                        value={inputValue2}
                                    />
                                    <label>Şifrə</label>
                                    <span className="eye-icon position-absolute" onClick={() => setShowPassword2(!showPassword2)}>
                                        {showPassword2 ? <FiEyeOff /> : <FiEye />}
                                    </span>
                                </div>


                                <div className="d-flex flex-column align-items-center mt-3 w-100 justify-content-center" style={{ maxWidth: "305px" }}>
                                    <button className='LoginButton'>Giriş et</button>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Modal>


        </>
    );
};

export default ForgetPassword;
