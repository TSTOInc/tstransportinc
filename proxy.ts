import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  try {
    const statusUrl = process.env.CONVEX_STATUS_URL;
    const apiKey = process.env.CONVEX_API_KEY;
    const siteId = process.env.CONVEX_SITE_ID;

    if (statusUrl && apiKey && siteId) {
      const response = await fetch(`${statusUrl}?apiKey=${apiKey}&siteId=${siteId}`, {
        next: { revalidate: 60 } 
      });

      const data = await response.json();

      // 1. If site is INACTIVE: Rewrite everyone to /blocked
      if (data.active === false) {
        // Prevent infinite loop: if they are already being rewritten to /blocked, stop here
        if (pathname === '/blocked') return NextResponse.next();
        return NextResponse.rewrite(new URL('/blocked', request.url));
      }

      // 2. If site is ACTIVE: Don't let users visit /blocked manually
      if (data.active === true && pathname === '/blocked') {
        //show a page not found 404. not the blocked page
        return NextResponse.rewrite(new URL('/404', request.url));
      }
    }
  } catch (error) {
    console.error("Status API failed:", error);
  }

  // Existing redirect logic
  if (pathname.startsWith('/about')) {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  return NextResponse.next()
}

export const config = {
  // Added 'blocked' to the matcher so the middleware actually runs on that path
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|logo.png).*)',
  ],
}