import { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";

// Make sure you have installed the 'dotenv' package
require("dotenv").config();

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

export class AiController {
	static async sumPDF(val: string) {
		try {
			const ai = await openai.chat.completions.create({
				model: "gpt-4",
				messages: [
					{
						role: "user",
						content: `can you summarize this pdf file in part ABSTRACT into four excact points divided by a dash in a line, that is his name, his keyword and point of research,  this is the pdf file, ${val}`,
					},
				],
			});

			console.log(ai.choices[0].message.content as string);

			const data = (ai.choices[0].message.content as string).split(" - ");

			console.log(data);
		} catch (err) {
			console.log(err);
		}
	}
}

/*
import { readFileSync } from 'fs';
import * as pdf from 'pdf-parse';

async function pdfToText(filePath: string): Promise<string> {
    try {
        const dataBuffer = readFileSync(filePath);
        const data = await pdf(dataBuffer);
        return data.text;
    } catch (error) {
        console.error("Error converting PDF to text: ", error);
        throw error;
    }
}

// Usage
pdfToText('path/to/your/pdf/file.pdf').then(text => console.log(text));

*/
