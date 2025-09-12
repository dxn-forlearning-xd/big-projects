import {
  Box,
  HStack,
  VStack,
  Text,
  Image,
  IconButton,
  Button,
  Input,
} from '@chakra-ui/react';
import { FiArrowLeft, FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function CartList() {
  const navigate = useNavigate();
  const { items, setQty, removeItem, subtotal } = useCart();

  return (
    <Box maxW="420px" bg="gray.50" mb="100px">
      <VStack spacing={4} p={4} align="stretch">
        {items.length === 0 ? (
          <Box p={6} color="gray.500" borderRadius="md" textAlign="center">
            购物车是空的
          </Box>
        ) : (
          items.map((item) => (
            <Box
              key={item.id}
              p={3}
              bg="white"
              borderRadius="md"
              boxShadow="0 4px 12px rgba(0, 0, 0, 0.08)"
            >
              <HStack align="flex-start">
                <Image src={item.thumbnail} boxSize="80px" borderRadius="md" />
                <VStack align="flex-start" flex={1} spacing={1}>
                  <Text fontWeight="bold" noOfLines={2}>
                    {item.title}
                  </Text>
                  <Text fontWeight="bold">￥{item.price}</Text>
                  <HStack>
                    <IconButton
                      size="sm"
                      onClick={() => setQty(item.id, item.qty - 1)}
                    >
                      <FiMinus />
                    </IconButton>
                    <Text w="28px" textAlign="center">
                      {item.qty}
                    </Text>
                    <IconButton
                      size="sm"
                      onClick={() => setQty(item.id, item.qty + 1)}
                    >
                      <FiPlus />
                    </IconButton>
                  </HStack>
                </VStack>
                <IconButton onClick={() => removeItem(item.id)}>
                  <FiTrash2 />
                </IconButton>
              </HStack>
            </Box>
          ))
        )}
      </VStack>
    </Box>
  );
}
export default CartList;
