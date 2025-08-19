import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import {
  InstagramLogo,
  InstagramMobileLogo,
  CreatePostLogo,
  NotificationsLogo,
  SearchLogo,
  Avatar,
} from '../../assets/constants';
import { AiFillHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { Tooltip } from '@/components/ui/tooltip';

const SideBar = () => {
  const sidebarItems = [
    { icon: <AiFillHome size={25} />, text: 'Home', link: '/' },
    {
      icon: <SearchLogo />,
      text: 'Search',
    },
    {
      icon: <NotificationsLogo />,
      text: 'Notifications',
    },
    {
      icon: <CreatePostLogo />,
      text: 'Create',
    },
    {
      icon: <Avatar size={'sm'} name="xd" src="./imgs/profilepic.jpg" />,
      text: 'Profile',
      link: '/asaprogrammer',
    },
  ];
  return (
    <Box
      height={'100vh'}
      borderRight={'1px solid'}
      borderColor={'gray.200'}
      py={8}
      position={'Sticky'}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={'column'} gap={10} w={'full'} height={'full'}>
        <Link
          to={'/'}
          as={RouterLink}
          pl={2}
          display={{ base: 'none', md: 'block' }}
          cursor={'pointer'}
        >
          <InstagramLogo />
        </Link>
        <Link
          to={'/'}
          as={RouterLink}
          pl={2}
          display={{ base: 'block', md: 'none' }}
          borderRadius={6}
          cursor={'pointer'}
          _hover={{ bg: 'gray.100' }}
          w={10}
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={'column'} gap={5} cursor={'pointer'}>
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: 'block', md: 'none' }}
            >
              <Link
                display={'flex'}
                to={item.link || '#'}
                as={RouterLink}
                alignItems={'center'}
                gap={4}
                _hover={{ bg: 'gray.500', color: 'white' }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: 'full' }}
                justifyContent={{ base: 'center', md: 'flex-start' }}
              >
                {item.icon}
                <Box display={{ base: 'none', md: 'block' }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>
        <Tooltip
          hasArrow
          label={'Log out'}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: 'block', md: 'none' }}
        >
          <Link
            display={'flex'}
            to={'/auth'}
            as={RouterLink}
            alignItems={'center'}
            gap={4}
            _hover={{ bg: 'gray.500', color: 'white' }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: 'full' }}
            justifyContent={{ base: 'center', md: 'flex-start' }}
            mt={'auto'}
          >
            <BiLogOut size={25} />
            <Box display={{ base: 'none', md: 'block' }}>Log Out</Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default SideBar;
