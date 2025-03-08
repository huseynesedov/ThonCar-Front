import React from 'react'

import "../../Assets/Styles/noResultStyle.css"
import images from '../../Assets/Images/js/images'

function NoResult() {
    return (
        <section>
            <div className="myContainer">
                <div className="no-result">
                    <div className="no-result-img"><img src={images.noResult} alt="" /></div>
                    <h1>Təəsüf... Nəticə Tapılmadı</h1>
                    <p>Axtarış edərkən avtomobilin adını düzgün yazdığınızdan əmin olun vəya digər seçimlərə baxın</p>
                    <div className="no-result-buttons">
                        <a href="#"><button className='first-btn'>Digər seçimlər</button></a>
                        <a href="#"><button className='second-btn'>Ana səhifəyə qayıt</button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NoResult