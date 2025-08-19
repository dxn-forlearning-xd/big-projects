import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  Skeleton,
  SkeletonText,
  Spinner,
} from '@chakra-ui/react';
import { fetchWithTimeoutAndFallback } from '../../utils/api';

const RecommendProducts = () => {
  const navigate = useNavigate();
  function shuffleArray(arr) {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  }

  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loadingMore, setLoadingMore] = useState(false);

  const loaderRef = useRef(null);

  useEffect(() => {
    fetchWithTimeoutAndFallback(
      'https://dummyjson.com/products?limit=100',
      '/products-fallback.json',
      { timeout: 5000 }
    ).then((data) => {
      const shuffled = shuffleArray(data.products);
      setProducts(shuffled);
    });
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && visibleCount < products.length) {
          setLoadingMore(true);
          setTimeout(() => {
            setVisibleCount((prev) => prev + 4);
            setLoadingMore(false);
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [visibleCount, products.length]);

  return (
    <>
      <Text mt="10px" pl={8} color={'#123924'} fontSize="xl" fontWeight="bold">
        商品推荐
      </Text>
      <Box mb="80px">
        <Grid templateColumns="repeat(2, 1fr)">
          {products.length === 0 ? (
            <>
              {Array.from({ length: 6 }).map((_, i) => (
                <GridItem key={i}>
                  <Box p={4} textAlign="center">
                    <Skeleton h="120px" borderRadius="lg" />
                    <SkeletonText mt={3} noOfLines={2} spacing="2" />
                    <Skeleton mt={2} h="16px" w="60px" />
                  </Box>
                </GridItem>
              ))}
            </>
          ) : (
            products.slice(0, visibleCount).map((product) => (
              <GridItem key={product.id}>
                <Box
                  p={4}
                  textAlign="center"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <Image
                    src={product.thumbnail}
                    borderRadius="lg"
                    boxShadow="0 4px 12px rgba(0, 0, 0, 0.08)"
                    bg="white"
                  />

                  <Text
                    mt={3}
                    fontSize="sm"
                    fontWeight="medium"
                    color="gray.700"
                    noOfLines={2}
                    textAlign="center"
                  >
                    {product.title}
                  </Text>

                  <Text
                    mt={1}
                    fontSize="sm"
                    fontWeight="bold"
                    color="green.600"
                    textAlign="center"
                  >
                    ￥{product.price}
                  </Text>
                </Box>
              </GridItem>
            ))
          )}
        </Grid>
      </Box>

      <Box ref={loaderRef} textAlign="center" py={4}>
        {loadingMore && <Spinner />}
      </Box>
    </>
  );
};

export default RecommendProducts;
