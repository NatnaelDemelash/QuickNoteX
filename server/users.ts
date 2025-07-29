'use server';

import { auth } from '@/lib/auth';

export const signInUser = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
    return { success: true, message: 'SignedIn Successfully!' };
  } catch (error) {
    const e = error as Error;
    return { success: false, message: e.message || 'Failed to SignIn user' };
  }
};

export const signUpUser = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });
    return { success: true, message: 'SignUp Successfully!' };
  } catch (error) {
    const e = error as Error;
    return { success: false, message: e.message || 'Failed to SignUp user' };
  }
};
