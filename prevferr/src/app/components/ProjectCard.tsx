"use client";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const ProjectCard = () => {
	return (
		<div className="bg-[#fff] border border-[#000] rounded-3xl overflow-hidden">
			<div className="flex flex-col">
				<div className="w-full flex justify-center border-b border-[#000]">
					<img
						src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//104/MTA-63697343/no-brand_no-brand_full01.jpg"
						className="w-full object-cover h-52 rounded-tl-3xl"
						alt="Researcher"
					/>
				</div>
				<div className="w-full px-4 py-2 flex flex-col gap-6 bg-[#E2E4DD]">
					<p className="font-mono text-[#565e67] text-sm">
						Starting Date : NOVEMBER 27, 2023 (ABOUT 2 MONTHS AGO)
					</p>
					<p className="font-mono text-lg font-semibold">
						Meningkatkan Efisiensi Mesin
					</p>
					<p className="font-mono text-sm">
						Bagaiman caranya meningkatkan efisiensi mesin
					</p>
					<p className="font-mono text-sm">Status : on going</p>
					<p className="font-mono text-[#565e67] text-sm">
						Expecting Finish : NOVEMBER 27, 2023
					</p>
					<p className="font-mono text-sm">Budget : 10000000</p>
					<ProgressBar
						completed={18}
						baseBgColor="#0072e3"
						bgColor="#ffb200"
						height="13px"
						labelSize="10px"
					/>
					<p className="font-mono text-sm">Machine</p>
					<div className="flex justify-start items-center gap-4">
						<img
							src="https://cdn.sanity.io/images/2ejqxsnu/production/d6d798e8581a361efb9d9ef2923794da065d0e6e-450x445.jpg?w=128&q=75&fit=clip&auto=format"
							className="h-14 w-14 rounded-full object-cover"
						/>
						<p className="text-sm font-mono">Adam Turnere</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
