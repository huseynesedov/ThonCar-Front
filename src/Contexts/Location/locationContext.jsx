import React, { createContext, useContext, useState, useEffect } from 'react';

const LocationContext = createContext();

export const useLocationContext = () => {
  return useContext(LocationContext);
};

export const LocationProvider = ({ children }) => {
  const [locationId, setLocationId] = useState({});

  // Log the locationId whenever it changes
  useEffect(() => {
    if (Object.keys(locationId).length > 0) {
      console.log("Updated Location ID:", locationId);
    }
  }, [locationId]);  // Dependency array watches for changes to locationId

  return (
    <LocationContext.Provider value={{ 
      locationId,
      setLocationId
    }}>
      {children}
    </LocationContext.Provider>
  );
};
