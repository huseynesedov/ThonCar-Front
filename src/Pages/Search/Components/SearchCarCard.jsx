import React from 'react'
import images from '../../../Assets/Images/js/images'

// React Icons
import { TbManualGearboxFilled } from "react-icons/tb";
import { FaGasPump, FaRegIdCard, FaArrowRight } from "react-icons/fa6";
import { IoSpeedometerOutline } from "react-icons/io5";
import { MdOutlineDirectionsCar, MdOutlineStar  } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";


function SearchCarCard() {
    return (
        <div className='search-car-card'>
            <div className="search-card-top">
                <div className="search-card-image"><img src={images.searchCar} alt="" /></div>
                <div className="search-card-content">
                    <div className="search-card-content-left">
                        <div className="car-brand">
                            <div className="brand-image"><img src={images.brandLogo} alt="" />
                            </div>Renault Clio</div>
                        <div className="car-features">
                            <div className="car-features-left">
                                <h6><TbManualGearboxFilled /> Auto</h6>
                                <h6><FaGasPump /> Benzin</h6>
                                <h6><FaRegIdCard /> 4 qapı</h6>
                            </div>
                            <div className="car-features-right">
                                <h6><IoSpeedometerOutline /> 300 km/s</h6>
                                <h6><MdOutlineDirectionsCar /> Sedan</h6>
                                <h6><FaRegUser /> 5</h6>
                            </div>
                        </div>
                    </div>
                    <div className="search-card-content-right">
                        <h4>Günlük Qiymət: <h5>120 ₼</h5></h4>
                        <h3>4 günlük qiymət</h3>
                        <h2>450 ₼</h2>
                    </div>
                </div>
            </div>
            <div className="search-card-bottom">
                <div className="search-card-bottom-left">
                <div className="company-logo"><img src={images.companyLogo} alt="" /></div>
                <span><MdOutlineStar className='search-card-star' /> 4.8 <p>(2.436 reviews)</p></span>
                <h5>Depozit: 40%</h5>
                </div>
                <div className="search-card-buttons">
                    <button className='details-btn'>Details</button>
                    <button className='bron-btn'>İndi bron et<FaArrowRight/></button>
                </div>
            </div>
        </div>
    )
}

export default SearchCarCard