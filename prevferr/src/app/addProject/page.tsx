"use client";

import React, { useState } from "react";
import { readPayload } from "../../../helpers/lib/jwt";

const AddProjectForm = () => {
	const [form, setForm] = useState({
		project_name: "",
		description_project: "",
		project_image: "",
		project_status: false,
		starting_date: "",
		expected_finish_date: "",
		project_budget: "",
		tags: "",
		investorId: "",
	});
	const [error, setError] = useState("");

	console.log(readPayload, "ini");

	const onSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		try {
			// SEMUANYA AJA LAH lengkapin aja linknya
			const response = await fetch("http://localhost:3000/api/projects", {
				method: "POST",
				body: JSON.stringify(form),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const responseJSON = await response.json();
			console.log(responseJSON, "<<<< response project");
			setForm({
				project_name: "",
				description_project: "",
				project_image: "",
				project_status: false,
				starting_date: "",
				expected_finish_date: "",
				project_budget: "",
				tags: "",
				investorId: "",
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
					<input type="text" name="project_name" placeholder="Enter Project Name" value={form.project_name} onChange={onHandlerForm} />
				</div>
				<div>
					<input type="text" name="description_project" placeholder="Enter Project Description" value={form.description_project} onChange={onHandlerForm} />
				</div>
				<div>
					<input type="text" name="project_image" placeholder="Enter Project Image URL" value={form.project_image} onChange={onHandlerForm} />
				</div>
				<div>
					<input type="date" name="starting_date" value={form.starting_date} onChange={onHandlerForm} />
				</div>
				<div>
					<input type="date" name="expected_finish_date" value={form.expected_finish_date} onChange={onHandlerForm} />
				</div>
				<div>
					<input type="number" name="project_budget" placeholder="Enter Project Budget" value={form.project_budget} onChange={onHandlerForm} />
				</div>
				<div>
					<input type="text" name="tags" placeholder="Enter Project Tags" value={form.tags} onChange={onHandlerForm} />
				</div>
				<button type="submit">Create Project</button>
			</form>
		</>
	);
};

export default AddProjectForm;
