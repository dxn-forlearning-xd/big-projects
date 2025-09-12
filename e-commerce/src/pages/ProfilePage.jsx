import { Box, Text, Image, Flex, VStack, Button } from '@chakra-ui/react';
import PageHeader from '../components/global/PageHeader';
import BottomNav from '../components/global/BottomNav';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const user = {
    name: 'Demo 用户',
    avatar: 'avatar.jpg',
  };

  return (
    <Box>
      <PageHeader PageTitle="个人主页" />

      <Box p={4} maxW="420px" mx="auto" bg="gray.50" minH="calc(100vh - 72px)">
        {/* 用户信息区域 */}
        <Flex direction="column" align="center" mb={6}>
          <Image
            src={user.avatar}
            alt={user.name}
            boxSize="80px"
            borderRadius="50%"
            objectFit="cover"
            mb={4}
          />
          <Text fontSize="2xl" fontWeight="bold">
            {user.name}
          </Text>
          <Text color="gray.500" mt={1}>
            欢迎回来！
          </Text>
        </Flex>

        {/* 功能入口区域 */}
        <VStack spacing={4} mb={6}>
          <Button
            w="100%"
            bg="#27AE60"
            color="white"
            borderRadius="md"
            _hover={{ bg: '#219150' }}
            onClick={() => navigate('/orders')}
          >
            我的订单
          </Button>
          {/* 可以在这里加其他功能入口，比如收藏、优惠券等 */}
        </VStack>

        {/* 登出按钮放在底部 */}
        <Button
          w="100%"
          bg="gray.300"
          borderRadius="md"
          _hover={{ bg: 'gray.400' }}
          onClick={() => {
            setIsLoggedIn(false);
            navigate('/login');
          }}
        >
          登出
        </Button>
      </Box>

      <BottomNav />
    </Box>
  );
};

export default ProfilePage;
