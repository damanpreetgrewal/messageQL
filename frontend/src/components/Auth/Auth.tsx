import { useState } from 'react';
import { Session } from 'next-auth';
import { Button, Center, Stack, Text, Image, Input } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';

interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

const Auth: React.FunctionComponent<IAuthProps> = ({
  session,
  reloadSession,
}) => {
  const [username, setUsername] = useState('');

  const onSubmit = async () => {
    try {
       
    } catch (error) {
      console.log('on Submit Error', error);
    }
  };

  return (
    <Center height='100vh'>
      <Stack spacing={8} align='center'>
        {session ? (
          <>
            <Text fontSize='3xl'>Create a Username</Text>
            <Input
              placeholder='Enter a username'
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
            <Button width='100%' onClick={onSubmit}>
              Save
            </Button>
          </>
        ) : (
          <>
            <Text fontSize='3xl'>MessengerQL</Text>
            <Button
              onClick={() => signIn('google')}
              leftIcon={<Image height='20px' src='/images/googlelogo.png' />}
            >
              Continue with Google
            </Button>
          </>
        )}
      </Stack>
    </Center>
  );
};

export default Auth;
