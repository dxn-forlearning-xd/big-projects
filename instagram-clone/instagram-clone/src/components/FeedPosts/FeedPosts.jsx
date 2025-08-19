import { Box, Container, Flex } from '@chakra-ui/react';

import FeedPost from './FeedPost';

const FeedPosts = () => {
  return (
    <Container maxW={'container.sm'} py={10} px={20}>
      <FeedPost img="imgs/11.jpg" username="Jial Sioah " avatar="/1.png" />
      <FeedPost img="imgs/22.jpg" username="Caiop Hlso" />
      <FeedPost img="imgs/33.jpg" username="Bidoal Chaik " avatar="/3.jpg" />
      <FeedPost img="imgs/44.jpg" username="Ovk Iszv " avatar="/4.jpg" />
    </Container>
  );
};

export default FeedPosts;
