"use client";

import React, { useState } from "react";

const AddProjectForm = () => {
	const [form, setForm] = useState({
		project_name: "",
		description_project: "",
		project_image: "",
		project_budget: "",
	});
	const [error, setError] = useState("");

	const onSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		setForm({
			project_name: "",
			description_project: "",
			project_image: "",
			project_budget: "",
		});

		try {
			const response = await fetch("/api/projects", {
				method: "POST",
				body: JSON.stringify(form),
				headers: {
					"Content-Type": "application/json",
				},
			});
			console.log(response.json(), "<<<< response project");
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
					<input type="text" name="project_name" placeholder="Enter Project Name" value={form.project_name} onChange={onHandlerForm} />
				</div>
				<div>
					<input type="text" name="description_project" placeholder="Enter Project Description" value={form.description_project} onChange={onHandlerForm} />
				</div>
				<div>
					<input type="text" name="project_image" placeholder="Enter Project Image URL" value={form.project_image} onChange={onHandlerForm} />
				</div>
				<div>
					<input type="number" name="project_budget" placeholder="Enter Project Budget" value={form.project_budget} onChange={onHandlerForm} />
				</div>
				<button type="submit">Create Project</button>
			</form>
		</>
	);
};

export default AddProjectForm;
