import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { message } from 'antd';
import { signOut } from 'next-auth/client';
import { signOut as signOutLocal } from '@reducers/auth';

const SignOutPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signOutLocal());
    setTimeout(() => {
      signOut();
      message.success('User signed out successfully!');
      router.push('/');
    }, 1500);
  });

  return <div>Logging out...</div>;
};

export default SignOutPage;
