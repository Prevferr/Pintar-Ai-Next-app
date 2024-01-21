"use client";
import React from "react";
import JournalCard from "../components/JournalCard";
import Link from "next/link";
import { Icon } from "@iconify/react";

// const JournalsPage = () => {
// 	const [journals, setJournals] = useState([]);

// 	useEffect(() => {
// 	  const fetchProjects = async () => {
// 		const response = await fetch('/api/journals'); // Assuming you have an API route set up to handle this request
// 		const data = await response.json();
// 		setJournals(data);
// 	  };

// 	  fetchProjects();
// 	}, []);


const JournalPage = () => {
	return (
		<section className="min-h-screen bg-[#E2E4DD]">
			<div className="paddingX border-x border-[#000]">
				<div className="w-full flex justify-center border-x border-[#000] h-80">
					<div className="flex flex-col justify-center items-center gap-2">
						<h1 className="font-mono font-light">List of Journals</h1>
						<p className="w-[70%] text-center font-mono text-base">
							We're a team of engineers, marketers, designers, all passionate
							about video and the work we create together. Welcome to our blog
							about video.
						</p>
						<Link href="/researcher">
							<button className="bg-[#FFB200] px-10 border py-3.5 rounded-full font-mono text-[#000]">
								<span className="flex justify-between items-center gap-2">
									See All By Researchers
									<Icon icon="ph:arrow-up-right-thin" width={30} />
								</span>
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="paddingX border-x  border-t border-[#000]">
				<div className="w-full flex justify-end items-center border-x border-[#000] h-32 px-4">
					<div className="w-[60%] flex justify-end items-center">
						<input
							className="rounded-l-full w-full border h-14 px-4 transition-colors duration-300 focus:border-[#FFB200] placeholder:font-mono placeholder:text-sm"
							placeholder="Find journals here..."
						/>
						<button className="bg-[#0072E3] px-4 py-3.5 rounded-r-full font-mono text-[#000]">
							Find
						</button>
					</div>
				</div>
			</div>
			<div className="paddingX border-x  border-y border-[#000]">
				<Link href={"/journals/journal_name"}>
					<JournalCard />
				</Link>
				<JournalCard />
				<JournalCard />
				<JournalCard />
				<JournalCard />
			</div>
		</section>
	);
};

export default JournalPage;
