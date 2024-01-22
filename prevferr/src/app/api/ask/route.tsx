// import { NextApiRequest, NextApiResponse } from "next";
// import { OpenAI } from "openai";
// import { readFileSync } from "fs";
// import pdf from "pdf-parse";
// import multer from "multer";

// // Make sure you have installed the 'dotenv' package
// require("dotenv").config();

// const openai = new OpenAI({
// 	apiKey: process.env.OPENAI_API_KEY,
// });

// // Set up Multer for handling file uploads
// const upload = multer({ dest: "uploads/" });

// export class AiController {
// 	// Function to convert PDF to text
// 	static async pdfToText(filePath: string): Promise<string> {
// 		try {
// 			const dataBuffer = readFileSync(filePath);
// 			const data = await pdf(dataBuffer);
// 			return data.text;
// 		} catch (error) {
// 			console.error("Error converting PDF to text: ", error);
// 			throw error;
// 		}
// 	}

// 	// Middleware for handling file uploads
// 	static uploadMiddleware = upload.single("pdfFile");

// 	static async sumPDF(
// 		req: NextApiRequest & { file: any },
// 		res: NextApiResponse
// 	) {
// 		try {
// 			// Check if the request has a file
// 			if (!req.file) {
// 				return res
// 					.status(400)
// 					.json({ error: "No PDF file provided in the request." });
// 			}

// 			// Step 1: Convert uploaded PDF to text
// 			const pdfText = await AiController.pdfToText(req.file.path);

// 			// Step 2: Use OpenAI to summarize the PDF text
// 			const ai = await openai.chat.completions.create({
// 				model: "gpt-4",
// 				messages: [
// 					{
// 						role: "user",
// 						content: `can you summarize this PDF file in part ABSTRACT into four exact points divided by a dash in a line, that is his name, his keyword and point of research and abstract description of research,  this is the PDF file give me on JSON format, only JSON format I need, ${pdfText}`,
// 					},
// 				],
// 			});

// 			// Step 3: Extract relevant data from OpenAI response
// 			const summary = ai.choices[0].message.content as string;
// 			const data = summary.split(" - ");

// 			// Step 4: Respond with the extracted data
// 			res.status(200).json({ summary, extractedData: data });
// 		} catch (err) {
// 			console.error(err);
// 			res.status(500).json({ error: "Internal Server Error" });
// 		}
// 	}
// }

import { prisma } from "../../../../helpers/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { OpenAI } from "openai";

export async function POST(req: Request, res: Response) {
	//  Cara buat bisa terima URL Encode?
	// formData
	const dataKembalianDariPostman = await req.formData();
	// Pengen dapetin isinya nih
	// Cara buat dapetin question?
	const question = dataKembalianDariPostman.get("question");

	console.log("ini gw coba liat di server dulu dhe", question);

	const openai = new OpenAI({
		apiKey: "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", //env
	});
	try {
		// const question = req.body.question;
		const ai = await openai.chat.completions.create({
			model: "gpt-3.5-turbo",
			messages: [
				{
					role: "user",
					content: `${question}`,
				},
			],
		});

		console.log(ai.choices[0].message.content);

		const answer = ai.choices[0].message.content;

		return NextResponse.json({ answer });
	} catch (err) {
		console.log(err);
	}
}
