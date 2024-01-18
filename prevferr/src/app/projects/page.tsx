"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { Icon } from "@iconify/react";
import CardProject from "../components/CardProject";
import Footer from "../components/Footer";
import Link from "next/link";

const ProjectPage = () => {
	return (
		// <section className="paddingX paddingYShorter3">
		<div className="flex flex-col gap-8">
			<div className="flex justify-start gap-2 items-center">
				<Link href="/">
					<Icon
						icon="fluent:home-28-regular"
						width={20}
						className="cursor-pointer"
						color="#fff"
					/>
				</Link>
				<p className="text-[#fff] font-light text-sm">/</p>
				<p className="text-[#fff] font-light text-sm">Projects - List</p>
			</div>
			<span className="flex flex-col gap-2">
				<h3 className="text-[#fff]">On going Project</h3>
				<p className="text-[#fff] font-light text-base">
					Join to available project available to change the world
				</p>
			</span>

			<div className="flex flex-col gap-4">
				<h3 className="text-xl text-[#fff] font-semibold">We need you</h3>
				<div className="flex justify-start gap-3">
					<div className="w-[15%] flex justify-start gap-2 items-center border rounded-full">
						<img
							src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/flat_minimalist.78e0303.svg"
							className="m-2 object-cover rounded-full border h-14 w-14 bg-[#fff]"
						/>
						<p className="text-[#fff] font-light text-sm">Sinarjaya</p>
					</div>
					<div className="w-[15%] flex justify-start gap-2 items-center border rounded-full">
						<img
							src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/retro.ce533be.svg"
							className="m-2 object-cover rounded-full border h-14 w-14 bg-[#fff]"
						/>
						<p className="text-[#fff] font-light text-sm">Shiper</p>
					</div>
				</div>
			</div>
			<div className="border-b"></div>
			<p className="text-[#fff] font-light text-sm">100+ projects available</p>
			<div className="grid grid-cols-4 gap-4">
				<CardProject />
				<CardProject />
				<CardProject />
				<CardProject />
				<CardProject />
				<CardProject />
				<CardProject />
				<CardProject />
			</div>
		</div>
		// </section>
	);
};

export default ProjectPage;
