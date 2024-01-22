import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { readPayload, readPayloadJose } from "../helpers/lib/jwt";

export { default } from "next-auth/middleware";

// export const config = {
// 	// matcher: ["/profile"],
// 	// matcher: ["/((?!register|api|login).*)"],
// };

export const middleware = async (request: NextRequest) => {
  if (
    !request.url.includes("/api") &&
    !request.url.includes("_next/static") &&
    !request.url.includes("_next/image") &&
    !request.url.includes("favicon.ico")
  ) {
    console.log(request.method, request.url);
  }

  if (request.url.includes("/api") && !request.url.includes("/api/inipublic")) {
    // semua route yang di dalam /api tapi dia bukan di dalam /api/inipublic, maka code di dalam sini akan dijalankan
    console.log("API", request.method, request.url);

    console.log("MASUK SINIIIIII ");
    const cookiesStore = cookies();
    const token = cookiesStore.get("token");

    console.log("token dari cookieStore", token);

    if (!token) {
      return NextResponse.json({
        statusCode: 401,
        error: "Unauthorized",
      });
    }

    // const tokenData = readPayload(token.value) as {
    // 	id: string;
    // 	email: string;
    // };
    const tokenData = await readPayloadJose<{ id: string; email: string }>(
      token.value
    );

    // console.log(tokenData, "<<< token data");

    const requestHeaders = new Headers(request.headers);

    console.log("masukkk after request header");
    requestHeaders.set("x-user-id", tokenData.id);

    return NextResponse.next({
      headers: requestHeaders,
    });
  }

  return NextResponse.next();
};
