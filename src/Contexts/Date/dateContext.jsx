import React, { createContext, useContext, useState } from 'react';

const DateContext = createContext();

export const useDateContext = () => {
  return useContext(DateContext);
};

export const DateProvider = ({ children }) => {
  const today = new Date();
  
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() );
  
  const [startDate1, setStartDate1] = useState(tomorrow);
  const [startDate2, setStartDate2] = useState(() => {
    const defaultReturnDate = new Date(tomorrow);
    defaultReturnDate.setDate(tomorrow.getDate());
    return defaultReturnDate;
  });


  return (
    <DateContext.Provider value={{ 
      startDate1, 
      setStartDate1, 
      startDate2, 
      setStartDate2, 
      tomorrow, 
    }}>
      {children}
    </DateContext.Provider>
  );
};
