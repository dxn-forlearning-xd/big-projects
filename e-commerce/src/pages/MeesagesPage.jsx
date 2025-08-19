import { Box, Text } from '@chakra-ui/react';
import PageHeader from '../components/PageHeader';
import BottomNav from '../components/BottomNav';

const MessagesPage = () => {
  return (
    <>
      <PageHeader PageTitle={'消息'}></PageHeader>
      <Box p={4}>
        <Text fontSize="xl" fontWeight="bold">
          消息页面
        </Text>
        <Text color="gray.500">这里还没有任何消息。</Text>
      </Box>
      <BottomNav></BottomNav>
    </>
  );
};

export default MessagesPage;
