import React, { useState, useEffect, useRef } from "react";
import { FaCity, FaAngleDown, FaAngleUp, FaTrainSubway } from "react-icons/fa6";
import { SiOpenstreetmap } from "react-icons/si";
import images from "../../../../../../Assets/Images/js/images";
import { useLocationContext } from "../../../../../../Contexts/Location/locationContext";

const locations = {
    city: {
        key: "city",
        icon: <FaCity className="locationDrop-icon" />,
        title: "Şəhər",
        items: ["Bakı", "Gəncə", "Sumqayıt"],
    },
    metro: {
        key: "metro",
        icon: <FaTrainSubway className="locationDrop-icon" />,
        title: "Metro",
        items: [
            { name: "28 May", logo: images.metro_logo },
            { name: "Nizami", logo: images.metro_logo },
            { name: "Elmlər Akademiyası", logo: images.metro_logo },
        ],
    },
    street: {
        key: "street",
        icon: <SiOpenstreetmap className="locationDrop-icon" />,
        title: "Küçə",
        items: ["Nizami", "İstiqlaliyyət", "Füzuli"],
    },
};

const LocationDropdown = ({ closeDropdown }) => {
    const { locationId, setLocationId } = useLocationContext();
    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRef = useRef(null);

    // Close dropdown when clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown(); // Close dropdown if click is outside
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [closeDropdown]);

    const toggleDropdown = (key) => {
        setOpenDropdown(openDropdown === key ? null : key); // Toggle dropdown visibility
    };

    const handleItemClick = (category, item) => {
        setLocationId(item);  // Set the selected item
        closeDropdown();  // Close the dropdown after selecting an item
    };

    return (
        <div ref={dropdownRef} className="d-flex flex-column position-absolute locationDropMain">
            {Object.values(locations).map(({ key, icon, title, items }) => (
                <div key={key}>
                    <div
                        className="d-flex justify-content-between locationDrop align-items-center"
                        onClick={() => toggleDropdown(key)} // Toggle category dropdown visibility
                    >
                        <div className="d-flex align-items-center">
                            {icon}
                            <p className="ms-3">{title}</p>
                        </div>
                        {openDropdown === key ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                    {openDropdown === key && (
                        <div className="dropdown-content">
                            {key === "metro"
                                ? items.map(({ name, logo }, index) => (
                                    <div key={index} className="d-flex align-items-center my-2" onClick={() => handleItemClick(key, name)}>
                                        <img src={logo} className="w-100 metro-logo" alt={`ThonCar-${name}`} />
                                        <p className="ms-2">{name}</p>
                                    </div>
                                ))
                                : items.map((name, index) => (
                                    <p key={index} onClick={() => handleItemClick(key, name)}>{name}</p>
                                ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default LocationDropdown;
