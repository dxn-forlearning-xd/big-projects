import React from 'react';
import { Box } from '@chakra-ui/react';

import Header from '../components/Home/Header';
import Slider from '../components/Home/Slider';
import Categories from '../components/Home/Categories';
import RecommendProducts from '../components/Home/RecommendProducts';
import BottomNav from '../components/BottomNav';

const Homepage = () => {
  return (
    <>
      <Header></Header>
      <Slider></Slider>
      <Categories></Categories>
      <RecommendProducts></RecommendProducts>
      <BottomNav></BottomNav>
    </>
  );
};

export default Homepage;
