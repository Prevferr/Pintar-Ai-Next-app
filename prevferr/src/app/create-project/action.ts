"use server";

import { z } from "zod";

const userInputSchema = z.object({
	abstrack: z.string(),
	title: z.string(),
	description: z.string(),
});

export const handleFormAction = async (formData: FormData) => {
	console.log(formData);
};
