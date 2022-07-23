import { getToken } from 'next-auth/jwt';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export async function middleware(
  req: NextRequest | any,
  event: NextFetchEvent
) {
  const session: any = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const { origin } = req.nextUrl;

  if (!session) {
    return new Response(JSON.stringify({ message: 'unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const validRoles = ['admin', 'SEO', 'super-user'];

  if (!validRoles.includes(session.user.role)) {
    return new Response(JSON.stringify({ message: 'unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return NextResponse.next();
}
