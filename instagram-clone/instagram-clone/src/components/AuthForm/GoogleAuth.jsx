import { Flex, Image, Text } from '@chakra-ui/react';

const GoogleAuth = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
      <Image src="./imgs/google.png" w={5} alt="google logo" />
      <Text mx="2" color={'blue.700'}>
        Log in with Google
      </Text>
    </Flex>
  );
};

export default GoogleAuth;
