import { Box, Text, VStack, HStack, Button, Badge } from '@chakra-ui/react';
import PageHeader from '../components/global/PageHeader';
import BottomNav from '../components/global/BottomNav';

const OrdersPage = () => {
  // 静态订单数据
  const orders = [
    {
      id: '1001',
      product: 'Demo 商品 A',
      date: '2025-09-12',
      amount: 2,
      total: 199.9,
      status: '已发货',
    },
    {
      id: '1002',
      product: 'Demo 商品 B',
      date: '2025-09-10',
      amount: 1,
      total: 99.9,
      status: '待支付',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case '已发货':
        return 'green';
      case '待支付':
        return 'orange';
      case '已完成':
        return 'blue';
      case '取消':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <Box>
      <PageHeader PageTitle="我的订单" />
      <Box p={4} maxW="420px" mx="auto" minH="calc(100vh - 72px)" bg="gray.50">
        <VStack spacing={4} align="stretch">
          {orders.map((order) => (
            <Box
              key={order.id}
              p={4}
              bg="white"
              borderRadius="md"
              boxShadow="sm"
            >
              <HStack justifyContent="space-between" mb={2}>
                <Text fontWeight="bold">{order.product}</Text>
                <Badge colorScheme={getStatusColor(order.status)}>
                  {order.status}
                </Badge>
              </HStack>
              <Text fontSize="sm" color="gray.500">
                订单号: {order.id}
              </Text>
              <Text fontSize="sm" color="gray.500">
                下单日期: {order.date}
              </Text>
              <Text fontSize="sm" color="gray.500">
                数量: {order.amount}
              </Text>
              <Text fontSize="sm" color="gray.500">
                总价: ¥{order.total}
              </Text>
              {order.status === '待支付' && (
                <Button mt={2} colorScheme="teal" size="sm">
                  去支付
                </Button>
              )}
            </Box>
          ))}
        </VStack>
      </Box>
      <BottomNav />
    </Box>
  );
};

export default OrdersPage;
