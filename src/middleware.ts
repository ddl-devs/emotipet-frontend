import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = ["/", "/register"];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (token) {
    return NextResponse.next();
  }

  if (!token && !publicRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home", "/pet/:slug*", "/user/:userId*", "/", "/register"],
};
