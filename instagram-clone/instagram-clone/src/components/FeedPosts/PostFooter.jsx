import { Flex, Box, Text, Input, InputAddon, Button } from '@chakra-ui/react';

import { useState } from 'react';
import { NotificationsLogo, UnlikeLogo, CommentLogo } from '@/assets/constants';

const PostFooter = ({ username }) => {
  const [liked, Setliked] = useState(false);
  const [likes, setLikes] = useState(1000);
  const handleLike = () => {
    if (liked) {
      Setliked(false);
      setLikes(likes - 1);
    } else {
      Setliked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <Box mb={10}>
      <Flex alignItems={'center'} gap={4} w={'full'} pt={0} mb={2} mt={'4'}>
        <Box onClick={handleLike} cursor={'pointer'} fontSize={17}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        <Box cursor={'pointer'} fontSize={18}>
          <CommentLogo />
        </Box>

        <Text fontWeight={600} fontSize={'sm'}>
          {likes} likes
        </Text>
      </Flex>
      <Text fontWeight={600} fontSize={'sm'}>
        {likes} likes
      </Text>
      <Text fontWeight={700} fontSize={'sm'}>
        {username} {''}
        <Text as="span" fontWeight={400}>
          Feeling good
        </Text>
      </Text>
      <Text color={'gray'} fontSize={'sm'}>
        View all 1,000 comments
      </Text>

      <Flex
        alignItems={'center'}
        gap={2}
        justifyContent={'space-between'}
        w={'full'}
      >
        <Input
          variant={'flushed'}
          placeholder={'Add a comment...'}
          fontSize={14}
        ></Input>

        <InputAddon p={0} border="none">
          <Button size="sm">Post</Button>
        </InputAddon>
      </Flex>
    </Box>
  );
};

export default PostFooter;
