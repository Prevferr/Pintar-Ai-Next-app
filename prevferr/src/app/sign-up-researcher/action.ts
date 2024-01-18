"use server";

import { redirect } from "next/navigation";

import { NextResponse } from "next/server";

// import { getUsers, createUser } from "@/db/models/user";

// validation using zod
import { z } from "zod";

const userInputSchema = z.object({
	name: z.string(),
	username: z.string(),
	email: z.string().email(),
	password: z.string().min(6),
});

export const handleFormAction = async (formData: FormData) => {
	console.log(formData);

	type MyResponse<T> = {
		statusCode: number;
		message?: string;
		data?: T;
		error?: string;
	};

	// Fetch
	// Server to Server = gw harus memberikan full domain path
	// - baseUrl = http://xxx.vercel.app
	// await fetch("http://xxx.vercel.app/api/user")

	// Client to Server = gw TIDAK HARUS memberikan full domain path
	// - baseUrl = http://yyy.vercel.app
	// await fetch("/api/user");

	const response = await fetch("http://localhost:3000/api/researchers", {
		method: "POST",
		body: JSON.stringify({
			firstname: formData.get("firstname"),
			lastname: formData.get("lastname"),
			password: formData.get("password"),
			education: formData.get("education"),
			scope: formData.get("scope"),
			institution: formData.get("institution"),
			profileImage: formData.get("profileImage"),
			email: formData.get("email"),
			background: formData.get("background"),
			gender: formData.get("gender"),
			role: formData.get("role"),
			location: formData.get("location"),
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	const responseJson: MyResponse<unknown> = await response.json();

	if (!response.ok) {
		console.log(responseJson.error, "xxx");

		let message = responseJson.error ?? "Something went wrong!";

		return redirect(`/sing-up-researcher?error=${message}`);
	}

	return redirect("/sign-in");
};
