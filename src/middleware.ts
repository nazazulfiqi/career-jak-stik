import { NextResponse } from 'next/server';
import {NextRequestWithAuth,withAuth} from 'next-auth/middleware';


export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    console.log(request);
    console.log("dari token", request.nextauth.token);
    // console.log("dari token", request.nextauth.token.role);

    if (request.nextUrl.pathname.startsWith('/akun') 
        && request.nextauth.token?.role !== "USER") {
      return NextResponse.redirect(new URL('/auth/sign-in', request.url));} 
  },
  {
    callbacks: {
      authorized: ({token}) => !!token
    }
  }
)

export const config = {
  matcher: ['/akun'],
}