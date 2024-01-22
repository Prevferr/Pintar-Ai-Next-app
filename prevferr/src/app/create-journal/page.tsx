"use client";

import Link from "next/link";
import React, { useState } from "react";

const AddJournalForm = () => {
	const [form, setForm] = useState({
		abstract: "",
		title: "",
	});
	const [error, setError] = useState("");

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setForm({
			abstract: "",
			title: "",
		});

		try {
			await fetch("/api/journals", {
				method: "POST",
				body: JSON.stringify(form),
				headers: {
					"Content-Type": "application/json",
				},
			});
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
				<button type="submit">Create Journal</button>
			</form>
		</>
	);
};

export default AddJournalForm;
