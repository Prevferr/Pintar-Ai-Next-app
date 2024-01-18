// "use server";

// import { z } from "zod";

// const userInputSchema = z.object({
// 	abstract: z.string(),
// 	title: z.string(),
// 	description: z.string(),
// });

// export const handleFormAction = async (formData: FormData) => {
// 	console.log(formData, "<<< form data");

// 	type Response<TypeYangAkanDiIsi> = {
// 		statusCode: number;
// 		message?: string;
// 		data?: TypeYangAkanDiIsi;
// 		error?: string;
// 	};

// 	const response = await fetch("http://localhost:3000/api/journals", {
// 		method: "POST",
// 		body: JSON.stringify({
// 			abstract: formData.get("abstract"),
// 			title: formData.get("title"),
// 			description: formData.get("description"),
// 		}),
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 	});
// 	const responseJSON: Response<unknown> = await response.json();
// 	console.log(responseJSON, "<<<< response form action");
// };
