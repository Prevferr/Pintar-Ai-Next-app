import React from "react";
import { FooterItems } from "../constants";

const Footer = () => {
	return (
		<section className="paddingX paddingYShorter border">
			<div className="w-full flex justify-around gap-2">
				<div className="w-[20%] flex flex-col gap-4">
					<p className="font-semibold">Categories</p>
					{FooterItems[0].map((e) => (
						<p className="text-[#74767e] text-sm font-light cursor-pointer hover:underline">
							{e}
						</p>
					))}
				</div>
				<div className="w-[20%] flex flex-col gap-4">
					<p className="font-semibold">About</p>
					{FooterItems[1].map((e) => (
						<p className="text-[#74767e] font-light text-sm cursor-pointer hover:underline">
							{e}
						</p>
					))}
				</div>
				<div className="w-[20%] flex flex-col gap-4">
					<p className="font-semibold">Support and Education</p>
					{FooterItems[2].map((e) => (
						<p className="text-[#74767e] font-light text-sm cursor-pointer hover:underline">
							{e}
						</p>
					))}
				</div>
				<div className="w-[20%] flex flex-col gap-4">
					<p className="font-semibold">Community</p>
					{FooterItems[3].map((e) => (
						<p className="text-[#74767e] font-light text-sm cursor-pointer hover:underline">
							{e}
						</p>
					))}
				</div>
				<div className="w-[20%] flex flex-col gap-4">
					<p className="font-semibold">Business Solutions</p>
					{FooterItems[4].map((e) => (
						<p className="text-[#74767e] font-light text-sm cursor-pointer hover:underline">
							{e}
						</p>
					))}
				</div>
			</div>
			<div className="border-b paddingYShorter3"></div>
			<div className="paddingTopShorter2 flex justify-between gap-4 items-center">
				<h1 className="text-3xl text-[#74767e]">Prevferr.</h1>
				<p className="text-sm text-[#74767e] underline">
					© Prevferr International Ltd. 2024
				</p>
			</div>
		</section>
	);
};

export default Footer;
