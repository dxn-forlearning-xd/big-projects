import { Flex, Box } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import SideBar from '@/components/SideBar/SideBar';

const PageLayouts = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <Flex>
      {/* sidebar */}
      {pathname !== '/auth' ? (
        <Box w={{ base: '70px', md: '240px' }}>
          <SideBar />
        </Box>
      ) : null}
      {/* content  */}

      <Box flex={1} w={{ base: 'calc(100%-70px', md: 'calc(100%-240p)' }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayouts;
