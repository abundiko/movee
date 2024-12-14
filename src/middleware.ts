import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // if (!request.nextUrl.pathname.startsWith("/_next")) {
  //   const subdomains = request.headers
  //     .get("host")
  //     ?.split(".")
  //     .slice(0, -+(process.env.DOMAIN_PARTS ?? 0))
  //     .map((subdomain) => `/${subdomain}`)
  //     .join("");

  //   // console.log({ h: request.headers.get("host"), subdomains });
  //   return NextResponse.rewrite(
  //     new URL(
  //       (subdomains?.length ? subdomains : "/v1") + request.nextUrl.pathname,
  //       request.url
  //     )
  //   );
  // }
}
