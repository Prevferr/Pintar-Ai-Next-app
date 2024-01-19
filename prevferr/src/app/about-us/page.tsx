import React from "react";
import Footer from "../components/Footer";

const AboutPage = () => {
	return (
		<div className="bg-[#f4f6f4] paddingX paddingYShorter">
			<div className="paddingX paddingY bg-[#fff] min-h-screen border">
				<div className="w-[60%] mx-auto flex flex-col gap-4">
					<p className="font-mono text-[#565e67]">
						NOVEMBER 27, 2023 (ABOUT 2 MONTHS AGO)
					</p>
					<h1 className="text-5xl">How to add a background video in Next.js</h1>
					<div className="flex justify-start items-center gap-4">
						<img
							src="https://cdn.sanity.io/images/2ejqxsnu/production/d6d798e8581a361efb9d9ef2923794da065d0e6e-450x445.jpg?w=128&q=75&fit=clip&auto=format"
							className="h-14 w-14 rounded-full object-cover"
						/>
						<p className="text-base font-mono">
							<span className="font-mono text-[#565e67] text-sm">BY</span> Adam
							Turnere
						</p>
						<span className="text-[#565e67]">•</span>
						<p className="font-mono text-[#565e67] text-sm">4 Mount Ago</p>
						<span className="text-[#565e67]">•</span>
						<p className="text-base font-mono">ENGGINERING</p>
					</div>
				</div>
				<div className="border-b my-8 w-[70%] mx-auto"></div>
			</div>
		</div>
	);
};

export default AboutPage;