import { Box, Text } from '@chakra-ui/react';
import PageHeader from '../components/global/PageHeader';
import BottomNav from '../components/global/BottomNav';

const ProfilePage = () => {
  return (
    <di>
      <PageHeader PageTitle={'个人主页'}></PageHeader>
      <Box
        p={4}
        maxW="420px"
        mx="auto"
        bg="gray.50"
        style={{ height: 'calc(100vh - 72px )' }}
      >
        <Text fontSize="xl" fontWeight="bold">
          个人主页
        </Text>
        <Text color="gray.500">这里是个人主页，还没有内容。</Text>
      </Box>
      <BottomNav></BottomNav>
    </di>
  );
};

export default ProfilePage;
