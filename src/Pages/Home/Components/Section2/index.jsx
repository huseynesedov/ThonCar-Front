import React from 'react'
import images from '../../../../Assets/Images/js/images';

const SectionTwo = () => {
    return (
        <>
            <section className='mt-5'>
                <div className="myContainer">
                    <div className="row">
                        <div className='col-md-12 d-flex justify-content-center'>
                            <div className='work_to'>
                                <p className='fs-14 fw-500'>
                                    Necə İşləyir
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center mt-4">
                            <h3 className='searchText2'>
                                Aşağıdakı 3 addım ilə maşın icarəyə götürün
                            </h3>
                        </div>

                        <div className="row">
                            <div className="col-md-12 d-flex flex-wrap justify-content-around mt-5">
                                <div className='infoMain'>
                                    <div className="infoIcon">
                                        <img src={images.location_tick} alt="ThonCar-LocationTick" />
                                    </div>
                                    <div className='d-flex align-items-center flex-column mt-4'>
                                        <p className='fs-16 searchText'>
                                            Məkan seçin
                                        </p>
                                        <p className='fs-14 infoIconP'>
                                            Özünüz seçin və axdarin.
                                        </p>
                                    </div>
                                </div>
                                <div className='infoMain'>
                                    <div className="infoIcon">
                                        <img src={images.calendar_info} alt="ThonCar-CalendarInfo" />
                                    </div>
                                    <div className='d-flex align-items-center flex-column mt-4'>
                                        <p className='fs-16 searchText2'>
                                            Qəbul tarixi
                                        </p>
                                        <p className='fs-14 infoIconP'>
                                            Alma tarixinizi seçin və
                                            avtomobilinizi bron etməyin vaxtıdır
                                        </p>
                                    </div>
                                </div>
                                <div className='infoMain'>
                                    <div className="infoIcon">
                                        <img src={images.car_info} alt="ThonCar-CarInfo" />
                                    </div>
                                    <div className='d-flex align-items-center flex-column mt-4'>
                                        <p className='fs-16 searchText2'>
                                            Avtomobilinizi seçin
                                        </p>
                                        <p className='fs-14 infoIconP'>
                                            Avtomobilinizi sifariş edin, biz ünvana
                                            birbaşa çatdıraq.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionTwo;
