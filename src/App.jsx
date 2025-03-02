import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RouteList from './Components/Layout/Rotues/routes';

import { AuthProvider } from './Contexts/Login/loginContext';
import { DateProvider } from './Contexts/Date/dateContext';
import { LocationProvider } from './Contexts/Location/locationContext';

import Header from "./Components/Layout/Header/header";
import Footer from "./Components/Layout/Footer/footer";

function App() {
  return (
    <AuthProvider>
      <DateProvider>
        <LocationProvider>
          <BrowserRouter>

            <Header />
            <RouteList />
            <Footer />

          </BrowserRouter>
        </LocationProvider>
      </DateProvider>
    </AuthProvider>
  );
}

export default App;
