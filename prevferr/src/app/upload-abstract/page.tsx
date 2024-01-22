// "use client";
// import { useState, ChangeEvent, FormEvent } from "react";

// const Upload = () => {
// 	const [file, setFile] = useState<File | null>(null);

// 	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
// 		const selectedFile = e.target.files && e.target.files[0];
// 		setFile(selectedFile || null);
// 	};

// 	const handleFormSubmit = async (e: FormEvent) => {
// 		e.preventDefault();

// 		if (file) {
// 			try {
// 				// Create a FormData object to send the file
// 				const formData = new FormData();
// 				formData.append("pdfFile", file);

// 				// Send the file to the server using fetch or axios
// 				const response = await fetch("/api/ask", {
// 					method: "POST",
// 					body: formData,
// 				});

// 				if (response.ok) {
// 					console.log("File uploaded successfully!");
// 				} else {
// 					console.error("File upload failed.");
// 				}
// 			} catch (error) {
// 				console.error("Error uploading file:", error);
// 			}
// 		} else {
// 			console.log("Please select a file.");
// 		}
// 	};

// 	return (
// 		<div>
// 			<h1>Upload PDF</h1>
// 			<form onSubmit={handleFormSubmit} encType="multipart/form-data">
// 				<div>
// 					<label htmlFor="pdfFile">Select PDF file:</label>
// 					<input
// 						type="file"
// 						id="pdfFile"
// 						name="pdfFile"
// 						accept=".pdf"
// 						onChange={handleFileChange}
// 					/>
// 				</div>
// 				<button type="submit">Upload</button>
// 			</form>
// 		</div>
// 	);
// };

// export default Upload;

"use client";
import { useState } from "react";

const YourComponent = () => {
	const [answer, setAnswer] = useState<string | null>(null);

	const handleSubmit = async (question: string) => {
		try {
			const formData = new FormData();
			formData.append("question", question);

			const response = await fetch("http://localhost:3000/api/ask", {
				method: "POST",
				headers: {},
				body: formData,
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			setAnswer(data.answer);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	// Example usage
	const handleQuestionSubmit = () => {
		//disini harunsya upload pdf
		const userQuestion = "makan apa"; // Replace with actual user input
		handleSubmit(userQuestion);
	};

	return (
		<div>
			<button onClick={handleQuestionSubmit}>Submit Question</button>
			{answer && <p>Answer: {answer}</p>}
		</div>
	);
};

export default YourComponent;
