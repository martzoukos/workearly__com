import { NextRequest, NextResponse } from "next/server";
import redirections from "./redirections.json";

export async function middleware(request: NextRequest) {
  const fullUrl = request.nextUrl.href;

  const redirectEntry = redirections.find((entry) =>
    fullUrl.startsWith(entry.from)
  );

  if (redirectEntry) {
    const redirectUrl = new URL(redirectEntry.to, request.url);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
