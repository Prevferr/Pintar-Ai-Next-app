// "use client";

// import Link from "next/link";
// import React, { useState } from "react";

// const AddJournalForm = () => {
// 	const [form, setForm] = useState({
// 		abstract: "",
// 		title: "",
// 	});
// 	const [error, setError] = useState("");

// 	const onSubmit = async (e: React.FormEvent) => {
// 		e.preventDefault();
// 		setForm({
// 			abstract: "",
// 			title: "",
// 		});

// 		try {
// 			await fetch("/api/journals", {
// 				method: "POST",
// 				body: JSON.stringify(form),
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 			});
// 		} catch (error: any) {
// 			console.log(error);
// 			setError(error);
// 		}
// 	};

// 	const onHandlerForm = (event: React.ChangeEvent<HTMLInputElement>) => {
// 		event.preventDefault();
// 		const { name, value } = event.target;
// 		setForm({ ...form, [name]: value });
// 	};

// 	return (
// 		<>
// 			<form onSubmit={onSubmit}>
// 				<div>
// 					<input name="abstract" placeholder="Abstract" value={form.abstract} onChange={onHandlerForm} />
// 				</div>
// 				<div>
// 					<input name="title" placeholder="Title" value={form.title} onChange={onHandlerForm} />
// 				</div>
// 				<button type="submit">Create Journal</button>
// 			</form>
// 		</>
// 	);
// };

// export default AddJournalForm;

"use client";
import { useState } from "react";

const UploadPdf = () => {
	const [pdf, setPdf] = useState<File>();
	const [answer, setAnswer] = useState<string | null>(null);

	const updatePDF = async () => {
		const body = new FormData();
		if (pdf) body.append("pdf", pdf);

		const res = await fetch("http://localhost:3000/api/pdf", {
			method: "POST",
			body: body,
		});
	};

	return (
		<div>
			<h1>Upload PDF</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					updatePDF();
					// setRefresh(!refresh);
					// router.refresh();
				}}
				encType="multipart/form-data"
			>
				<input
					type="file"
					onChange={(e) => {
						e.target.files && setPdf(e.target.files[0]);
					}}
					className="file-input file-input-sm file-input-ghost w-full max-w-xs"
				/>
				{/* <input type="file" accept=".pdf" onChange={handleFileChange} /> */}
				<button type="submit">Upload</button>
			</form>
			{answer && <p>Extracted Text: {answer}</p>}
		</div>
	);
};

export default UploadPdf;
