import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data } = useSession();

  return (
    <div>
      {data?.user ? (
        <button onClick={() => signOut()}>Sign In</button>
      ) : (
        <button onClick={() => signIn('google')}>Sign Out</button>
      )}
      {/* <button onClick={() => signIn('google')}>Sign In</button>
      {data?.user?.name}
      <button onClick={() => signOut()}>Sign Out</button> */}
    </div>
  );
};

export default Home;
