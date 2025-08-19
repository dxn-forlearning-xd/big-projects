import { Box, Text } from '@chakra-ui/react';
import PageHeader from '../components/PageHeader';
import BottomNav from '../components/BottomNav';

const ProfilePage = () => {
  return (
    <>
      <PageHeader PageTitle={'个人主页'}></PageHeader>
      <Box p={4}>
        <Text fontSize="xl" fontWeight="bold">
          个人主页
        </Text>
        <Text color="gray.500">这里是个人主页，还没有内容。</Text>
      </Box>
      <BottomNav></BottomNav>
    </>
  );
};

export default ProfilePage;
