import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest | any) {
  const session: any = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const { origin } = req.nextUrl;

  if (!session) {
    const requestedPage = req.page.name;
    return NextResponse.redirect(`${origin}/auth/login?p=${requestedPage}`);
  }

  const validRoles = ['admin', 'SEO', 'super-user'];

  if (!validRoles.includes(session.user.role)) {
    return NextResponse.redirect(`${origin}/`);
  }

  return NextResponse.next();
}
