import React from 'react';
import { Box } from '@chakra-ui/react';

import Header from '../components/Home/Header';
import Slider from '../components/Home/Slider';
import Categories from '../components/Home/Categories';
import RecommendProducts from '../components/Home/RecommendProducts';
import BottomNav from '../components/global/BottomNav';

const Homepage = () => {
  return (
    <Box p={4} maxW="400px" mx="auto" bg="gray.50">
      <Header></Header>
      <Slider></Slider>
      <Categories></Categories>
      <RecommendProducts></RecommendProducts>
      <BottomNav></BottomNav>
    </Box>
  );
};

export default Homepage;
