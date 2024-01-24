"use client";

import ProjectCard from "@/app/components/ProjectCard";
import { Project, Researchers } from "@/app/type-def";
import { parseISO, format } from "date-fns";
import Email from "next-auth/providers/email";
// import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProjectDetail = ({ params }: { params: { slug: string } }) => {
	const projectName = params.slug;
	const [projectData, setProjectData] = useState<Project | null>(null);
	const [researchersData, setResearchersData] = useState<Researchers[] | null>(null);
	
	const fetchData = async () => {
		try {
			const response = await fetch(`http://localhost:3000/api/projects/${projectName}`);
			if (!response.ok) {
				throw new Error("Failed fetching data");
			}
			const responseJSON = await response.json();
			console.log(responseJSON, "<<<<< Response JSON");

			setProjectData(responseJSON.project);
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
			} else {
				console.log(error);
			}
		}
	};

	const fetchDataResearcher = async () => {
		try {
			const response = await fetch(`http://localhost:3000/api/projects/${projectName}`);
			if (!response.ok) {
				throw new Error("Failed fetching data");
			}
			const responseJSON = await response.json();
			console.log(responseJSON, "<<<<< Response JSON");

			setResearchersData(responseJSON.researchers);
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
		fetchDataResearcher();
	}, []);

	const rupiah = (number: any) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	};


	const handleButtonClick = async (email: string) => {
		// console.log(email, "<<< WKOAKWOKA");
		
		try {
			const response = await fetch(`http://localhost:3000/api/projects/email/${email}`);
			if (!response.ok) {
				throw new Error("Failed fetching data");
			}
			const responseJSON = await response.json();
			console.log(responseJSON, "<<<<< Response JSON");

			setResearchersData(responseJSON.email);
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
			} else {
				console.log(error);
			}
		}
		
		// Lakukan sesuatu saat tombol diklik, misalnya menampilkan email atau menjalankan tindakan tertentu
		
	  };

	// const DateChange = (dateString: string): string => {
	// 	const date = parseISO(dateString);
	// 	const formattedDate = format(date, "MMMM d, yyyy");

	// 	return `${formattedDate}`;
	// };

	// console.log(researchersData, "tes lgi cuk");
	

	return (
		<>
			<section className="min-h-screen bg-[#E2E4DD]">
				<div className="paddingX paddingYShorter2">
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
				<div>
					<table>
 						<thead>
    						<tr>
      							<th>Email</th>
      							<th>Firstname</th>
      							<th>Education</th>
    						</tr>
 						</thead>
 						<tbody>
    						{researchersData?.map((researchers) => (
    						<tr key={researchers.id}>
        						<td>{researchers.firstname}</td>
        						<td>{researchers.education}</td>
								<td>
									<button onClick={() => handleButtonClick(researchers.email)}>
                						{researchers.email}
            						</button>
								</td>
      						</tr>
    						))}
  						</tbody>
					</table>
				</div>					
			</section>
		</>
	);
};

export default ProjectDetail;
