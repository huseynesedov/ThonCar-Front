import React from 'react';
import images from '../../../../Assets/Images/js/images';

const SectionThree = () => {
    return (
        <section className="position-relative mt-5">
            <div className="myContainer d-flex align-items-center flex-column">
                <div className="text-center work_to">
                    <p className="fs-14 fw-500">
                        Niyə bizi seçməlisiz
                    </p>
                </div>
                <div className="row align-items-center justify-content-between py-4">
                    {/* Sol tərəf */}
                    <div className="col-12 col-md-4 mb-4 mb-md-0">
                        <div className='mb-4 infoMain3'>
                            <h6 className='infoMainTexth6'>Ən yaxşı qiymətə zəmanət verilir</h6>
                            <p className='infoMainTextP'>Maşınınızı online pulsuz rezerv edə, məbləği isə avtomobilinizi götürən zaman ödəyə bilərsiniz.</p>
                        </div>
                        <div className='mb-4 infoMain3'>
                            <h6 className='infoMainTexth6'>Təcrübəli sürücü</h6>
                            <p className='infoMainTextP'>Sürücü yoxdur? Narahat olmayın, bizdə çoxdur :)</p>
                        </div>
                        <div className='mb-4 infoMain3'>
                            <h6 className='infoMainTexth6'>24 saat maşın çatdırılma</h6>
                            <p className='infoMainTextP'>Siz istədiyiniz vaxt bron edin, biz birbaşa çatdıraq sizə.</p>
                        </div>
                        <div className='mb-4 infoMain3'>
                            <h6 className='infoMainTexth6'>24/7 texniki dəstək</h6>
                            <p className='infoMainTextP'>Sual vəya probleminiz var? Rentcars dəstəyi hər zaman xidmətinizdədir</p>
                        </div>
                    </div>

                    {/* Şəkil */}
                    <div className="col-12 col-md-3 text-center mb-4 mb-md-0 d-none d-md-block">
                        <img className="img-fluid" src={images.prius} alt="ThonCar-Prius" style={{ maxWidth: "100%", height: "auto" }} />
                    </div>

                    {/* Sağ tərəf */}
                    <div className="col-12 col-md-4">
                        <div className='mb-4 infoMain3'>
                            <h6 className=' infoMainTexth66'>Pulsuz ləğvetmə</h6>
                            <p className='infoMainTextP'>Bütün rezervasiyalarınız üçün pulsuz ləğv.</p>
                        </div>
                        <div className='mb-4 infoMain3'>
                            <h6 className=' infoMainTexth66'>Asan və Təhlükəsiz Kirayə</h6>
                            <p className='infoMainTextP'>Korporativ və fərdi müştəri məmnuniyyətinə əhəmiyyət verən şirkətlərdən təhlükəsiz avtomobil icarəsi imkanı.</p>
                        </div>
                        <div className='mb-4 infoMain3'>
                            <h6 className=' infoMainTexth66'>Yüzlərlə Brend və Modellər</h6>
                            <p className='infoMainTextP'>Korporativ şirkətlərdən müxtəlif marka və model avtomobilləri siyahıya almaq və icarəyə götürmək imkanı.</p>
                        </div>
                        <div className='mb-4 infoMain3'>
                            <h6 className=' infoMainTexth66'>24/7 texniki dəstək</h6>
                            <p className='infoMainTextP'>Sual vəya probleminiz var? Rentcars dəstəyi hər zaman xidmətinizdədir</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionThree;
