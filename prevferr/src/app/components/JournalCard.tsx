import React from "react";
import { Journals } from "../type-def";

type props = {
	data: Journals;
	// refetch: Function;
};

const JournalCard = ({ data }: props) => {
	return (
		<div className="w-full border-x border-[#000] cursor-pointer">
			<div className="border-[#000] border-b h-48 flex justify-start gap-8 p-4 hover:bg-[#fff]">
				<img src="https://wp-pdf.com/wp-content/uploads/2021/07/pdf-image.png" />
				<div className="w-[40%] flex flex-col gap-4">
					<p className="font-mono text-[#565e67]">
						NOVEMBER 27, 2023 (ABOUT 2 MONTHS AGO)
					</p>
					<h1 className="text-xl">{data?.title}</h1>
					<div className="flex justify-start items-center gap-4">
						<img
							src="https://cdn.sanity.io/images/2ejqxsnu/production/d6d798e8581a361efb9d9ef2923794da065d0e6e-450x445.jpg?w=128&q=75&fit=clip&auto=format"
							className="h-10 w-10 rounded-full object-cover"
							alt="researcher"
						/>
						<p className="text-base font-mono">
							<span className="text-[#565e67] text-sm">BY</span> Adam Turnere
						</p>
						<span className="text-[#565e67]">•</span>
						<p className="font-mono text-[#565e67] text-sm">4 Months Ago</p>
						<span className="text-[#565e67]">•</span>
						<p className="text-base font-mono">ENGINEERING</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JournalCard;
