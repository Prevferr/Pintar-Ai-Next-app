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
			<section className="flex w-full justify-center py-11 gap-6">
				{journal.map((el: any) => {
					return (
						<>
							<div key={el.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
								<a href="#">
									<img className="rounded-t-lg" src={el.project_image} alt="" />
								</a>
								<div className="p-5">
									<a href="#">
										<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.project_name}</h5>
									</a>
									<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.description_project}</p>
									<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Budget: {rupiah(el.project_budget)}</p>
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
