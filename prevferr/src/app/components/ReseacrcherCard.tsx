import React from "react";

const ReseacrcherCard = () => {
	return (
		<div className="bg-[#fff] border border-[#000] rounded-3xl overflow-hidden">
			<div className="flex flex-col">
				<div className="w-full flex justify-center border-b border-[#000]">
					<img
						src="https://cdn.sanity.io/images/2ejqxsnu/production/73875de055dec1746fb231a14b907f8c35226deb-2421x2421.jpg?w=384&q=75&fit=clip&auto=format"
						className="w-[50%] object-cover h-52 rounded-tl-3xl"
						alt="Researcher"
					/>
					<p className="w-[50%] p-4 flex justify-center items-center text-start font-mono text-sm">
						Peneliti Antariksa di raja malaysia
					</p>
				</div>
				<div className="w-full px-4 py-2 flex flex-col gap-6 bg-[#E2E4DD]">
					<p className="font-mono text-lg font-semibold">Glenn Anderson</p>
					<p className="font-mono text-sm">
						Permanently curious about all things technology and customer
						success. Previously helped customers solve problems at Lightstep and
						Cisco Meraki. A native New Yorker who’s still on the hunt for a
						proper bagel in San Francisco.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ReseacrcherCard;