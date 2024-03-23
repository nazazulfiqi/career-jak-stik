import jwt, { JwtPayload } from 'jsonwebtoken'; // Import library JWT untuk mendekode token
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { loginRequest } from '@/hooks/auth/request';

import { TLoginData } from '@/types/authentications';

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/auth/sign-in',
    signOut: '/auth/logout',
  },
  session: {
    maxAge: 2 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      id: 'login',
      type: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials): Promise<TLoginData> {
        try {
          const data = await loginRequest({
            email: credentials?.email,
            password: credentials?.password,
          });
          return data;
        } catch (error: any) {
          if (error.response.status === 422) {
            throw new Error(error.response.data.message);
          }
          throw new Error(
            typeof error.response.data === 'string'
              ? error.response.data
              : error.response.data?.message
          );
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user) return true;
      return false;
    },
    async jwt({ token, user, account }) {
      const currentUser = user as unknown as TLoginData;
      if (account?.provider === 'google' && account) {
        token.access_token = account.access_token;
        token.refresh_token = account.refresh_token;
      } else if (account?.provider === 'login' && currentUser) {
        token.access_token = currentUser.data.accessToken;
        currentUser.name = user.name;
        currentUser.email = user.email;
        token.user_id = currentUser.data.user_id;
        token.role = currentUser.data.role;
      }
      
      // Decode access token here
      const decodedToken = jwt.decode(token.access_token as string) as JwtPayload;
      if (decodedToken) {
        // Access the decoded token's payload
        token.role = decodedToken?.role;
        console.log(token.role);
        
      } else {
        console.error('Failed to decode access token');
      }

      return { ...token, ...currentUser };
    },
    async session({ session, token }) {
      session = {
        expires: token?.expires as string,
        user: {
          id: "w",
          role: String(token.role),
          token: token.access_token as any,
        },
      };
      return session;
    },
  },
};
