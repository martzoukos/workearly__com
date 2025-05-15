import { NextRequest, NextResponse } from "next/server";
import redirections from "./redirections.json";

export async function middleware(request: NextRequest) {
  const fullUrl = request.nextUrl.href;

  const redirectEntry = redirections.find((entry) =>
    entry.from.startsWith(fullUrl)
  );

  if (redirectEntry) {
    const redirectUrl = new URL(redirectEntry.to, "https://www.workearly.gr");
    return NextResponse.redirect(redirectUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
