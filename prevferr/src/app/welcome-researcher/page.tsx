import React from "react";

const WelcomePage = () => {
	return (
		<section className="bg-[#005454] min-h-screen w-full">
			<div className="paddingX border-b border-[#000]">
				<div className="w-full flex justify-center border-x  border-[#000]">
					<div className="flex justify-between items-center">
						<div className="p-4 flex flex-col justify-between gap-8">
							<div className="flex flex-col justify-around  gap-4 text-base text-white">
								<h3 className="text-3xl font-mono text-left font-semibold">
									Welcome Alvin JustKidding you need is here..
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center paddingX border-b border-[#000]">
				<div className="w-[70%] border-x border-[#000] border-b">x</div>
				<div className="w-[30%] border-x border-[#000] border-b">x</div>
			</div>
		</section>
	);
};

export default WelcomePage;
