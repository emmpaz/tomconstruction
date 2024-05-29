import { NextRequest, NextResponse } from "next/server";




export async function middleware(request: NextRequest){
    const response = NextResponse.next();

    response.headers.set('Cache-Control', 'public, max-age=3600, stale-while-revaildate=86400');
    console.log('middleware');
    return response;
}

export const config = {
    matcher: [
      /*
       * Match all request paths except:
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
       * Feel free to modify this pattern to include more paths.
       */
      // "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
      '/gallery'
    ],
  };