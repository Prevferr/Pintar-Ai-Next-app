// import { prisma } from "../../../../helpers/lib/prisma";
// import { hash } from "bcryptjs";
// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import { PdfReader } from "pdfreader";

// import { z } from "zod";
// import { OpenAI } from "openai";

// export async function extractPDF(file: File): Promise<void> {
// 	try {
// 		const fileArrBuff = await file.arrayBuffer();
// 		const fileBuff = Buffer.from(fileArrBuff);
// 		const result: string[] = [];

// 		const pdfreader = new PdfReader({});
// 		pdfreader.parseBuffer(fileBuff, (err, item) => {
// 			if (err) {
// 				console.error("error:", err);
// 			} else if (!item) {
// 				sumPDF(result.join(" "));
// 			} else if (item.text) {
// 				result.push(item.text);
// 			}
// 		});
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

// function sumPDF(text: string): void {
// 	// Implement the logic for summarizing the PDF content
// 	console.log("Summarized PDF content:", text);
// }

// export async function POST(req: Request, res: Response, text: string) {
// 	//  Cara buat bisa terima URL Encode?
// 	// console.log("Summarized PDF content:", text);

// 	// formData
// 	const dataKembalianDariPostman = await req.formData();
// 	// Pengen dapetin isinya nih
// 	// Cara buat dapetin question?
// 	const question = dataKembalianDariPostman.get("question");

// 	// console.log("ini gw coba liat di server dulu dhe", question);

// 	const openai = new OpenAI({
// 		apiKey: "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", //env
// 	});
// 	try {
// 		// const question = req.body.question;
// 		const ai = await openai.chat.completions.create({
// 			model: "gpt-4",
// 			messages: [
// 				{
// 					role: "user",
// 					content: `can you summarize this pdf file in part ABSTRACT into four exact points divided by a dash in a line, that is his name, his keyword and point of research and abstract description of research,  this is the pdf file give me on json format, only json format i need
// ${text}`,
// 				},
// 			],
// 		});

// 		console.log(ai.choices[0].message.content);

// 		const answer = ai.choices[0].message.content;

// 		return NextResponse.json({ answer });
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

import { NextResponse } from "next/server";
import { OpenAI } from "openai";
// import fs from "fs";
// import pdf from "pdf-parse";

// async function extractAbstract(pdfPath: string): Promise<string> {
// 	const dataBuffer = fs.readFileSync(pdfPath);

// 	try {
// 		const data = await pdf(dataBuffer);
// 		const text = data.text;

// 		// Define the start and end markers for the abstract
// 		const abstractStart = text.indexOf("ABSTRACT");
// 		const abstractEnd = text.indexOf("Keywords:", abstractStart);

// 		if (abstractStart !== -1 && abstractEnd !== -1) {
// 			return text.substring(abstractStart, abstractEnd);
// 		} else {
// 			return "Abstract not found";
// 		}
// 	} catch (error) {
// 		console.error("Error reading PDF:", error);
// 		return "Failed to extract abstract";
// 	}
// }

// // Usage
// const pdfPath = "path_to_your_pdf.pdf";
// extractAbstract(pdfPath)
// 	.then((abstract) => console.log(abstract))
// 	.catch((error) => console.error(error));

// pages/api/extract-pdf.ts
import type { NextApiRequest, NextApiResponse } from "next";
import {pdfParse} from "pdf-parse";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method Not Allowed" });
	}

	try {
		const file = req.body; // Adjust this according to how you're sending the file
		const fileBuffer = Buffer.from(file);
		const data = await PdfReader(fileBuffer);
		res.status(200).json({ text: data.text });
	} catch (err) {
		console.error("Error extracting PDF:", err);
		res.status(500).json({ error: "Failed to extract text" });
	}
};

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

		// console.log(ai.choices[0].message.content);
		const answer = ai.choices[0].message.content;
		console.log(answer);

		return NextResponse.json({ answer });
	} catch (err) {
		console.log(err);
	}
}
