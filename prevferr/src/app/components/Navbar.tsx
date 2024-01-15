"use client";
import React from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
	return (
		<div className="absolute top-10 w-full">
			<nav className="paddingX paddingYShorter4 bg-transparent flex justify-between text-[#ffffff]">
				<h3>Prevferr.</h3>
				<div className="flex justify-between items-center gap-10">
					<ul className="flex justify-between gap-8 items-center">
						<div className="flex justify-start gap-2 px-3 py-1 rounded-lg items-center cursor-pointer">
							<li>Prevferr Pro</li>
							<Icon icon="mingcute:down-line" />
						</div>
						<div className="flex justify-start gap-2 px-3 py-1 rounded-lg items-center cursor-pointer">
							<li>Explore</li>
							<Icon icon="mingcute:down-line" />
						</div>
						<div className="flex justify-start gap-1 px-3 py-1 rounded-lg items-center cursor-pointer">
							<Icon icon="bitcoin-icons:globe-outline" width={30} />
							<li>English</li>
						</div>
						<li>Sign in</li>
					</ul>
					<button className="border border-[#fff] px-3 py-1 rounded-lg">
						Join
					</button>
				</div>
				{/* <Icon icon="eva:menu-fill" width={40} /> */}
			</nav>
		</div>
	);
};

export default Navbar;
