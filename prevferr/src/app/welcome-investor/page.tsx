"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { JournalWithResearcher } from "../type-def";
import { useRouter } from "next/navigation";
import { format, parseISO, formatDistanceToNow } from "date-fns";

const WelcomePage = () => {
	const router = useRouter();
	const [journal, setJournal] = useState([]);
	const fetchData = async () => {
		try {
			const response = await fetch("http://localhost:3000/api/projects");

			if (!response.ok) {
				throw new Error("Failed fetching data");
			}

			const responseJSON = await response.json();
			// console.log(responseJSON, "<<<<< RES JSON");

			setJournal(responseJSON);
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
			} else {
				console.log(error);
			}
		}
	};
	// console.log(journal, "<<<<<< KOWKOWKOKAWOKAWOKWA");

	const DateChange = (dateString: string): string => {
		const date = parseISO(dateString);
		const formattedDate = format(date, "MMMM d, yyyy");

		return `${formattedDate}`;
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<>
			<section className="bg-[#242628] w-full">
				<div className="flex justify-center paddingX border-[#000]  min-h-screen">
					<div className="w-[60%] border-l border-[#000] paddingXShorter3 paddingYShorter2">
						<div className="flex justify-between items-center">
							<div className="flex flex-col justify-between gap-8">
								<h3 className="text-5xl font-mono text-left font-semibold text-[#fff]">Everything you need is here..</h3>
								<p className="text-[#fff] font-mono text-sm">From startups to the World Cup, modern software teams use Mux products to stream billions of minutes of video every day.</p>
								<Link href="/create-journal">
									<button className="mr-auto border flex items-center gap-2 bg-[#fff] py-3 px-5 rounded-full text-[#000] cursor-pointer font-mono transition-transform duration-300 hover:transform translate-y-[-3px]" onClick={() => router.push("/addProject")}>
										<p className="text-sm">Create Project</p>
									</button>
								</Link>
							</div>
						</div>
					</div>
					{journal.map((el: any) => {
						return (
							<>
								<div className="w-[40%] border-x border-[#000] paddingYShorter3  bg-[#E2E4DD] flex flex-col gap-4">
									<div className="border-[#000] border-y h-48 flex justify-start gap-8 p-4 hover:bg-[#fff]">
										<div className="flex flex-col gap-4">
											<p className="font-mono text-[#565e67] text-base">{DateChange(el.expected_finish_date)}</p>
											<h1 className="text-xl">{el.project_name}</h1>
											<img src={el.project_image} className="h-10 w-10 rounded-full object-cover" alt="researcher" />
											<div className="flex justify-start items-center gap-4">
												<p className="text-base font-mono">
													<span className="text-[#565e67] text-sm">Budget</span> {el.project_budget}
												</p>
												<span className="text-[#565e67]">•</span>
												<p className="font-mono text-[#565e67] text-sm">{DateChange(el.starting_date)}</p>
												<span className="text-[#565e67]">•</span>
												<p className="text-base font-mono">{el.description_project}</p>
											</div>
										</div>
									</div>
								</div>
							</>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default WelcomePage;
