import React from "react";
import { FooterItems } from "../constants";

const Footer = () => {
	return (
		<section className="paddingX paddingYShorter border-t bg-[#252525]">
			<div className="w-full flex justify-around gap-2">
				<div className="w-[20%] flex flex-col gap-4">
					<p className="font-semibold text-[#fff]">Categories</p>
					{FooterItems[0].map((e) => (
						<p className="text-[#fff] text-sm font-light cursor-pointer hover:underline">
							{e}
						</p>
					))}
				</div>
				<div className="w-[20%] flex flex-col gap-4">
					<p className="font-semibold text-[#fff]">About</p>
					{FooterItems[1].map((e) => (
						<p className="text-[#fff] font-light text-sm cursor-pointer hover:underline">
							{e}
						</p>
					))}
				</div>
				<div className="w-[20%] flex flex-col gap-4">
					<p className="font-semibold text-[#fff]">Support and Education</p>
					{FooterItems[2].map((e) => (
						<p className="text-[#fff] font-light text-sm cursor-pointer hover:underline">
							{e}
						</p>
					))}
				</div>
				<div className="w-[20%] flex flex-col gap-4">
					<p className="font-semibold text-[#fff]">Community</p>
					{FooterItems[3].map((e) => (
						<p className="text-[#fff] font-light text-sm cursor-pointer hover:underline">
							{e}
						</p>
					))}
				</div>
				<div className="w-[20%] flex flex-col gap-4">
					<p className="font-semibold text-[#fff]">Business Solutions</p>
					{FooterItems[4].map((e) => (
						<p className="text-[#fff] font-light text-sm cursor-pointer hover:underline">
							{e}
						</p>
					))}
				</div>
			</div>
			<div className="border-b paddingYShorter3"></div>
			<div className="paddingTopShorter2 flex justify-between gap-4 items-center">
				<h1 className="text-3xl text-[#fff]">Pintar - Scholar.</h1>
				<p className="text-sm text-[#fff] underline">
					© Pintar - Sholar International Ltd. 2024, Integrated with Open Ai.
				</p>
			</div>
		</section>
	);
};

export default Footer;
