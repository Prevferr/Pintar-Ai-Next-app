"use client";

import React, { useState } from "react";
import Button from "../components/Button";

const AddJournalForm = () => {
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
				<button type="submit">Upload Journal</button>
			</form>
			<Button btnClass="btn-primary" title="Upload" />
		</>
	);
};

export default AddJournalForm;
