"use client";
import React from "react";
import { Icon } from "@iconify/react";

const WelcomePage = () => {
	return (
		<section className="bg-[#242628] w-full">
			<div className="paddingX">
				{/* <div className="w-full flex justify-center border-x  border-[#000]">
					<div className="flex justify-between items-center">
						<div className="p-4 flex flex-col justify-between gap-8">
							<div className="flex flex-col justify-around  gap-4 text-base text-white">
								<h3 className="text-3xl font-mono text-left font-semibold">
									Welcome Alvin JustKidding Everything you need is here..
								</h3>
							</div>
						</div>
					</div>
				</div> */}
			</div>
			<div className="flex justify-center paddingX border-[#000]  min-h-screen">
				<div className="w-[60%] border-l border-[#000] paddingXShorter3 paddingYShorter2">
					<div className="flex justify-between items-center">
						<div className="flex flex-col justify-between gap-8">
							<h3 className="text-5xl font-mono text-left font-semibold text-[#fff]">
								Everything you need is here..
							</h3>
							<p className="text-[#fff] font-mono text-sm">
								From startups to the World Cup, modern software teams use Mux
								products to stream billions of minutes of video every day.
							</p>
							{/* <Link href="/about-us"> */}
							<button
								className="mr-auto border flex items-center gap-2 bg-[#fff] py-3 px-5 rounded-full text-[#000] cursor-pointer font-mono transition-transform duration-300 hover:transform translate-y-[-3px]"
								// onClick={LoadToTop}
							>
								<p className="text-sm">Create Journal</p>
							</button>
							{/* </Link> */}
						</div>
					</div>
				</div>
				<div className="w-[40%] border-x border-[#000] paddingX paddingYShorter2">
					x
				</div>
			</div>
		</section>
	);
};

export default WelcomePage;
