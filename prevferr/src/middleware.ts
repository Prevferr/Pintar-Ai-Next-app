import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { readPayloadJose } from "../helpers/lib/jwt";

export const middleware = async (request: NextRequest) => {
	if (!request.url.includes("/api") && !request.url.includes("_next/static") && !request.url.includes("_next/image") && !request.url.includes("favicon.ico")) {
		console.log(request.method, request.url);
	}

	if (request.url.includes("/whislist")) {
		console.log("API", request.method, request.url);

		const token = cookies().get("token");
		// console.log(token, "<<<<<< token");

		if (!token) {
			return NextResponse.json({
				statusCode: 401,
				error: "Unauthorized",
			});
		}

		const tokenData = await readPayloadJose<{ id: string; email: string }>(token.value);
		// console.log(tokenData, "<<<<<< TOKEN DATA ");

		const requestHeaders = new Headers(request.headers);

		// USER LOGIN INFO
		requestHeaders.set("x-user-id", tokenData.id); // DATA ORANG YANG LAGI LOGIN
		requestHeaders.set("x-user-email", tokenData.email);
		requestHeaders.set("x-custom-value", "Ini untuk mencoba data tambahan");

		return NextResponse.next({
			headers: requestHeaders,
		});
	}

	return NextResponse.next();
};
