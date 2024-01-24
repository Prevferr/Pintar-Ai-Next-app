"use client";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import JournalCard from "../components/JournalCard";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { JournalWithResearcher } from "../type-def";
import { NextRequest } from "next/server";
import { readPayload } from "../../../helpers/lib/jwt";
import DateChnage from "../../../helpers/utils/DateChange";
import TimeChange from "../../../helpers/utils/TimeChange";
import PostChange from "../../../helpers/utils/PostChange";

const WelcomePage = (request: NextRequest) => {
	const [journal, setJournal] = useState([] as JournalWithResearcher[]);
	const router = useRouter();

	const fetchData = async () => {
		try {
			const response = await fetch(
				"http://localhost:3000/api/welcome-researcher"
			);

			if (!response.ok) {
				throw new Error("Failed fetching data");
			}

			const responseJSON = await response.json();
			setJournal(responseJSON);
		} catch (error) {
			console.error(error instanceof Error ? error.message : error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<section className="bg-[#E2E4DD] w-full">
				<div className="flex justify-between paddingX border-[#000] min-h-screen">
					<div className="py-4 w-[60%] border-l border-[#000] paddingXShorter paddingYShorter7 flex flex-col justify-around">
						<div className="flex justify-between items-center">
							<div className="flex flex-col justify-between gap-8">
								<h3 className="text-5xl font-mono text-left font-semibold text-[#000]">
									Hello Researchers! At Pintar Ai,
								</h3>
								<p className="text-[#000] font-mono text-xl">
									The hub of inspiration and discovery for talented researchers!
									Let's explore the world of knowledge together.
								</p>
								<Link href="/create-journal">
									<button
										// className="mr-auto border flex items-center gap-2 bg-[#fff] py-3 px-5 rounded-lg text-[#000] cursor-pointer font-mono transition-transform duration-300 hover:transform translate-y-[-3px]"
										className="w-full flex justify-center bg-[#fff] hover:bg-[#d6e7aa] text-[#000] hover:border  px-4 py-4 rounded-full tracking-wide font-mono shadow-lg cursor-pointer transition ease-in duration-500"
										onClick={() => router.push("/create-journal")}
									>
										<p className="text-sm">Create Journal</p>
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="w-[40%] flex flex-col gap-4 paddingYShorter2">
						{journal.map((el, i) => (
							<div
								className="mx-auto border w-full border-[#000] rounded-3xl flex flex-col"
								key={el?.id}
							>
								<div
									// className="bg-[#FFB200] rounded-t-3xl py-3 border-b border-[#000]"
									className={`py-3 border-b border-[#000] ${
										i % 2 === 0
											? "bg-[#FFB200] rounded-t-3xl"
											: "bg-[#0072e3] rounded-t-3xl"
									}`}
								>
									<p
										// className="text-[#000] text-center font-mono"
										className={`text-center font-mono ${
											i % 2 === 0 ? "text-[#000]" : "text-[#fff] "
										}`}
									>
										Journals
									</p>
								</div>

								<div className="w-full flex justify-center items-center py-4">
									<div className="w-[60%] mx-auto flex flex-col gap-4">
										<p className="font-mono text-sm text-[#565e67]">
											{PostChange(el?.createdAt)}
										</p>
										<Link href={`/journals/${el?.title}`}>
											<h1 className="text-xl font-mono hover:underline text-justify">
												{el.title}
											</h1>
										</Link>

										<p className="font-mono text-[#252525] text-base">
											[{el.keywords.toUpperCase()}]
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default WelcomePage;
