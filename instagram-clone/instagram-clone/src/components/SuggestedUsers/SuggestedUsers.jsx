import { VStack, Flex, Text, Box, Link } from '@chakra-ui/react';
import SuggestedHeader from './SuggestedHeader';
import SuggestedUser from './SuggestedUser';

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
        <Text fontsize={12} fontWeight={'bold'} color={'gray.400'}>
          Suggested for you
        </Text>
        <Text
          fontsize={12}
          fontWeight={'bold'}
          color={'gray.800'}
          cursor={'pointer'}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser name="Zdev Yacue" followers={18962} />
      <SuggestedUser name="Mvuaid Qvu" followers={2651} />
      <SuggestedUser name="Cztu Rcyin" followers={450} />
      <Box alignSelf={'start'} fontsize={12} color={'gray.500'} mt={5}>
        Built by {''}
        <Link
          href="https://github.com/dxn-forlearning-xd/big-projects/tree/main/Instagram-clone"
          target="_blank"
          color="blue.400"
          fontSize={14}
        >
          Xiaonan Dong
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
