import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const MapComponent = () => {
    const [selectedMarker, setSelectedMarker] = useState(null);


    

    const coordinates = [
        { lat: 40.3987968, lng: 49.8622502, info: "Location 1: Bakı" },
        { lat: 40.3997968, lng: 49.8623502, info: "Location 2: Sumqayit" },
        { lat: 40.4007968, lng: 49.8624502, info: "Location 3: Ganja" },
    ];

    const handleMarkerClick = (coordinate) => {
        setSelectedMarker(coordinate);
    };

    return (
        <section>
            <div className="myContainer mt-5">
                <div className="row">
                    <h4 className="fs-344 MapText my-5">Sizə yaxın ünvandayıq !</h4>

                    <LoadScript googleMapsApiKey={apiKey}>
                        <GoogleMap
                            id="example-map"
                            mapContainerStyle={{ width: "100%", height: "400px" }}
                            center={{ lat: 40.4299968, lng: 49.9622502 }} // Istifadecinin mekani varsa, yoxdursa onu merkez edir
                            zoom={11}
                        >
                           

                            {/* Şirketlerin mekanları */}
                            {coordinates.map((coordinate, index) => (
                                <Marker
                                    key={index}
                                    position={{ lat: coordinate.lat, lng: coordinate.lng }}
                                    title={`Location ${index + 1}`}
                                    onClick={() => handleMarkerClick(coordinate)}
                                />
                            ))}

                        
                            {selectedMarker && (
                                <InfoWindow
                                    position={{
                                        lat: selectedMarker.lat,
                                        lng: selectedMarker.lng,
                                    }}
                                    onCloseClick={() => setSelectedMarker(null)}
                                >
                                    <div>
                                        <h5>{selectedMarker.info}</h5>
                                    </div>
                                </InfoWindow>
                            )}
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </section>
    );
};

export default MapComponent;
