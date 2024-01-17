import { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";

// Make sure you have installed the 'dotenv' package
require("dotenv").config();

const openAIEndpoint =
	process.env.OPENAI_ENDPOINT ||
	"https://api.openai.com/v1/engines/text-davinci-003/completions";

class AiController {
	static async yt(req: NextApiRequest, res: NextApiResponse) {
		const openai = new OpenAI({
			apiKey: process.env.OPENAI_API_KEY || "", // Use environment variable
		});

		try {
			const question = req.body.question;
			const ai = await openai.chat.completions.create({
				model: "gpt-3.5-turbo",
				messages: [
					{
						role: "user",
						content: question,
					},
				],
			});

			console.log(ai.choices[0].message.content);
		} catch (err) {
			console.error(err);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}
}

export default AiController;
