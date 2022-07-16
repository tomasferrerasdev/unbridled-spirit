import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { jwt } from './utils';

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const { token = '' } = req.cookies;

  //return new Response('Token: ' + token);

  try {
    await jwt.isValidToken(token);
    return NextResponse.next();
  } catch (error) {
    const requestedPage = req.page.name;
    return NextResponse.redirect(`/auth/login?p=${requestedPage}`);
  }
}
