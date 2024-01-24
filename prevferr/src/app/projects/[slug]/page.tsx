"use client";

import { Project } from "@/app/type-def";
import { parseISO, format } from "date-fns";
import React, { useEffect, useState } from "react";

const ProjectDetail = ({ params }: { params: { slug: string } }) => {
	const projectName = params.slug;
	const [projectData, setProjectData] = useState<Project | null>(null);

	const fetchData = async () => {
		try {
			const response = await fetch(`http://localhost:3000/api/projects/${projectName}`);
			if (!response.ok) {
				throw new Error("Failed fetching data");
			}
			const responseJSON = await response.json();
			console.log(responseJSON, "<<<<< Response JSON");

			setProjectData(responseJSON);
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
			} else {
				console.log(error);
			}
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const rupiah = (number: any) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	};

	const DateChange = (dateString: string): string => {
		const date = parseISO(dateString);
		const formattedDate = format(date, "MMMM d, yyyy");

		return `${formattedDate}`;
	};

	return (
		<>
			<section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
				<div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
					<div className="flex flex-wrap -mx-4">
						<div className="w-full px-4 md:w-1/2 ">
							<div className="relative mb-6 lg:mb-10 lg:h-2/4">
								<img src={projectData?.project_image} alt="" className="object-cover w-full lg:h-full" />
							</div>
						</div>
						<div className="w-[60%] mx-auto flex flex-col gap-4">
							<p className="font-mono text-[#565e67]">{projectData?.starting_date}</p>
							<h1 className="text-5xl">{projectData?.project_name}</h1>
							<div className="flex justify-start items-center gap-4">
								{/* <img src={projectData?.project_image} className="h-14 w-14 rounded-full object-cover" /> */}
								<p className="text-base font-mono">
									<span className="font-mono text-[#565e67] text-sm">Budget</span> {rupiah(projectData?.project_budget)}
								</p>
								<span className="text-[#565e67]">•</span>
								<p className="font-mono text-[#565e67] text-sm">{projectData?.expected_finish_date}</p>
								<span className="text-[#565e67]">•</span>
								<p className="text-base font-mono">{projectData?.tags}</p>
							</div>
						</div>
						<div className="border-b my-8 w-[70%] mx-auto"></div>
						<img src={projectData?.project_image} className="rounded-3xl" />
						<p className="text-base font-mono">{projectData?.description_project}</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProjectDetail;
