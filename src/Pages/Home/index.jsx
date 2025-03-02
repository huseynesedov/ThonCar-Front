import React from 'react';

import SectionOne from './Components/Section1';
import SectionTwo from './Components/Section2';
import BrandList from './Components/Brand-List';
import SectionTheree from './Components/Section3';
import Map from './Components/Map';
import '../../Assets/Styles/homeStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

  return (
    <>
      <SectionOne />
      <SectionTwo />
      <BrandList />
      <SectionTheree />
      <Map />
    </>
  )


}

export default Home;
