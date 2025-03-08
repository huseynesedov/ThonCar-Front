import React from "react";
import { Route, Routes, useParams, Navigate } from "react-router-dom";

import Home from "../../../Pages/Home/index";
import Search from "../../../Pages/Search/search";
import AdditionalOptions from "../../../Pages/Additional/AdditionalOptions";

const Wrapper = ({ Component }) => {
  const { lang } = useParams();

  if (!["az", "en", "ru", "tr"].includes(lang)) {
    return <Navigate to="/az" />;
  }

  return <Component key={lang} lang={lang} />;
};

const RouteList = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <>
            <Routes>
              <Route path="/" element={<Navigate to="/az" />} />
              <Route path="/:lang" element={<Wrapper Component={Home} />} />
              <Route path="/:lang/search" element={<Wrapper Component={Search} />} />
              <Route path="/:lang/additional-options" element={<Wrapper Component={AdditionalOptions}/>}/>
            </Routes>
          </>
        }
      />
    </Routes>
  );
};

export default RouteList;