import { openai } from "@/config/openAi.config";
import { prisma } from "../../../helpers/lib/prisma";
// import storage from '../config/firebase'
// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { PdfReader } from "pdfreader";

export class Upload {
	static async extractPDF(file: File, userId:any) {
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
            
            console.log(pdfreader, "memek");
    } catch (err) {
      console.log(err)
    }
	}

	static async sumPDF(val: string, req: Request) {
		try {
			const userId = req.headers.get("x-user-id") as string;

			const ai = await openai.chat.completions.create({
				model: "gpt-4",
				messages: [
					{
						role: "user",
						content: `can you summarize this pdf file in part ABSTRACT into four exact points divided by a dash in a line, that is title, his keyword and point of research and abstract description of research ${val}`,
					},
				],
			});

            const data = (ai.choices[0].message.content as string)
            

			const title = data[1];
			const abstract = data[2];

			// Prisma create query
			await prisma.jurnal.create({
				data: {
					researcherId: Number(userId),
					title,
					abstract,
				},
			});

			return data;
		} catch (err) {
			console.error(err);
		}
	}

	//   await collection.findOneAndUpdate(
	//     { _id: new ObjectId(userId) },
	//     {
	//       $set: {
	//         cvData: {
	//           expYear,
	//           skills,
	//           numOfProjects,
	//           projectNames,
	//         },
	//       },
	//     },
	//   )
}

// static async upPDF(file: File, userId: string) {
// 	try {
// 		const collection = await this.connection();

// 		const storageRef = ref(storage, file.name);
// 		const upload = uploadBytes(storageRef, file);

// 		const data = await upload.then(async (snapshot) => {
// 			return getDownloadURL(snapshot.ref).then((dataUrl) => {
// 				return dataUrl;
// 			});
// 		});

// 		await collection.findOneAndUpdate(
// 			{ _id: new ObjectId(userId) },
// 			{
// 				$set: {
// 					cvLink: data,
// 				},
// 			}
// 		);

// 		return data;
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

// static async upImg(file: File, userId: string) {
// 	try {
// 		const collection = await this.connection();

// 		const storageRef = ref(storage, userId);
// 		const upload = uploadBytes(storageRef, file);

// 		const data = await upload.then(async (snapshot) => {
// 			return getDownloadURL(snapshot.ref).then((dataUrl) => {
// 				return dataUrl;
// 			});
// 		});

// 		await collection.findOneAndUpdate(
// 			{ _id: new ObjectId(userId) },
// 			{
// 				$set: {
// 					picture: data,
// 				},
// 			}
// 		);

// 		return data;
// 	} catch (err) {
// 		console.log(err);
// 	}
// }