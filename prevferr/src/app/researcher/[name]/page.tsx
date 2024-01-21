import JournalCard from "@/app/components/JournalCard";
import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<section className="w-full bg-[#E2E4DD] flex">
			<div className="w-[20%]  paddingXShorter2 paddingYShorter2 flex flex-col items-center gap-4">
				<img
					src="https://cdn.sanity.io/images/2ejqxsnu/production/d6d798e8581a361efb9d9ef2923794da065d0e6e-450x445.jpg?w=128&q=75&fit=clip&auto=format"
					className=" w-60 h-60 rounded-full object-cover"
					alt="researcher"
				/>
				<div className="text-center">
					<p className="text-base font-mono">Adam Turnere</p>
					<p className="text-base font-mono">Software Engginer</p>
				</div>
			</div>
			<div className="w-[80%] flex flex-col">
				<Link href={"/journals/journal_name"}>
					<JournalCard />
				</Link>
				<Link href={"/journals/journal_name"}>
					<JournalCard />
				</Link>
				<Link href={"/journals/journal_name"}>
					<JournalCard />
				</Link>
			</div>
		</section>
	);
};

export default page;
