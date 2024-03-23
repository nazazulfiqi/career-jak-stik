// nextauth.d.ts
import { DefaultUser } from 'next-auth';

type Token = {
  access_token: string | unknown;
};

interface IUser extends DefaultUser {
  role?: string;
  token?: Token;

}
declare module 'next-auth' {
  type User = IUser;
  interface Session {
    user?: User;
  }
}
