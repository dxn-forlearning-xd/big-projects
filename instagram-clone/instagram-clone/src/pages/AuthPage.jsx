import { Box, Image, Container, Flex, VStack } from '@chakra-ui/react';

import AuthForm from '@/components/AuthForm/AuthForm';

const AuthPage = () => {
  return (
    <Flex minH={'100vh'} justifyContent={'Center'} alignItems={'center'}>
      <Container maxW={'container.md'} padding={0}>
        <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
          <Box display={{ base: 'none', md: 'block' }}>
            <Image src="./imgs/phoneimg.png" h={650} alt="phoneimg" />
          </Box>

          <VStack spacing={4} align={'stretch'}>
            <AuthForm />
            <Box textAlign={'center'}>Get the app.</Box>
            <Flex gap={5} justifyContent={'center'}>
              <Image
                src="./imgs/playstore.png"
                height={10}
                alt="playstore logo"
              ></Image>
              <Image
                src="./imgs/microsoft.png"
                height={10}
                alt="microsoft logo"
              ></Image>
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
