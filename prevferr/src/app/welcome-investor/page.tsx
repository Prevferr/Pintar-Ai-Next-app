"use client";

import React, { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import { Icon } from "@iconify/react";

const WelcomePage = () => {
	const [journal, setJournal] = useState([]);
	const fetchData = async () => {
		try {
			const response = await fetch("http://localhost:3000/api/projects");

			if (!response.ok) {
				throw new Error("Failed fetching data");
			}

			const responseJSON = await response.json();

			setJournal(responseJSON);
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
			} else {
				console.log(error);
			}
		}
	};

	const rupiah = (number: any) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<>
			<section className="flex w-full justify-center py-11">
				{journal.map((el: any) => {
					return (
						<>
							<div className="rounded-2xl w-[400px] overflow-hidden shadow-md" key={el.id}>
								<div className="shadow rounded-xl flex flex-col pb-5 bg-[#fff]">
									<div className="relative flex flex-col justify-center overflow-hidden">
										<img src={el.project_image} className="rounded-t-xl" alt="Image Description" />
										<div className="absolute top-0 left-0 h-full w-full cursor-pointer opacity-25 rounded-xl"></div>
									</div>
									<div className="p-7 text-xl py-7">
										<span className="flex justify-start gap-2 items-center">
											<p className="text-xs text-[#74767e]">{el.tags}</p>
											<Icon icon="material-symbols-light:verified-outline" color="#0096FF" width={15} />
										</span>
										<h1 className="text-gray-800 font-extrabold text-sm mb-5">{el.project_name}</h1>
										<p className="text-[#252525] font-semibold text-sm">{el.description_project}</p>
										<span className="flex justify-start gap-2 items-center">
											<p className="text-xs font-light text-[#252525]">Budget</p>
											<p className="text-[#0096FF] text-sm font-bold">{rupiah(el.project_budget)}</p>
										</span>
									</div>
								</div>
							</div>
						</>
					);
				})}
			</section>
		</>
	);
};

export default WelcomePage;
