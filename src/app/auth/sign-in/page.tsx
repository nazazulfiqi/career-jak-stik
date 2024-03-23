import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import React from 'react';

import { authOptions } from '@/app/api/auth/[...nextauth]/option';
import SignInModule from '@/modules/auth/user-sign-in';

const SignInPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }

  return <SignInModule />;
};

export default SignInPage;
