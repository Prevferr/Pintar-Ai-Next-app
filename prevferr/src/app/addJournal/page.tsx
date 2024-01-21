"use client";

import { useEdgeStore } from "@/lib/edgestore";
import Link from "next/link";
import React, { useState } from "react";
import { SingleImageDropzone } from "../components/singe-image-dropzone";

const AddJournalForm = () => {
	// Edge store state
	const [file, setFile] = useState<File>();
	const [progress, setProgress] = useState(0);
	const [urls, setUrls] = useState<{
		url: string;
		thumbnailUrl: string | null;
	}>();

	const [form, setForm] = useState({
		abstract: "",
		title: "",
		description: "",
	});
	const [error, setError] = useState("");

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setForm({
			abstract: "",
			title: "",
			description: "",
		});

		try {
			const response = await fetch("/api/journals", {
				method: "POST",
				body: JSON.stringify(form),
				headers: {
					"Content-Type": "application/json",
				},
			});
			// console.log(response.json(), "<<<< response journal");
		} catch (error: any) {
			console.log(error);
			setError(error);
		}
	};

	const onHandlerForm = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		const { name, value } = event.target;
		setForm({ ...form, [name]: value });
	};

	// Edge store setup
	const { edgestore } = useEdgeStore();

	return (
		<>
			<form onSubmit={onSubmit}>
				<div>
					<input name="abstract" placeholder="Abstract" value={form.abstract} onChange={onHandlerForm} />
				</div>
				<div>
					<input name="title" placeholder="Title" value={form.title} onChange={onHandlerForm} />
				</div>
				<div>
					<input name="description" placeholder="Description" value={form.description} onChange={onHandlerForm} />
				</div>
				<button type="submit">Create Journal</button>
			</form>
			<div className="flex flex-col items-center m-6 gap-2">
				<SingleImageDropzone
					width={200}
					height={200}
					value={file}
					onChange={(file) => {
						setFile(file);
					}}
				/>
				<div className="h-[6px] w-44 border rounded overflow-hidden">
					<div className="h-full bg-black transition-all duration-150" style={{ width: `${progress}%` }} />
				</div>
				<button
					className="bg-white text-black rounded px-2 hover:opacity-80"
					onClick={async () => {
						if (file) {
							const res = await edgestore.myPublicImages.upload({
								file,
								input: { type: "post" },
								onProgressChange: (progress) => {
									setProgress(progress);
								},
							});
							setUrls({
								url: res.url,
								thumbnailUrl: res.thumbnailUrl,
							});
						}
					}}
				>
					Upload Journal
				</button>
				{urls?.url && (
					<Link href={urls.url} target="_blank">
						URL
					</Link>
				)}
				{urls?.thumbnailUrl && (
					<Link href={urls.thumbnailUrl} target="_blank">
						THUMBNAIL
					</Link>
				)}
			</div>
		</>
	);
};

export default AddJournalForm;
