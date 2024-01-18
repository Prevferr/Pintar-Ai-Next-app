"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { Icon } from "@iconify/react";
import CardProject from "../components/CardProject";
import Footer from "../components/Footer";
import Link from "next/link";
import CardJournal from "../components/CardJournal";
import PdfViewer from "../components/PdfViewer";

const JournalPage = () => {
	return (
		<section className="paddingX paddingYShorter3">
			<Navbar />
			<div className="flex flex-col gap-8">
				<div className="flex justify-start gap-2 items-center">
					<Link href="/">
						<Icon icon="fluent:home-28-regular" width={20} className="cursor-pointer" />
					</Link>
					<p className="text-[#74767e] font-light text-sm">/</p>
					<p className="text-[#74767e] font-light text-sm">Journals - List</p>
				</div>
				<span className="flex flex-col gap-2">
					<h3 className="text-[#252525]">Find what you need</h3>
					<p className="text-[#74767e] font-light text-base">Join to available project available to chnage the world</p>
				</span>
				<div className="flex justify-end gap-2">
					<input className="bg-[#fff] w-[50%] border px-4 py-2 focus:outline-none focus:border-[#1dbf73] rounded-xl placeholder:text-sm" placeholder="Article Name, Jounal Name.." />

					<button className="bg-[#1dbf73] text-[#fff] px-4 rounded-xl focus:outline-none focus:ring focus:border-[#1dbf73]">Find</button>
				</div>

				<p className="text-[#74767e] font-light text-sm">100+ Journals available</p>
				<div className="grid grid-cols-4 gap-4">
					<CardJournal />
					<CardJournal />
					<CardJournal />
					<CardJournal />
					<CardJournal />
					<CardJournal />
				</div>
				{/* <PdfViewer /> */}
			</div>
		</section>
	);
};

export default JournalPage;
