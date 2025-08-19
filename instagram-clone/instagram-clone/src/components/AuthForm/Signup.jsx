import { Input } from '@chakra-ui/react';
import { useState } from 'react';
import { InputGroup } from '../ui/input-group';
import { Button } from '@chakra-ui/react';
import useSignupWithEmailAndPassword from '../../../useSignupWithEmailAndPassword';

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, signup } = useSignupWithEmailAndPassword();
  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        type="email"
        value={inputs.email}
        size={'sm'}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      ></Input>

      <Input
        placeholder="User Name"
        fontSize={14}
        type="text"
        value={inputs.fullName}
        size={'sm'}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
      ></Input>
      <Input
        placeholder="Full Name"
        fontSize={14}
        type="text"
        value={inputs.username}
        size={'sm'}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      ></Input>

      <Input
        placeholder="Password"
        fontSize={14}
        type={showPassword ? 'text' : 'password'}
        value={inputs.password}
        size={'sm'}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      ></Input>

      <Button
        w={'full'}
        colorScheme={'blue'}
        size={'sm'}
        font={14}
        onClick={() => signup(inputs)}
      >
        Sign Up
      </Button>
    </>
  );
};

export default Signup;
