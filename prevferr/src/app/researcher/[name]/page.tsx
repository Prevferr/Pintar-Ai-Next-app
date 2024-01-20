import JournalCard from "@/app/components/JournalCard";
import React from "react";

const page = () => {
	return (
		<section className="w-full bg-[#E2E4DD] flex min-h-screen">
			<div className="w-[30%] bg-red-400 ">profile</div>
			<div className="w-[70%] flex flex-col">
				<JournalCard />
				<JournalCard />
				<JournalCard />
			</div>
		</section>
	);
};

export default page;
