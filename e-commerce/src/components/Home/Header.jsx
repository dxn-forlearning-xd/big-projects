import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiSearch, CiCamera } from 'react-icons/ci';
import { IoIosQrScanner } from 'react-icons/io';
import { VscBell } from 'react-icons/vsc';
import { Input, Box, IconButton } from '@chakra-ui/react';
import { toaster } from '../ui/toaster';

const Header = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (keyword.trim()) {
      navigate(`/search?q=${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      maxW="400px"
      mx="auto"
      py={4}
      bg="#ffffff"
      position="sticky"
      top={0}
      zIndex="1000"
    >
      <IconButton
        aria-label="扫码"
        borderRadius="50px"
        bg="gray.200"
        mr={4}
        ml={4}
        onClick={() =>
          toaster.create({
            title: '扫码',
            description: '打开扫码功能',
            type: 'success',
            duration: 2000,
          })
        }
      >
        <IoIosQrScanner />
      </IconButton>
      <IconButton
        aria-label="识图"
        onClick={() =>
          toaster.create({
            title: '识图',
            description: '打开识图功能',
            type: 'success',
            duration: 2000,
          })
        }
        bg="gray.200"
        borderTopLeftRadius="md"
        borderBottomLeftRadius="md"
        borderTopRightRadius="0"
        borderBottomRightRadius="0"
      >
        <CiCamera />
      </IconButton>

      <Input
        placeholder="搜索"
        borderRadius="0"
        bg="gray.200"
        border="none"
        _focus={{
          border: 'none',
          boxShadow: 'none',
          outline: 'none',
        }}
        onChange={(e) => setKeyword(e.target.value)}
      ></Input>
      <IconButton
        onClick={handleSearch}
        aria-label="搜索"
        bg="#27AE60"
        color="#ffffff"
        borderTopLeftRadius="0"
        borderBottomLeftRadius="0"
        borderTopRightRadius="md"
        borderBottomRightRadius="md"
      >
        <CiSearch />
      </IconButton>

      <IconButton
        borderRadius="50px"
        bg="gray.200"
        aria-label="通知"
        mr={4}
        ml={4}
      >
        <VscBell />
      </IconButton>
    </Box>
  );
};

export default Header;
