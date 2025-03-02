import React from "react";
import Slider from "react-slick";

const CarCarousel = () => {
  const carLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
    "https://via.placeholder.com/150?text=Logo+3",
    "https://via.placeholder.com/150?text=Logo+4",
    "https://via.placeholder.com/150?text=Logo+5",
    "https://via.placeholder.com/150?text=Logo+6",
    "https://via.placeholder.com/150?text=Logo+7",
    "https://via.placeholder.com/150?text=Logo+8",
    "https://via.placeholder.com/150?text=Logo+9",
  ];

  const settings = {
    dots: false,          // Noktaları gizler
    arrows: false,        // Sağ ve sol okları gizler
    autoplay: true,       // Otomatik oynatma
    autoplaySpeed: 2000,  // 2 saniyede bir kayar
    infinite: true,       // Sonsuz döngü
    speed: 1000,          // Kayma hızı
    slidesToShow: 8,      // Varsayılan olarak 7 logo gösterir
    slidesToScroll: 1,    // Kaç logo kayacağını belirler
    rtl: true,            // Sağdan sola kayma
    responsive: [
      {
        breakpoint: 1024, // 1024px ve altı ekran genişliklerinde
        settings: {
          slidesToShow: 5, // 5 logo gösterir
        },
      },
      {
        breakpoint: 768,  // 768px ve altı ekran genişliklerinde
        settings: {
          slidesToShow: 3, // 3 logo gösterir
        },
      },
      {
        breakpoint: 480,  // 480px ve altı ekran genişliklerinde
        settings: {
          slidesToShow: 3, // 2 logo gösterir
        },
      },
    ],
  };

  return (
    <div className="mt-5" style={{ width: "98%", margin: "0 auto" }}>
      <Slider {...settings}>
        {carLogos.map((logo, index) => (
          <div key={index}>
            <img
              src={logo}
              alt={`ThonCar-${index + 1}`}
              className="BrandImg"
              style={{
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarCarousel;
