/*
  static async extractPDF(file: File, userId: string) {
    try {
      const fileArrBuff = await file.arrayBuffer()
      const fileBuff = Buffer.from(fileArrBuff)
      const result: string[] = []

      const pdfreader = new PdfReader({})
      pdfreader.parseBuffer(fileBuff, (err, item) => {
        if (err) console.error('error:', err)
        else if (!item) return this.sumPDF(result.join(' '), userId)
        else if (item.text) {
          result.push(item.text)
        }
      })
    } catch (err) {
      console.log(err)
    }
  }

  static async sumPDF(val: string, userId: string) {
    try {
      const collection = await this.connection()

      const ai = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'user',
            content: `can you summarize this cv into four exact points divided by a dash in a line, first is only his total work experience in number of years, if less than a year put 1 year, second is his skills strict only his skills, third is his number of projects only number of projects, fourth is his projects name list divided by a coma with this format 'Names: his list of projects' , this is the cv, ${val}`,
          },
        ],
      })

      const data = (ai.choices[0].message.content as string).split(' - ')

      const expYear = data[0]
      const skills = data[1]?.split('Skills: ')[1]?.split(', ')
      const numOfProjects = data[2]
      const projectNames = data[3]?.split('Names: ')[1]?.split(', ')

      await collection.findOneAndUpdate(
        { _id: new ObjectId(userId) },
        {
          $set: {
            cvData: {
              expYear,
              skills,
              numOfProjects,
              projectNames,
            },
          },
        },
      )

      return data
    } catch (err) {
      console.log(err)
    }
  }

  static async upPDF(file: File, userId: string) {
    try {
      const collection = await this.connection()

      const storageRef = ref(storage, file.name)
      const upload = uploadBytes(storageRef, file)

      const data = await upload.then(async (snapshot) => {
        return getDownloadURL(snapshot.ref).then((dataUrl) => {
          return dataUrl
        })
      })

      await collection.findOneAndUpdate(
        { _id: new ObjectId(userId) },
        {
          $set: {
            cvLink: data,
          },
        },
      )

      return data
    } catch (err) {
      console.log(err)
    }
  }
*/

import { NextResponse } from "next/server";
import { OpenAI } from "openai";
// import fs from "fs";
// import pdf from "pdf-parse";

// export async function extractAbstract(pdfPath: string): Promise<string> {
// 	const dataBuffer = fs.readFile(pdfPath);

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
