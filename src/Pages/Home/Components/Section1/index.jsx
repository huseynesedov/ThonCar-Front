import React, { useEffect, useRef, useState } from "react";
import { useDateContext } from "../../../../Contexts/Date/dateContext";
import DatePicker from "react-datepicker";
import images from "../../../../Assets/Images/js/images";
import { useParams, useNavigate } from "react-router-dom";
// import LocationDropdown from "./Components/location/location";
import '../../../../Assets/Styles/homeStyle.css'


const SectionOne = () => {
  const { startDate1, setStartDate1, startDate2, setStartDate2, tomorrow } = useDateContext();
  const { lang } = useParams();
  const navigate = useNavigate();

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const locationRef = useRef(null);
  const datePickerContainerRef1 = useRef(null);
  const datePickerContainerRef2 = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!startDate1) return;

    const minReturnDate = new Date(startDate1);
    minReturnDate.setDate(startDate1.getDate() + 1);

    if (!startDate2 || startDate2 < minReturnDate) {
      setStartDate2(minReturnDate);
    }
  }, [startDate1]);




  const handleSearch = () => {
    if (!startDate1 || !startDate2) return;

    const formattedStartDate = startDate1.toISOString().split("T")[0];
    const formattedEndDate = startDate2.toISOString().split("T")[0];

    navigate(`/${lang}/search?locationId=&startDate=${formattedStartDate}&endDate=${formattedEndDate}`);
  };

  return (
    <section className="homeBgImage">
      <div className="myContainer">
        <div className="row">
          <div className="col-md-12 d-flex flex-column align-items-center justify-content-center">
            <h2 className="searchText fs-60 mt-5">Axtar, Tap və Kirala!</h2>
            <h4 className="searchText fw-400 mt-2">Sənin üçün ən uyğun vasitəçi.</h4>
          </div>
        </div>

        <div className="row bg-white searchContainer align-items-center" style={{ marginTop: "70px" }}>
          {/* Məkan Seçimi (İç-içə Dropdown) */}
          <div
            ref={locationRef}
            className="col-12 col-md-3 border_right d-flex align-items-center py-3 position-relative"
            
          >
            <img src={images.location_home} alt="ThonCar-Location" />
            <div className="d-flex flex-column ms-2" style={{ cursor: "pointer" }}>
              <p className="fs-16 searchText">Məkan</p>
              <p className="fs-14 searchPText">Məkanınızı seçin</p>
            </div>
           
          </div>


          {/* Alma tarixi */}
          <div ref={datePickerContainerRef1} className="col-12 col-md-3 border_right d-flex align-items-center py-3" onClick={() => setIsOpen1((prev) => !prev)}>
            <img src={images.calendar_home} alt="ThonCar-Calendar" />
            <div className="d-flex flex-column ms-2">
              <p className="fs-16 searchText">Alma tarixi</p>
              <DatePicker selected={startDate1} onChange={setStartDate1} dateFormat="dd.MM.yyyy" className="date-picker-input" minDate={tomorrow} />
            </div>
          </div>

          {/* Qayidiş tarixi */}
          <div ref={datePickerContainerRef2} className="col-12 col-md-3 border_right d-flex align-items-center py-3" onClick={() => setIsOpen2((prev) => !prev)}>
            <img src={images.calendar_home} alt="ThonCar-Calendar" />
            <div className="d-flex flex-column ms-2">
              <p className="fs-16 searchText">Qayidiş tarixi</p>
              <DatePicker selected={startDate2} onChange={setStartDate2} dateFormat="dd.MM.yyyy" className="date-picker-input" minDate={new Date(startDate1.getTime() + 24 * 60 * 60 * 1000)} />
            </div>
          </div>

          {/* Axtar Button */}
          <div className="col-12 col-md-3 justify-content-center d-flex py-3">
            <button className="search w-100" onClick={handleSearch}>Axdar</button>
          </div>
        </div>

        <div style={{ paddingBottom: "80px" }}></div>
      </div>
    </section>
  );
};

export default SectionOne;
