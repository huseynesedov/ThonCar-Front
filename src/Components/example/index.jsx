import React, { useState, useRef, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";


const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Özel ikon URL'si
  iconSize: [32, 32], // İkon boyutu
  iconAnchor: [16, 32], // İkonun haritada hizalanma noktası
});

const Product360View = ({ images = [] }) => { // images için varsayılan boş dizi
  const [currentImage, setCurrentImage] = useState(0);
  const isDragging = useRef(false); // Sürüklenme durumunu takip eder
  const startX = useRef(0); // Fare başlangıç X konumunu tutar
  const currentX = useRef(0); // Fare hareketi sırasında X konumunu tutar
 




  const [activeUser, setActiveUser] = useState(null);

  const position = [40.4093, 49.8671]; // Bakü koordinatları
  const users = [
    {
      id: 1,
      name: "Ali Veli",
      email: "ali.veli@example.com",
      phone: "+994 50 123 45 67",
      position: [40.4093, 49.8671],
    },
    {
      id: 2,
      name: "Aysel Meherremova",
      email: "aysel.m@example.com",
      phone: "+994 51 987 65 43",
      position: [40.4185, 49.8322],
    },
  ];

  const handleMarkerClick = (user) => {
    setActiveUser(user); // Tıklanan kullanıcıyı güncelle
  };





  // Eğer images dizisi boşsa, hata vermez, boş bir ekran gösterir.
  useEffect(() => {
    if (images.length === 0) {
      console.warn("No images available for 360 view.");
    }
  }, [images]);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || images.length === 0) return;

    const deltaX = e.clientX - startX.current; // Hareket mesafesi
    if (Math.abs(deltaX) > 10) {
      const direction = deltaX > 0 ? -1 : 1; // Hareket yönü
      setCurrentImage((prev) => (prev + direction + images.length) % images.length);
      startX.current = e.clientX; // Yeni başlangıç pozisyonunu ayarla
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <>
      <div
      className="view360-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {images.length > 0 ? (
        <img
          src={images[currentImage]}
          alt={`Product ${currentImage}`}
          className="view360-image"
        />
      ) : (
        <p>No images available for 360 view</p> // Eğer resimler yoksa, uyarı mesajı göster
      )}
    </div>

<MapContainer
      center={position}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {users.map((user) => (
        <Marker
          key={user.id}
          position={user.position}
          icon={customIcon}
          eventHandlers={{
            click: () => handleMarkerClick(user),
          }}
        >
          {activeUser && activeUser.id === user.id && (
            <Popup>
              <div>
                <p><strong>Ad:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Telefon:</strong> {user.phone}</p>
              </div>
            </Popup>
          )}
        </Marker>
      ))}
    </MapContainer>
    </>
  

    
  );
};

export default Product360View;




import React from "react";
import Product360View from "../Home/index";

const App = () => {
  // Ürünün her açıdan çekilmiş fotoğraflarını doğru şekilde ekleyin
  const productImages = [
    "/images/product1.jpg",
    "/images/product2.jpg",
    "/images/product3.jpg",
    "/images/product4.jpg",
    "/images/product5.jpg",
    "/images/product6.jpg",
    // Tüm 360 derece için yeterli görüntüyü ekleyin
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>360° Product View</h1>
      <Product360View images={productImages} />
    </div>
  );
};

