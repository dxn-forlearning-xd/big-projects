import { Box, Text } from '@chakra-ui/react';
import PageHeader from '../components/global/PageHeader';
import BottomNav from '../components/global/BottomNav';

const MessagesPage = () => {
  return (
    <>
      <PageHeader PageTitle={'消息'}></PageHeader>
      <Box
        p={4}
        maxW="420px"
        mx="auto"
        bg="gray.50"
        style={{ height: 'calc(100vh - 72px )' }}
      >
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
