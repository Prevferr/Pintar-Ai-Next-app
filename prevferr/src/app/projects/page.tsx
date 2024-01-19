import React from "react";
import ReseacrcherCard from "../components/ReseacrcherCard";

const ProjectPage = () => {
	return (
		<section className="min-h-screen bg-[#E2E4DD]">
			<div className="paddingX border-x border-[#000]">
				<div className="w-full flex justify-center border-x border-[#000] h-80">
					<div className="flex flex-col justify-center items-center gap-2">
						<h1 className="font-mono font-light">List of Project</h1>
						<p className="w-[70%] text-center font-mono text-base">
							The Mux team has created some of the most respected products and
							communities in video today.
						</p>
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
				<div className="w-full border-x border-[#000]">
					<div className="grid grid-cols-4">
						<ReseacrcherCard />
						<ReseacrcherCard />
						<ReseacrcherCard />
						<ReseacrcherCard />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectPage;
